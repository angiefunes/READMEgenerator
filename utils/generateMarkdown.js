// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let licenseBadge;
    if (license === "Apache 2.0 License") {
    licenseBadge = `
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
`;
    } else if (license === "MIT License") {
    licenseBadge = `
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
`;
    } else if (license === "GNU GPL v3 License") {
    licenseBadge = `
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
`;
    } else if (license === "BSD 3-Clause License") {
    licenseBadge = `
[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
`;
    } else if (license === "BSD 2-Clause License") {
    licenseBadge = `
[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)
    `;
}
    else {
    licenseBadge = '';
}
    return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
        if (license !== 'No License') {
        const licenseLink = `
    - [License](#license)`;
        return licenseLink;
        } else {
        const licenseLink = '';
        return licenseLink;
        }
    }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'MIT') {
        licenseBadge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)(https://opensource.org/licenses/MIT)';
    } else if (license === 'Apache 2.0') {
        licenseBadge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)(https://opensource.org/licenses/Apache-2.0)';
    } else if (license === 'BSD3') {
        licenseBadge = '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)(https://opensource.org/licenses/BSD-3-Clause)';
    } else {
        licenseBadge = '';
    }
    return licenseBadge;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
    ${renderLicenseBadge(data.license)}

    ## Description
    ${data.description}

    ## Table of Contents 
    [Installation](#Installation)
    [Usage](#Usage)
    [License](#License)
    [Contributors](#Contributors)
    [Tests](#Tests)
    [Questions](#Questions)

    ## Installation
    ${data.installation} 

    ## Usage
    ${data.usage}

    ## License
    ${data.license}
    ## Contributors

    ${data.contributors}

    ## Tests
    ${data.tests}

    ## Questions
    ${data.questions}
`;
}
export default generateMarkdown;
