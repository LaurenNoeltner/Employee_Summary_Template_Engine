// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getRole() {
    return "Employee";
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
}

const e = new Employee("Alice", 25, "lauren@gmail.com");
module.exports = Employee;
