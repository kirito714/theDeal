
function generateMarkdown(input){
  return `${input.title}
  
  ## Description
  ${input.description}


  ## License
  ${renderLicenseBadge(input)}
  
  ## github
  ${input.github}

  ## Email
  ${input.email}
   `
}
function renderLicenseBadge(input) {
  let licenseType;

  if (input === "Apache") {
    licenseType = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (input === "Boost") {
    licenseType = `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  } else if (input === "BSD-3") {
    licenseType = ` [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  } else {
    licenseType = "N/A";
  }
  return licenseType;
}
module.exports = generateMarkdown;
