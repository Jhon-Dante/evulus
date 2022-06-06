import HDWalletProvider from '@truffle/hdwallet-provider';
import Web3 from 'web3'

const mnemonic = "hand hair usual essence brain much talent wolf spell dismiss lyrics artwork";

class Wallet{
    
    static getToken = () => {
        let provider = new HDWalletProvider(mnemonic, "https://speedy-nodes-nyc.moralis.io/74dde647108519513805b799/eth/ropsten", 5, 1, true, "m/44'/137'/0'/0/").then();
        const web3 = new Web3(provider);
        // web3.setProvider(provider)
        web3.eth.getAccounts(console.log)
    } 
    // let provider = new HDWalletProvider(mnemonic, "https://speedy-nodes-nyc.moralis.io/74dde647108519513805b799/eth/ropsten"); // Especifica desde el 0
    
    // Or, alternatively pass in a zero-based address index.
    // Especificar Wallet
    // provider = new HDWalletProvider(mnemonic, "http://localhost:8545", 5); 
    
    // Or, use your own hierarchical derivation path
    
    
    // HDWalletProvider is compatible with Web3. Use it at Web3 constructor, just like any other Web3 Provider
    

}

export default Wallet;