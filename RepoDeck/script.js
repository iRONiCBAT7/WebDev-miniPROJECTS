const allElements = document.querySelectorAll('*');
const navHead = document.querySelector(".gradient-text")
const navbar = document.querySelector(".navbar")
const body = document.querySelector("body")
const allCards = document.querySelectorAll(".card")
const allTitle = document.querySelectorAll(".project-title")
const allOpenP = document.querySelectorAll(".open-project-text")
const allDescription = document.querySelectorAll(".project-description")
const allProjects = document.querySelector(".all-projects")
const navTitle = document.querySelector(".nav-title")
const toggleTheme = document.querySelector(".toggle-theme-icon")
const footer = document.querySelector("footer")
// const body = document.getElementsByTagName("body")




function toggleLightMode(){

//   allElements.forEach(element => {
//      element.classList.toggle("forAll")
//      });

     allCards.forEach(card => {
        // console.log(card)
        card.classList.toggle("lightsteelblue")
        card.classList.toggle("card-shadow")

        });

     allTitle.forEach(title => {
        title.classList.toggle("proj-title-color")
        });

     allDescription.forEach(description => {
        description.classList.toggle("proj-d-color")
        });

     allOpenP.forEach(open => {
        open.classList.toggle("open-p-color")
        });

        // document.body.style.backgroundColor = 'white'
        body.classList.toggle("bodyBg")
        navbar.classList.toggle("lightsteelblue")
        navbar.classList.toggle("nav-shadow")
        allProjects.classList.toggle("gradient-black")
        toggleTheme.classList.toggle("card-shadow")
        navTitle.classList.toggle("gradient")
        
}


  toggleTheme.addEventListener('click', toggleLightMode)



// let isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;

// if (isMobile) {
//   // Code to run on mobile devices
//    allDescription.forEach(description => {
//         description.classList.toggle("black-text")
//         });

// } else {
//   // Code to run on desktop devices

// }

