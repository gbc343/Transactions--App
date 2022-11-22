import {Link} from "react-router-dom";
import React, {useState} from 'react'

const Addresses = () => {
  //just hardcoed for now
  const [adresses,setAddresses] = useState([{
    index:1,
    address:"0x4jkfjio4jifko4joifj99fgjdf5jifjgifjj33jdijieipo6"},
    {
      index:2,
      address:"0x45j3k45jlk3jlkjflksdjlbkjaljfasdjflksdfaafgafs"
    },
    {
      index:3,
      address:"0x45j3k45jlk3jlkjfljf9834jni804j049j90fj40f490js"
    },
    {
      index:4,
      address:"0x45j3k45jlk3jeji39djlbkjaljfasdjflksdfaafgafaas"
    },
    {
      index:5,
      address:"0x343fajf34j4ifjsksdjlbkjaljfasdjflksdfaafgafaas"
    }
   
  ])

    return(
      <div>
      <h1>Blockchain Node Addresses</h1>
      {adresses.map((adressess)=> 
      {
        return(
           <ol key={adressess.index}>
            <Link to="/transfers" state={{address:adressess.address}}> {adressess.address}</Link>
          </ol>
            
        )
      })}
      </div>
    )
    

}

export default Addresses;