// class Accounts{


//   constructor(){
//     this.accounts = [{
//     index:1,
//     address:"0x4jkfjio4jifko4joifj99fgjdf5jifjgifjj33jdijieipo6",
//     balance: "98765432100"
//     },
//     {
//       index:2,
//       address:"0x45j3k45jlk3jlkjflksdjlbkjaljfasdjflksdfaafgafs",
//       balance: "85643667512"

//     },
//     {
//       index:3,
//       address:"0x45j3k45jlk3jlkjfljf9834jni804j049j90fj40f490js",
//       balance: "97840958374"

//     },
//     {
//       index:4,
//       address:"0x45j3k45jlk3jeji39djlbkjaljfasdjflksdfaafgafaas",
//       balance: "456734346"

//     },
//     {
//       index:5,
//       address:"0x343fajf34j4ifjsksdjlbkjaljfasdjflksdfaafgafaas",
//       balance: "348686864"

//     }
   
//   ];
//   }

  getAddresses = function() {
    var list = [{
    index:1,
    address:"0x4jkfjio4jifko4joifj99fgjdf5jifjgifjj33jdijieipo6",
    balance: "98765432100"
    },
    {
      index:2,
      address:"0x45j3k45jlk3jlkjflksdjlbkjaljfasdjflksdfaafgafs",
      balance: "85643667512"

    },
    {
      index:3,
      address:"0x45j3k45jlk3jlkjfljf9834jni804j049j90fj40f490js",
      balance: "97840958374"

    },
    {
      index:4,
      address:"0x45j3k45jlk3jeji39djlbkjaljfasdjflksdfaafgafaas",
      balance: "456734346"

    },
    {
      index:5,
      address:"0x343fajf34j4ifjsksdjlbkjaljfasdjflksdfaafgafaas",
      balance: "348686864"

    }
   
  ];
    return list;
  }


  getBalance = function(value) {
     var list = [{
    index:1,
    address:"0x4jkfjio4jifko4joifj99fgjdf5jifjgifjj33jdijieipo6",
    balance: "98765432100"
    },
    {
      index:2,
      address:"0x45j3k45jlk3jlkjflksdjlbkjaljfasdjflksdfaafgafs",
      balance: "85643667512"

    },
    {
      index:3,
      address:"0x45j3k45jlk3jlkjfljf9834jni804j049j90fj40f490js",
      balance: "97840958374"

    },
    {
      index:4,
      address:"0x45j3k45jlk3jeji39djlbkjaljfasdjflksdfaafgafaas",
      balance: "456734346"

    },
    {
      index:5,
      address:"0x343fajf34j4ifjsksdjlbkjaljfasdjflksdfaafgafaas",
      balance: "348686864"

    }
   
  ];
   const found = list.find(account => account.address === value);
   return found;
  }




module.exports = {
  getAddresses,
  getBalance

}


