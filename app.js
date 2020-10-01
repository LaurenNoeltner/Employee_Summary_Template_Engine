const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const team = [];

addManager();
//App begins by asking for the manager info. This makes it so that only one manager may be created.
function addManager() {
  const managerInput = [
    { type: "input", message: "What is the manager's name?", name: "name" },
    { type: "input", message: "What is the manager's ID?", name: "id" },
    {
      type: "input",
      message: "What is the manager's office number?",
      name: "officeNumber",
    },
    { type: "input", message: "What is the manager's email?", name: "email" },
    {
      type: "input",
      message: "What is the manager's GitHub account name?",
      name: "GitHubUser",
    },
  ];
  inquirer.prompt(managerInput).then(function (response) {
    const manager = new Manager(
      response.name,
      response.id,
      response.email,
      response.officeNumber
    );
    team.push(manager);
    addEmployee();
  });
}
//Employee Questions. Asks whether user wants to add Engineer, Intern, or stop adding members.
function addEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "position",
        message: "What kind of employee would you like to add?",
        choices: ["Engineer", "Intern", "None"],
      },
    ])
    .then(function (response) {
      if (response.position == "Engineer") {
        addEngineer();
      } else if (response.position == "Intern") {
        addIntern();
      } else if (response.position == "None") {
        //fn to render HTMl page
        fs.writeFile(outputPath, render(team), function (err) {
          if (err) {
            throw err;
          }
          console.log("Putting team together!");
        });
      }
    });
}
//Asks for Engineer info if user selected add an engineer.
function addEngineer() {
  const engineerInput = [
    { type: "input", message: "What is the engineer's name?", name: "name" },
    { type: "input", message: "What is the engineer's ID?", name: "id" },
    {
      type: "input",
      message: "What is the engineer's email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the engineer's GitHub?",
      name: "GitHubUser",
    },
  ];
  inquirer.prompt(engineerInput).then(function (response) {
    console.log(response);
    const person = new Engineer(
      response.name,
      response.id,
      response.email,
      response.GitHubUser
    );
    team.push(person);
    addEmployee();
  });
}
//Asks for intern info if user selects add intern.
function addIntern() {
  const internInput = [
    { type: "input", message: "What is the intern's name?", name: "name" },
    { type: "input", message: "What is the intern's ID?", name: "id" },
    { type: "input", message: "What is the intern's email?", name: "email" },
    {
      type: "input",
      message: "What is the intern's school name?",
      name: "school",
    },
  ];

  inquirer.prompt(internInput).then(function (response) {
    const intern = new Intern(
      response.name,
      response.id,
      response.email,
      response.school
    );
    team.push(intern);
    addEmployee();
  });
}
