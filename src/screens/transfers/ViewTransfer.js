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
import QRCode from "qrcode.react";
import TextField from '@mui/material/TextField';

class ViewTransfer extends Component{
    constructor(props){
        super(props);

        this.state={
            form:{
                amount: this.props.amount?this.props.amount:0,
                address:"0xCB7D88a489D5AA873500aE25b17c867C5820CdFd" 
            }
        }
    }

    render(){
        return(
            <>
                <div class>
                    <img src={evulus} width={'200px'} className={'mb-2'}/>
                </div>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                    <Typography variant="h3" gutterBottom component="div">
                        Aprobado
                    </Typography>
                        <div>
                        <QRCode
                            value="https://www.tutorialspoint.com/"
                            style={{ marginRight: 0 }}
                        />
                            <p>0xCB7D88a489D5AA873500aE25b17c867C5820CdFd </p>
                        </div>
                        <CardActions>
                            {/* <Button size="small">Learn More</Button> */}
                            <button className="btn btn-success" onClick={this.sendTransaction}>Send Transaction</button>
                        </CardActions>
                    </CardContent>
                </Card>
            </>
        )
    }
}

export default ViewTransfer;