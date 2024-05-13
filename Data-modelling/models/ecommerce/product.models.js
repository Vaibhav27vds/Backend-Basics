import mongoose, { mongo, Mongoose } from "mongoose";

new productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: `The name of the product is ${name}`
    },
    id:{
        type:String,
        required: true,
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    productImage: {
        type: String, // a url from cloudinary 
    },
    price:{
        type:Number,
        required:true,
        default: "0",
    },
    stock:{
        type: Number,
        default: 0,
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required:true,
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    
     
}, {timestamps:true})

export const Product = mongoose.model("Product", productSchema)