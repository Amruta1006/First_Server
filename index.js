import express from 'express';

const app = express();
const PORT = 5001;

//API Endpoint 1
app.get("/", (req, res) => {
    res.send("Hello World");
    });

//API Endpoint 2
app.get("/about", (req, res) => {
    res.send("About Page"); 
   });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });