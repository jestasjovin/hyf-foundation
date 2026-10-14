

  // Student manager
  const class07Students = [];

  function addStudentToClass(studentName) {
    const name = studentName.trim();
    if (name === "") return;

    const alreadyEnrolled = class07Students.includes(name);
    const classIsFull = class07Students.length >= 6;

    if (alreadyEnrolled) {
      console.log(`Student ${name} is already in the class`);
    } else if (classIsFull && name !== "Queen") {
      console.log("Cannot add more students to class 07");
    } else {
      class07Students.push(name);
    }
  }

  function getNumberOfStudents() {
    return class07Students.length;
  }

  for (const name of ["Neema", "Juma", "Asha", "Khalid", "Mette", "Jonas"]) {
    addStudentToClass(name);
  }

  addStudentToClass("Zawadi");
  addStudentToClass("Asha");
  addStudentToClass(" ");
  addStudentToClass("Queen");
  addStudentToClass("Queen");

  console.log(class07Students);
  console.log(getNumberOfStudents());

