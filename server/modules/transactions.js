const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    source: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    amount:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    },
    gasUsed:{
        type:String
    },
    receiptHash:{
        type: String
    }

}, { timestamps: true })

const Trasaction = mongoose.model('Transaction', transactionSchema);
 module.exports = Trasaction;
// Transaction.insertMany([
//     {
//         source: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
//         destination: '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
//         amount: "200",
//         status:"SUCCESS",
//         gasUsed:"20000",
//         receiptHash:"0x456456lkjdsiau0934kjf09w34jf094jifsj094j3io4r099fji023",
//       },{
//         source: '0xf39Fd6e51aad88F6Fsdjkkflw4j279cffFb92266',
//         destination: '0xdF3e18d64BC6A983f673Ab319CCaE4f1a57C7097',
//          amount: "345",
//         status:"SUCCESS",
//         gasUsed:"23000",
//         receiptHash:"0x45645dsij546kjlkjlk45jlw34jf094jifsj094j3io4r099f46463",
//       },{
//         source: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
//         destination: '0xbDA5747bFJKJ5tk4nkFSeB87D40e51B197E',
//          amount: "200",
//         status:"SUCCESS",
//         gasUsed:"15000",
//         receiptHash:"0x44545JKLJ464jklaf4kjf09w34jf094jifsj094j3io4r099fji023",
//       }
// ]).then(function(){
//     console.log("Transaction data inserted")  // Success
// }).catch(function(error){
//     console.log(`Error loading Transaction data`)      // Failure
// });
