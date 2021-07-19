
var express =require("express");
var router =express.Router();
var JWT = require("jsonwebtoken");

const{getuser,userlogin,userregister,forgetpassword, verfiystring, expirestring, passwordreset,accountactivate,addinvoice,getinvoice, selectinvoice} =require("../controller/login")

router.get("/",async(req,res)=>{
  try{
    const loginData =await getuser();
    res.status(200).json(loginData)
  }
  catch(error){
    console.log(error);
    res.statusCode(500);
  }
})

router.post("/createUser", async(req,res)=>{
  try{
    const {firstname,lastname,email,password,role}=req.body;
    const response=await userregister(firstname,lastname,email,password,role);
    res.status(response.status).json(response.msg);

  }
  catch(error){
    console.log(error);
    res.statusCode(500);
  }
});

router.post("/login",async(req,res)=>{
  try{
    const {email,password}=req.body;
    const response =await userlogin(email,password);
    res.status(response.status).json(response);

  }
  catch(error){
    console.log(error);
      res.statusCode(500);
  }
});
//
router.post('/forgot', async(req, res) => {
  try {
    const {email} = req.body;
    const response = await forgetpassword(email);
    res.status(response.status).json(response.msg);
    setTimeout(expirestring, 30000, email);
  } catch (error) {
    console.log(error);
    res.statusCode(500);
  }
})

router.post("/verifyString", async(req,res)=>{
  try{
    const{email,randomString}=req.body;
    const response=await verfiystring(email,randomString);
    res.status(response.status).json(response.msg);
  }
  catch(error){
    console.log(error);
    res.statusCode(500);
  }
})

router.put("/reset", async(req,res)=>{
  try{
    const {email,password}=req.body;
    const response=await passwordreset(email,password);
    res.status(response.status).json(response.msg)
  }
  catch(error){
    console.log(error);
    res.statusCode(500);
  }
});

router.put("/userActivate", async(req,res)=>{
  try{
    const {email}=req.body;
    const response =await accountactivate(email);
    res.status(response.status).json(response.msg);
  }
  catch(error){
    console.log(error);
    res.statusCode(500);
  }
})

router.post("/createInvoice",async(req, res)=>{
  try{
    const response =await addinvoice(req.body);
    res.status(response.status).json(response.msg);
  
  }
  catch(error){
    console.log(error);
    res.statusCode(500);
  }
});


router.get("/invoicelist", async(req,res)=>{
  try{
    const invoiceData =await getinvoice();
    res.status(200).json(invoiceData);
  }
  catch(error){
    console.log(error);
    res.statusCode(500);
  }
});

router.post("/getInvoice",async(req,res)=>{
  try{
    const invoiceData=await selectinvoice(req.body);
    res.status(200).json(invoiceData);
  }
  catch(error){
    console.log(error);
    res.statusCode(500);
  }
});

module.exports=router;
