import mongoose, { mongo } from "mongoose";

new userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true, 
    },
    password: {
        type: String,
        required: true,
    },
    mobile_number:{
        countryCode :{
            type:Number,
            required:true
        },
        number : {
            type:Number,
            required:true
        },
    },
}, {timestamps: true})

export const User = mongoose.model("User", usersSchema)