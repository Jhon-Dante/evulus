import { useState, useEffect } from 'react';
import './App.css';
import Transfer from './screens/transfers/Transfers';
import NewTransfer from './screens/transfers/NewTransfer';
import ViewTransfer from './screens/transfers/ViewTransfer';
import Header from './screens/layouts/Header';
import { Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import { useWeb3React, Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers';
import { InjectedConnector } from '@web3-react/injected-connector'
import { formatEther } from '@ethersproject/units';


function App(){
  return(
    <Web3ReactProvider getLibrary={(provider) => new Web3Provider(provider)}>
      <Child />
    </Web3ReactProvider>
  )
}

function Child(){
  
  const { active, account, activate, chainId, library } = useWeb3React()
    const balance = useBalance();
    const blockNumber = useBlockNumber();

    return (
      <div className="App">
        {!active ? (
        <button
          className='h-10 px-5 border border-gray-400 rounded-md'
          onClick={() => {
            activate(new InjectedConnector({}));
          }}
        >Connect</button>):(
          <>
            <Header balance={balance} blockNumber={blockNumber} chainId={chainId} account={account}/>
            <Container maxWidth="xl" className='mt-4'>
              <Routes>
                <Route path='/' element={<Transfer />} />
                <Route path='/new_transfer' element={<NewTransfer />} />
                <Route path='/show_transfer' element={<ViewTransfer />} />
              </Routes>
            </Container>
          </>
        )}
      </div>
    );
}

function useBalance(){
  const { account, library, } = useWeb3React();
  const [ balance, setBalance ] = useState()

  useEffect(() => {
    if(account){
      library.getBalance(account).then(val => setBalance(val))
    }
  }, [account, library])

  return balance ? `${formatEther(balance)} ETH` : null;
}

function useBlockNumber(){
  const {library} = useWeb3React();
  const [blockNumber, setBlockNumber] = useState();

  useEffect(() =>{
    if(library){
      const updateBlockNumber = (val) => setBlockNumber(val)
      library.on('block', updateBlockNumber)

      return () =>{
        library.removeEventListener('block', updateBlockNumber)
      }
    }
  }, [library]);

  return blockNumber;

}

export default App;