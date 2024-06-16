import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});
const usermodel = mongoose.model("users", userSchema);


export default usermodel;