//camelCase, PascalCase, snake_case
const linksSocialMedia = {
  github: 'leonardomtomasi',
  linkedin: 'in/leonardomtomasi/',
  facebook: 'leonardo.moreiratomasi',
  instagram: 'leonardomtomasi',
  twitter: 'leonardomtomasi'
}

//accessing DOM
// function changeSocialMediaLinks() {
//   two different ways
//   document.getElementById('userName').textContent = 'Leo'
//   userName.textContent = 'Leo Tomasi'}
function changeSocialMediaLinks() {
  //for loop that gets all children from ul(id = socialLinks)
  for (let li of socialLinks.children) {
    //gets the attribute class from li and save in social
    const social = li.getAttribute('class')

    //gets the current class in social and connects to the object
    // linksSocialMedia to display the right social media
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

    //alert(li.children[0].href)
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  //saving the api github to variable url
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

//ARROW FUNCTIONS
// function functionName(arg){
//   //code
// }
//functionName() to execute

// arg => {
// //code
// }
