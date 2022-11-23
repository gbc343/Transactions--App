import React, {useState, useEffect} from 'react';
import axios from "axios";

const Wallet = () => {


   const [walletList, setWalletList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/account/balance?accounts=0x4jkfjio4jifko4joifj99fgjdf5jifjgifjj33jdijieipo6')
        .then(res => {
            const address = res.data;
            setWalletList(address);
        })
    })

 

    return(
        
        <div className='shown text-left'>
            <h1>My Wallet</h1>
           
            <p><b>Address:</b> {walletList.address}</p>
            <p><b>Balance:</b> {walletList.balance}</p>
          
          
            

        </div>
    )
}

export default Wallet