import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    addressLine1:{
        type:String,
        required:true,
    },
    addressLine2:{
        type:String,
    },
    city:{
        type:String,
        required:true,
    },
    pincode:{
        type:Number,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        default:"India",
    },
    specializedIn:[
        {
            type: String,
        }
    ]
}, {timestamps:true})

export const Hospital = mongoose.model("Hospital", hospitalSchema)