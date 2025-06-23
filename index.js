import express from "express";
import cors from "cors";
import { getHealth,getStudents,postStudents,putStudentsById,patchStudentsById,getStudentsSearch  } from "./controllers/student.js";
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 5001; 

//health API
app.get("/health", getHealth);

//get method
app.get("/students", getStudents);

//post method
app.post("/students", postStudents);

//delete method
// app.delete("/students:id", deleteStudentsById);

//put method
app.put("/students/:id",putStudentsById);

//patch method
app.patch("/students/:id",patchStudentsById);

//query parameter
app.get("/students/search", getStudentsSearch );

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//API Endpoint 1
// app.get("/", (req, res) => {
//    res.json({
//         message: "This is main api",
//    });
//     });

//API Endpoint 2
// app.get("/about", (req, res) => {
//     res.json({
//         message: "About Page",
//     });
//    });

//API Endpoint 3
//    app.post("/contact", (req, res) => {
//     res.json({
//         message: "Contact Page",
//     });
//    });

//API Endpoint 4
//    app.get("/students", (req, res) => {
//     res.json({
//         students: ["Amruta","Shree","Kukii"],
//     });
//    });
