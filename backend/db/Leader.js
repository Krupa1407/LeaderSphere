import mongoose from 'mongoose';


const leaderSchema = new mongoose.Schema({
    name: String,
    category: String,
    desc: String,
    age: String,
    books: Array,
    awards: Array,
    userId: String,
});
const leadermodel = mongoose.model("leaders", leaderSchema);


export default leadermodel;