import express from 'express';
import './db/config.js';
import User from './db/User.js';
import cors from 'cors';
const app = express();
app.use(cors());

app.use(express.json());
app.post("/register", async(req,res) => {
    res.send(req.body);
    let user = new User(req.body);
    let result = await user.save();
});








// // connection to database
// const connectDB = async() => {
//     mongoose.connect('mongodb://127.0.0.1:27017/LeaderSphere');
//     const leaderSchema = new mongoose.Schema({});
//     const leader = mongoose.model('leaders', leaderSchema);      //model
//     const data = await leader.find();
//     console.log(data);
// }
// connectDB();


// app.get('/', (req, res) => {
//     res.send("home page");
// })


const port = 5000;
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});