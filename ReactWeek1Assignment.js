class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students =[]) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
}

registerStudent(studentToRegister);
    const r = this.students.find(function(studentEmail) {
      return studentEmail.email === studentToRegister.email;
    });
    if( r.length === 0) {
      this.students.push(studentToRegister);
      console.log(`Registering ${studentToRegister.name} to class`);
    }else {
      console.log(`The student, ${studentToRegister.name} already registered.`);
    }
    return this.students;
  ;
  
    const Student1 = new Student("Joey", "joey3@gmail.com","Atlanta");
    const Student2 = new Student("Chris", "chris1@gmail.com", "Dallas");
    const newCamp = new Bootcamp("newCamp","React");
  newCamp.registerStudent(Student1);
  newCamp.registerStudent(Student2);
  newCamp.registerStudent(Student1);
  console.log(newCamp);