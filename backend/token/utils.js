import jwt from 'jsonwebtoken';

export const generateToken = (res) =>{
    const token=jwt.sign({},process.env.JWT_SECRET,{expiresIn:"7d"});
    // we use cookie to store our token on browser
    res.cookie("jwt",token,{
        maxAge:7*24*60*60*1000,             // mili seconds
        httpOnly:true,                      // prevent xss cross site scripting attacks
        secure:process.env.NODE_ENV!=="development", 
    })

    return token;
} 