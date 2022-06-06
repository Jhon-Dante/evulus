import React, { Component } from "react";
import Transfers from "../../services/modules/Transfers";
// import HDWalletProvider from '@truffle/hdwallet-provider';
// import Web3 from 'web3'
import Typography from '@mui/material/Typography';
import evulus from './../../assets/img/evulus.svg'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import { useLocation } from "react-router-dom";

import { useWeb3React, Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers';
import { InjectedConnector } from '@web3-react/injected-connector'
import { formatEther } from '@ethersproject/units';


class NewTransfer extends Component{
    
    constructor(props){
        super(props);

        this.state={
            form:{
                amount:0,
                to: props.toWallet || ''
            },
            transactionParameters: {
                nonce: '0x00', // ignored by MetaMask
                gasPrice: '0x09184e72a000', // customizable by user during MetaMask confirmation.
                gas: '0x2710', // customizable by user during MetaMask confirmation.
                to: '0x0000000000000000000000000000000000000000', // Required except during contract publications.
                from: window.ethereum.selectedAddress, // must match user's active address.
                value: '0x00', // Only required to send ether to the recipient from the initiating external account.
                data:
                  '0x7f7465737432000000000000000000000000000000000000000000000000000000600057', // Optional, but used for defining smart contract creation and interaction.
                chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
                amount:0,
            }
        }
    }

    componentDidMount(){
        // const {amount} = this.props.location.state
        // alert(amount)
    }

    sendTransaction(){

        Transfers.processTransaction({address:"0xCB7D88a489D5AA873500aE25b17c867C5820CdFd"})
        .then(response => {
            const { data} = response.data;
            // const { meses, periods, total } = response;
            // this.setState(state => ( {
            //     // ...state,
            //     data: data,
            //     page:page,
            //     last_page: last_page,
            // }));
            console.log(data)
        })
        .catch(
            //   () => Globals.showError()
            // console.log('error')
        );
    }

    handleInput = (e) => {
        const {transactionParameters} = this.state;
        
        const {name, value} = e.target;
        this.setState(state => ({
            transactionParameters: {
                ...state.transactionParameters,
                [name]: value}
        }), () => {
            console.log(this.state.transactionParameters)
        });
        
    }

    render(){
        const {
                transactionParameters,
                form:{
                    to,
                    amount
                }} = this.state;
        return(
            <>
                {/* {amount} */}
                <div>
                    <img src={evulus} width={'200px'} className={'mb-2'}/>
                </div>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <div>
                            <Typography variant="h6" gutterBottom component="div">
                                <input type='text' name='to' className="form-control" placeholder="To Wallet" onChange={this.handleInput} />
                            </Typography>
                        </div>
                        <Divider />
                        <div>
                            <Typography variant="h6" gutterBottom component="div">
                                Contrato: 0xe50f8108ebb834c4b2802a4332bf0a236c20dbe6
                            </Typography>
                        </div>
                        <Divider />
                        <div>
                            <Typography variant="h6" gutterBottom component="div">
                                <input type='text' name='amount' className="form-control mt-2" placeholder="amount" onChange={this.handleInput} />
                            </Typography>
                        </div>
                        {/* <Divider />
                        <div>
                            <Typography variant="h6" gutterBottom component="div">
                                IVA: 12 
                            </Typography>
                        </div> */}
                        <Divider />
                        <CardActions>
                            {/* <Button size="small">Learn More</Button> */}
                            <button className="btn btn-success"
                                onClick={async () => {
                                    const txHash = await window.ethereum.request({
                                  method: 'eth_sendTransaction',
                                  params: [transactionParameters],
                                })
                                .catch(error => {
                                    if(error.code === 4001){
                                      alert('Transacción cancelada por el usuario')
                                    }
                                });
            
                                console.log({txHash})
                                }}
                            >Confirmar</button>
                        </CardActions>
                    </CardContent>
                </Card>
            </>
        )
    }
}

export default NewTransfer;