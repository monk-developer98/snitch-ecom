import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken"
import {config} from "../config/config.js";

async function sendTokenRespopnse(req,res,message) {
    const token = jwt.sign({
        id:user._id,
    },config.JWT_SECRET,{
        expiresIn:"7d"
    })

    res.cookie("token",token)

    res.status(200).json({
        message,
        success:true,
        user:{
            id:user._id,
            email: user.email,
            contact: user.contact,
            fullname: user.fullname
        }
    })
}

export const register  = async(req,res)=>{
    const {email , contact , password , fullname,isSeller} = req.body;

    try {
        const existingUSer = await userModel.findOne({
            $or:[
                {email},
                {contact}
            ]
        })

        if( existingUSer){
            return res.status(400).json({message:"User with this email or contact already exist"});
        }

        const user = await userModel.create({
            email,
            contact,
            password,
            fullname,
            role: isSeller? "seller":"buyer"
        })

        await sendTokenRespopnse(user , res , "User registered Successfully") 


    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Server Error"});
    }
}