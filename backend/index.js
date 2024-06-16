import express from 'express';
import './db/config.js';
import User from './db/User.js';
import cors from 'cors';
const app = express();
app.use(cors());

app.use(express.json());
app.post("/register", async(req,res) => {
    // res.send(req.body);
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
});


app.post("/login", async(req, res) => {
    // res.send(req.body);      //for checkin if the route is working properly.
    if(req.body.email && req.body.password){
        let user = await User.findOne(req.body).select("-password");
        if(user){
            res.send(user);
        }
        else{
            user = "no result found."
            res.send(user);
        }
    }
    else{
            let user = "no result found."
            res.send(user);
    }
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