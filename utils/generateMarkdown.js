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

  * [Describtion](#Describtion)
  * [Installation](#Insallation)
  * [Usage](#Usage)
  * [Test](#Test)
  * [Contributors](#Contributors)
  * [License](#License)
  * [Contact Information](#ContactInfo)

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

  

  ## Contact informaion 

  Interested in my work? Please visit [https://github.com/${data.Username}](https://github.com/${data.Username}) <br>
  For any questions, please contact me at ${data.Email} 


`;
}

module.exports = generateMarkdown;
