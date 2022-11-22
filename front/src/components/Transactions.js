import React, {useState, useEffect} from 'react'
const [transactions,setTransactions] = useState([]);
const Transactions = () => {

    useEffect(() => {
        axios.get('http://localhost:3001/transaction/history')
        .then(res => {
            const addresss = res.data;
            setTransactions({addresss});
        })
    })

// const [transactions,setTransactions] = useState ( [{
//             transactionhah:'0x3io34ju32ojo3j3noij3nj23jo42o34o23j4',
//             status: 'succeed',
//             timestamp: '2002-04-25t04:04',
//             from: '0x34jk34jk23j423j42j3k423k4l23j4k2423j4',
//             to: '0x43kljljfi34jroiejfroj4orijq23jroi34jroi2',
//             value: '240 Eth',
//             gasused: 22000
//         },
//         {
//             transactionhah:'0xjfklasjdkfakldjfalsfklajldaljfl;asjfl;ajsd',
//             status: 'succeed',
//             timestamp: '2002-04:45t04:04',
//             from: '0x34ifgug67bjnfgbogoeo6767janrijgaaa989jngvoa',
//             to: '0x43kljljfi34jroiejfroj4orijq23jroi34jroi2',
//             value: '240 Eth',
//             gasused: 22000
//         },
//         {
//             transactionhah:'0x3io34ju3489583435453j3noij3nj23jo42o34o23j4',
//             status: 'succeed',
//             timestamp: '2002-04:34t04:04',
//             from: '0x34jjio4jok35j6kl687k58nl5j9lkk;568jl3k2',
//             to: '0x43kljljfi34jroiejfroj4orijq23jroi34jroi2',
//             value: '240 Eth',
//             gasused: 22000
//         }]
//         )

    
        return (
         <div id="paragraph">
            <h1>Transaction History</h1>
        
            {transactions.map((transaction)=> {
            return( 
            <div key={transaction.source}>
                <p>Transaction Hash: {transaction.receiptHash}</p>
                <p>Status: {transaction.status}</p>
                <p>Timestamp: {transaction.timestamp}</p>
                <p>From: {transaction.from}</p>
                <p>To: {transaction.to}</p>
                <p>Value: {transaction.value}</p>
            </div>)
           
         })}
         </div>
        );
    
}

export default Transactions;