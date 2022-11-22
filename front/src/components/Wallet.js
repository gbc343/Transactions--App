import React, {useState, useEffect} from 'react';
const Wallet = () => {
   const [walletList, setWalletList] = useState({
        address: "0x45t34f45gf4gssiju984jior980gfjel4",
        balance: 9999.45454352345345
    });

   
    console.log(walletList.balance)
    return(
        <div>
            <h1>My Wallet</h1>
            <p>Address: {walletList.address}</p>
            <p>Balance: {walletList.balance}</p>

        </div>
    )
}

export default Wallet