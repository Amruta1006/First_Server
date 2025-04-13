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

//health api
const getHealth = (req, res) => {
  res.json({
    success: true,
    message: "Server is running",
  });
};

//get api
const getStudents = (req, res) => {
  res.json({
    success: true,
    data: STUDENTS,
    message: "Student fetched successfully",
  });
};

//post api
const postStudents=(req, res) => {
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
}

//delete api
// const deleteStudentsById = (req, res) => {
//     console.log(req);
//     const {id} = req.params;
//     const studentIndex = STUDENTS.findIndex((student) => student.id === id);
//     if (studentIndex == -1) {
//             return res.json({
//                 success: false,
//                 message: `Student with id: ${id} does not exist`,
//             });
//         }
//         STUDENTS.splice(studentIndex, 1);
//         return res.json({
//             success: true,
//             message: `Student with id: ${id} deleted successfully`,
//     });   
// }


//put api
const putStudentsById = (req,res)=>{
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
  }

  //patch api
  const patchStudentsById = (req,res)=>{
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
  }

  //query parameter
  const getStudentsSearch = (req, res) => {
    const { name } = req.query;
    res.json({
      success: true,
      data: STUDENTS,
      message: `You searched for ${name}`,
    });
  }

export { getHealth, getStudents,postStudents,putStudentsById ,patchStudentsById,getStudentsSearch };
