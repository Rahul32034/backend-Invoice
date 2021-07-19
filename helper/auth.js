const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const JWT_SECRET = "123456789";

const hashing=async(value)=>{
  try{
    const salt=await bcrypt.genSalt(10);
    const hash=await bcrypt.hash(value,salt);
    console.log("------->hash"+ hash);
    return hash;
  }
  catch(error){
    return error;
  }
}
const hashcompare=async(password,hashValue)=>{
  try{
    const document=await bcrypt.compare(password,bcrypt.hashValue);
  }
  catch(error){
    return error;
  }
}

const createJWT=async({email,id})=>{
  return await JWT,sign({email,id},JWT_SECRET,{
    expiresIn: "1h",
  });
};
module.exports={hashing,hashcompare,createJWT}