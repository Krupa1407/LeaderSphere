import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send("home page");
})






const port = 5000;
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});