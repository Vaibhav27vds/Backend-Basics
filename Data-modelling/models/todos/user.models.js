import mongoose  from "mongoose";

new userSchema = new mongoose.Schema(
    {
        username: {
            type:String,
            required:true,
            unique: true,
            lowercase: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase:true,
        },
        password:{
            type : String,
            required: [true, "password must be written"],

        }
    } , {timestamps: true}
)

export const User = mongoose.model("User", userSchema)
// User gets converted to users

