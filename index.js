// TODO: Include packages needed for this application

//   function renderLicenseBadge(license) {
//     [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
//     [![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
//     [![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)

//   }
const inquirer = require("inquirer");
const fs = require("fs");
const { error } = require("console");
const badgedisplay = renderLicenseBadge();

const generateMarkdown = (input) =>
  `# ${input.title}

  # Description
  ${input.discription}

  # License
  ${renderLicenseBadge(input.licenseBadge)}
  
  # github
  ${input.github}

  # Email
  ${input.email}
   `;

function renderLicenseBadge(input) {
  let licenseType;

  if (input === "Apache") {
    licenseType = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (input === "Boost") {
    licenseType = `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  } else if (input === "BSD-3") {
    licenseType = ` [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)

    `;
  } else {
    licenseType = "N/A";
  }
  return licenseType;
}

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "what is your porject title?",
    },
    {
      type: "input",
      name: "discription",
      message: "what is the description,installation,instructions,usage, ect?",
    },
    {
      type: "list",
      name: "licenseBadge",
      message: "Choose a license",
      choices: ["Apache", "Boost", "BSD-3"],
    },
    {
      type: "inpute",
      name: "github",
      message: "Enter your github username",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email",
    },
  ])
  .then((input) => {
    const readMecontent = generateMarkdown(input);

    fs.writeFile("README.md", readMecontent, (err) =>
      err ? console.log(err) : console.log("Successfully created README.md!")
    );
  });
