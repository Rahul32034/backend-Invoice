const mongoose=require("mongoose");

const loginSchema=new mongoose.Schema({
    firstname: String,
    lastname:String,
    email:String,
    password:String,
    date:{type:String,default: Date.now},
    url:String,
    status:Boolean,
    randomString:String,
    role: String
})
const invoiceSchema = new mongoose.Schema({
    invoiceName:String,
    date: {type:String,default:Date.now },
    cmpny_address: {
        companyName:String,
        address:String,
        city:String,
        email:String,
        phone:Number,
    },
    user_address:{
        toname:String,
        toaddress:String,
        tocity:String,
        toemail:String,
        tophone:Number,
    },
    item_details:{
        item:String,
        item_desc:String,
        price:Number,
        qty:Number,
        total:Number,
    },
    tax:{
        subtotal:Number,
        vat:Number,
        grand_total:Number,
    }
})

const User =mongoose.model("user",loginSchema);
const Invoice=mongoose.model("invoice",invoiceSchema);
module.exports={User,Invoice};