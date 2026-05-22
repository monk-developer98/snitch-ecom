import mongoose, { model } from "mongoose";

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    seller:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required: true
    },
    price:{
        amount:{
            type:String,
            enum: ["USD","INR","EUR","JPY","GBP"],
            default: "INR"
        }
    },
    images:[
        {
            url:{
                type:String,
                required:true
            },
            // alt:{
            //     type:String,
            //     required:true
            // }
        }
    ]
}, {timestamps:true})

const productModel = mongoose.model("product",productSchema)

export default productModel;