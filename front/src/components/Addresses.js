import {Link} from "react-router-dom";
import React, {useState, useEffect} from 'react'
import axios from "axios";

const Addresses = () => {
  const [adresses,setAddresses] = useState([]);

  useEffect(() =>{
    
    axios.get('http://localhost:3001/account/addresses')
    .then(res => {
      let address = res.data
      setAddresses(address);
    })
  },[])
  //just hardcoed for now
  // const [adresses,setAddresses] = useState([{
  //   index:1,
  //   address:"0x4jkfjio4jifko4joifj99fgjdf5jifjgifjj33jdijieipo6"},
  //   {
  //     index:2,
  //     address:"0x45j3k45jlk3jlkjflksdjlbkjaljfasdjflksdfaafgafs"
  //   },
  //   {
  //     index:3,
  //     address:"0x45j3k45jlk3jlkjfljf9834jni804j049j90fj40f490js"
  //   },
  //   {
  //     index:4,
  //     address:"0x45j3k45jlk3jeji39djlbkjaljfasdjflksdfaafgafaas"
  //   },
  //   {
  //     index:5,
  //     address:"0x343fajf34j4ifjsksdjlbkjaljfasdjflksdfaafgafaas"
  //   }
   
  // ])

    return(
      <div className="shown text-left">
      <h1>Blockchain Node Addresses</h1>
      {adresses.map((adressess)=> 
      {
        return(
           <ol key={adressess.index}>
            <Link to="/transfers" state={{address:adressess.address}}> <b>{adressess.address}</b></Link>
          </ol>
            
        )
      })}
      </div>
    )
    

}

export default Addresses;