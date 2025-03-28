import express from 'express';

const app = express();
const PORT = 5001;

//API Endpoint 1
app.get("/", (req, res) => {
   res.json({
        message: "This is main api",
   });
    });

//API Endpoint 2
app.get("/about", (req, res) => {
    res.json({
        message: "About Page",
    });
   });

   //API Endpoint 3
   app.post("/contact", (req, res) => {
    res.json({
        message: "Contact Page",
    });
   });
   
    //API Endpoint 4
   app.get("/students", (req, res) => {
    res.json({
        students: ["Amruta","Shree","Kukii"],
    });
   });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });