import mongoose from "mongoose";

new categorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
}, {timestamp:true})

export const Category = mongoose.model("Category", categorySchema)