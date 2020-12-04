//function to crete license badge 
function createLicenseBadge(License){
  
  return `
  ![license Badge](https://img.shields.io/badge/license-${License}-blue.svg)
  
  `
}






// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.Title}

  ${createLicenseBadge(data.License)}

  ## Table of Contents 

  *[Describtion](#Describtion)\n
  *[Installation](#Insallation)\n
  *[Usage](#Usage)\n
  *[Test](#Test)\n
  *[Contributors](#Contributors)\n
  *[License](#License)\n
  *[Contact Information](#ContactInfo)\n

  ## Describtion 
  ${data.Describtion}

  ## Installation 
  ${data.Installation}

  ## usage 
  ${data.Usage}

  ## Tests 
  ${data.Test}

  ## Contributors
  ${data.Contributors}

  ## License 
  ${createLicenseBadge(data.License)}

  ## Contact informaion 
  For any questions, please contact me at ${data.Email}.
  Interested in seeing more of my work? Please visit [https://github.com/${data.Username}](https://github.com/${data.Username})


`;
}

module.exports = generateMarkdown;
