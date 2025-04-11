import express from "express";
const app = express();
app.use(express.json());
const PORT = 5001;

//This is temporary data store
const STUDENTS = [
  {
    id: "1",
    name: "Kasturi",
    city: "Pune",
  },
  {
    id: "2",
    name: "Amruta",
    city: "Kolhapur",
  },
];

app.get("/students", (req, res) => {
  res.json({
    success: true,
    data: STUDENTS,
    message: "Student fetched successfully",
  });
});

app.delete("/students:id", (req, res) => {
    console.log(req);
    const {id} = req.params;
    const studentIndex = STUDENTS.findIndex((student) => student.id === id);
    if (studentIndex == -1) {
            return res.json({
                success: false,
                message: `Student with id: ${id} does not exist`,
            });
        }
        STUDENTS.splice(studentIndex, 1);
        return res.json({
            success: true,
            message: `Student with id: ${id} deleted successfully`,
    });   
});

app.post("/students", (req, res) => {
  // const name = req.body.name;
  // const city = req.body.city;
  // const id = req.body.id;

  //Destructuring
  const { name, city, id } = req.body;

  //Validation
  if (!name || !city || !id) {
    return res.json({
      success: false,
      message: "Please provide all required fields",
    });
  }

  //check if anyone have exist with same id
  for (const student of STUDENTS) {
    if (student.id === id) {
      return res.json({
        success: false,
        message: "Student already exists",
      });
    }
  }

  const studentObj = {
    id: id,
    name: name,
    city: city,
  };
  STUDENTS.push(studentObj);

  res.json({
    success: true,
    data: studentObj,
    message: "Student added successfully",
  });
});

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
