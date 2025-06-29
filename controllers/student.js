let students = [
  { id: 1, name: "Amruta", age: 22, city: "Kolhapur" },
  { id: 2, name: "Kasturi", age: 15, city: "Pune" },
  { id: 3, name: "Akshata", age: 19, city: "Thane" },
];

export const addStudent = (req, res) => {
  try {
    const { name, age, city } = req.body;
    const newStudent = { id: students.length + 1, name, age, city };
    students.push(newStudent);
    res.status(200).json({
      message: "Student Added Successfully",
      newStudent,
    });
  } catch (error) {
    res.status(500).json({
      message: "Student not Added",
      error: error.message,
    });
  }
};

export const getStudents = (req, res) => {
  try {
    if (students.length === 0) {
      return res.status(404).json({
        message: "No students available. Add a student.",
      });
    }
    res.status(200).json({
      message: "Students Found",
      students,
    });
  } catch (error) {
    res.status(500).json({
      message: "Students not found",
      error: error.message,
    });
  }
};

export const deleteStudent = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = students.findIndex((std) => std.id === id);
    if (index === -1) {
      return res.status(404).json({ message: "Student not found" });
    }
    students.splice(index, 1);
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Student not able to delete",
      error: error.message,
    });
  }
};

export const updateStudent = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, age, city } = req.body;
    const index = students.findIndex((std) => std.id === id);
    if (index === -1) {
      return res.status(404).json({ message: "Student not found" });
    }
    students[index] = { ...students[index], name, age, city };
    res.status(200).json({
      message: "Student updated successfully",
      updatedStudent: students[index],
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update student",
      error: error.message,
    });
  }
};

export const updateAge = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { age } = req.body;
    const index = students.findIndex((std) => std.id === id);
    if (index === -1) {
      return res.status(404).json({ message: "Student not found" });
    }
    students[index] = { ...students[index], age };
    res.status(200).json({
      message: "Updated age successfully",
      updatedStudent: students[index],
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update student age",
      error: error.message,
    });
  }
};
