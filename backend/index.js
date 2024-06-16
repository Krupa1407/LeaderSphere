import express from 'express';
import mongoose from 'mongoose';
const app = express();




// connection to database
const connectDB = async() => {
    mongoose.connect('mongodb://127.0.0.1:27017/LeaderSphere');
    const leaderSchema = new mongoose.Schema({});
    const leader = mongoose.model('leaders', leaderSchema);      //model
    const data = await leader.find();
    console.log(data);
}
connectDB();







// app.get('/', (req, res) => {
//     res.send("home page");
// })


const port = 5000;
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});