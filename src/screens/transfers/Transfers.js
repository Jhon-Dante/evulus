import React, { Component } from "react";
import { Table, Pagination, BasicCard } from "../../components";
import Transfers from "../../services/modules/Transfers";
// import Wallet from "../../utils/Wallet";
// import HDWalletProvider from '@truffle/hdwallet-provider';
// import Web3 from 'web3'
import { TableCell, TableRow } from "@mui/material";
import Globals from "../../utils/Globals";
import { Link } from "react-router-dom";

const header = ['txHash', 'Monto','To','From','Status','Fecha']

class Transfer extends Component{
    constructor(props){
        super(props);
        this.state ={
            title: "Transferencias",
            adj: "Transferencia",
            page: 1,
            total:0,
            last_page: 1,
            data:[],
            form:{
                amount:0,
                to:''
            }
        }

    }

    handleInput = (e) => {
        const {form} = this.state;
        
        const {name, value} = e.target;
        this.setState(state => ({
            form: {
                ...state.form,
                [name]: value}
        }), () => {
            // console.log(this.state.form)
        });
        
    }

    componentDidMount(){
        this.load()
        // this.getWallet();
    }

    // getWallet(){
    //     const mnemonic = "hand hair usual essence brain much talent wolf spell dismiss lyrics artwork"
    //     let provider = new HDWalletProvider(mnemonic, "https://speedy-nodes-nyc.moralis.io/74dde647108519513805b799/eth/ropsten", 5, 5, true, "m/44'/137'/0'/0/");
    //     const web3 = new Web3(provider);
    //     // web3.setProvider(provider)
    //     web3.eth.getAccounts(console.log)
    // }

    load(){
        const { form, page } = this.state;

        Transfers.getTransfers(page, form)
        .then(response => {
            const { data, last_page } = response.data;
            const { meses, periods, total } = response;
            this.setState(state => ( {
                // ...state,
                data: data,
                page:page,
                last_page: last_page,
            }));
        })
        .catch(
            //   () => Globals.showError()
            // console.log('error')
        );
    }

    render(){
        const { data, last_page, page, title, amount, to } = this.state
        return(
            <>
                {/* <Breadcrumb title={title}/> */}
                <BasicCard>
                    <div className="row align-items-center">
                        <div className="col-auto">
                            <Link to={{pathname:'/new_transfer', state:{toWallet:to, amount:amount}}} className={'btn btn-primary'}>Confirmar  </Link>
                        </div>
                    </div>
                </BasicCard>
                <div className="mt-4">
                    <Table 
                        data={data.length}
                        header={header}
                    >
                        {data.map((Item, key) => {
                            return (
                            <TableRow
                                key={key}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{Item.txhash}</TableCell>
                                <TableCell>{Item.amount}</TableCell>
                                <TableCell>{Item.to.name} ({Item.to.token})</TableCell>
                                <TableCell>{Item.from.name} ({Item.from.token})</TableCell>
                                <TableCell>{Globals.getStatus(Item.status)}</TableCell>
                                <TableCell>{Item.created_at}</TableCell>

                            </TableRow>
                            )
                        })}
                    </Table>
                </div>
                <div className="row my-3 mb-5">
                    <div className="col-md">
                        <Pagination
                            pages={last_page}
                            active={page}
                            onChange={page => {
                                this.setState(
                                {
                                    page: page
                                },
                                () => this.load()
                                );
                            }}
                        />
                    </div>
                </div>
            </>
        )
    }

}

export default Transfer