import Users from '../models/user.model.js'
import  jwt, { decode }  from 'jsonwebtoken'
import User from '../models/user.model.js'
import bcrypt from 'bcrypt'

const generateAccessToken  = (user) =>{
return jwt.sign({email:user.email}, process.env.ACCESS_JWT_SECRET ,{expiresIn:'5h'}) 
}


const generateRefreshToken = (user)=>{
    return jwt.sign({email:user.email},process.env.REFRESH_JWT_SECRET ,{expiresIn:"6d"})
}





// register route 


 const registerUser = async(req,res,next) => {

const {userName,email, password,role} = req.body;
if(!userName){return res.status(400).json({messaage:"username is required"})}
if(!email){return res.status(400).json({messaage:"email is required"})}
if(!password){return res.status(400).json({messaage:"password is required"})}
if(!role){return res.status(400).json({messaage:"role is required"})}

const user = await User.findOne({
email
}) 
if(user) return res.status(401).json({
    messaage:"User already exist"
})
const createUser = await User.create({
    userName,
    email,
    password,
    role
})
res.json({
    messaage:"User added Successfully",
    data: createUser
})

}


//login


const loginUser  = async(req,res)=>{


const {email,password} = req.body

if (!email) { return res.status(400).json({messaage:"Email is required"})}
if (!password) {return res.status(400).json({messaage:"password is required"})}


const user =await User.findOne({email})    

if (!user) {return res.status(404).json({messaage:"no user found"})}


const isPasswordValid = await bcrypt.compare(password,user.password);
if (!isPasswordValid) {return res.status(400).json({messaage:"Incorrect password"})}

const accesstoken = generateAccessToken(user)
const refershToken = generateRefreshToken(user)


res.cookie("refershToken",refershToken,{httpOnly:true,secure:false})

res.json({
    message: "user loggedIn successfully",
    accesstoken,
    refershToken,
    data: user,
  });

}


// logout user

const logOut = async(req,res)=>{

 res.clearCookie('refershToken')
 
    // res.clearCookie("refershToken")
    res.status(200).json({messaage:"User Logout Successfully"})
}



const refreshToken= async (req,res)=>{
const refreshToken = req.cookies.refershToken || req.body.refershToken
if (!refreshToken) return res.json({messaage:"No refresh token"})

let decodToken;
if(refreshToken) {  decodToken = jwt.verify(refreshToken,process.env.REFRESH_JWT_SECRET)}

const verifiedToken =await User.findOne({email:decodToken.email})

const accessToken = generateAccessToken(verifiedToken)


res.json({
    messaage:"Token Generated successfully",
    accesstoken:accessToken,
    decodedToken:decodToken
    
})
}



export  {registerUser, loginUser,logOut,refreshToken} 