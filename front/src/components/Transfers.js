import React, { useState, useEffect} from 'react'
import {Link, useLocation} from "react-router-dom";

const Transfers = (props) => {

    const location = useLocation()

    const[locationState, setLocationSate] = useState({address:''})

     const [isShown, setIsShown] = useState();
     const [num, setNum] = useState('');
     

     useEffect(() =>{
      if(location.state){
        setLocationSate(location.state)
        console.log(location)
        console.log(locationState)
      }
      setIsShown(false);
    }, [])
    


     const handleClick = event => {
      if(num !== '' ){
      setIsShown(component => !component);
      }
      else setIsShown(false)
     }
    
    return(
       <div>
        <h1>Transfer</h1>
          <form>
             From: {locationState.address} 
              <label>To: 0x3jkfru83nj4lj98fn4i98snh498hv98483hnh9u8v48</label>
              <label>Amount: <input type="number" value={num} onChange={e=>setNum(e.target.value)}/>
             </label>
          </form>
          <button  onClick={handleClick}>submit</button>
       

      {isShown && (
        <div>
          <h1>Reciept </h1>
          <p>Transaction Hash:fdsfadfasdfasdf</p>
          <p>Block Hash: sj0934tj349834nhhjrt8934utj398</p>
          <p>Block Number: 10</p>
          <p>From: 0xj349ji346joi45j6i3j4i5j3o4i5j3ji</p>
          <p>To: 0xaiosjriowaejfiajwifjaiwjtiwjei34934</p>
          <p>Gas Used: 23000</p>
        </div>
      )}

    </div>
    )
}

export default Transfers