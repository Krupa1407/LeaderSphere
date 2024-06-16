import express from 'express';
import './db/config.js';
import User from './db/User.js';
import Leader from './db/Leader.js';
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

// leaders
app.post("/add-leader", async(req, res) => {
    let leader = new Leader(req.body);
    let result = await leader.save();
    res.send(result);
})

// display products
app.get("/leaders", async(req, res) => {
    let leaders = await Leader.find();
    if(leaders.length > 0){
        res.send(leaders);
    }
    else{
        res.send({result: "No Leaders Found."});
    }
})


// delete leaders
app.delete('/delete-leader/:id', async(req, res) => {
    // res.send(req.params.id);
    let leader = await Leader.deleteOne({_id: req.params.id});
    res.send(req.params.id);
})

// for update the product
app.get('/leader/:id', async(req, res) => {
    let result = await Leader.findOne({_id: req.params.id});
    if(result){
        res.send(result);
    }
    else{
        res.send({result: "No record found."})
    }
});


app.put('/leader/:id', async(req, res) => {
    let result = await Leader.updateOne(
        {_id: req.params.id},
        {
            $set: req.body
        }
    )
    res.send(result);
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