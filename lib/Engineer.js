// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
  //make function to render the html with new employee
  // printInfo() {
  //   for (const name in this) {
  //   }
  // }
}
const e = new Engineer("Betty", 45, "betty@whatever.com", "betty1");
module.exports = Engineer;
