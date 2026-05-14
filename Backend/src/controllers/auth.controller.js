import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken"
import {config} from "../config/config.js";

async function sendTokenRespopnse(req,res) {
    const token = jwt.sign({
        id:user._id,
    },config.JWT_SECRET)
}

export const register  = async(req,res)=>{
    const {email , contact , password , fullname} = req.body;

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
            fullname
        })


    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Server Error"});
    }
}