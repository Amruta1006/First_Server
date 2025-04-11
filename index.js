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


//get method
app.get("/students", (req, res) => {
  res.json({
    success: true,
    data: STUDENTS,
    message: "Student fetched successfully",
  });
});

//post method
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

//delete method
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

//put method
app.put("/students/:id",(req,res)=>{
  const {id} = req.params;
  const {name, city} = req.body;

  if (!name || !city || !id) {
    return res.json({
      success: false,
      message: "Please provide all required fields",
    });
  }

  let studentIndex = -1;
  STUDENTS.forEach((stud, i)=>{
    if(stud.id == id){
      studentIndex = i;
    }
  })

  if(studentIndex == -1){
    return res.json({
      success: false,
      message: `Student with id: ${id} does not exist`,
    });
  }

  STUDENTS[studentIndex] ={
    id: parseInt(id),
    name: name,
    city: city,
  }

  res.json({
    success: true,
    data: STUDENTS[studentIndex],
    message: `Student with id: ${id} updated successfully`,
  });
})

//patch method
app.patch("/students/:id",(req,res)=>{
  const {id} = req.params;
  const {city} = req.body;

  if (!city ) {
    return res.json({
      success: false,
      message: "Please provide city name",
    });
  }

  let studentIndex = -1;
  STUDENTS.forEach((stud, i)=>{
    if(stud.id == id){
      studentIndex = i;
    }
  })

  if(studentIndex == -1){
    return res.json({
      success: false,
      message: `Student with id: ${id} does not exist`,
    });
  }

  
  const existingStudent = STUDENTS[studentIndex];
  const updatedStudent = {
    ...existingStudent,
    city: city,
  }
  STUDENTS[studentIndex] = updatedStudent;
  res.json({
    success: true,
    data: updatedStudent,
    message: `Student with id: ${id} updated successfully`,
  });
})

//query parameter
app.get("/students/search", (req, res) => {
  const { name } = req.query;
  res.json({
    success: true,
    data: STUDENTS,
    message: `You searched for ${name}`,
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
