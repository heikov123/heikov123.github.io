const scrollToHome = document.getElementById('scrollTo');
const scrollToProfile = document.getElementById('scrollTo2');
const scrollToSkills = document.getElementById('scrollTo3');
const scrollToProjects = document.getElementById('scrollTo4');
const scrollToContact = document.getElementById('scrollTo5');

let scroll = window.scrollY;
let navbarClass = document.getElementById("navbar")

function scrollingHome() {
    scrollToHome.scrollIntoView({
        behavior: 'smooth'
    });
}

function scrollingProfile() {
    scrollToProfile.scrollIntoView({
        behavior: 'smooth'
    });
}


function scrollingSkills() {
    scrollToSkills.scrollIntoView({
        behavior: 'smooth'
    });
}

function scrollingProjects() {
    scrollToProjects.scrollIntoView({
        behavior: 'smooth'
    });
}

function scrollingContact() {
    scrollToContact.scrollIntoView({
        behavior: 'smooth'
    });
}


window.addEventListener('scroll', function (e) {
    scroll = window.scrollY;

    if (scroll > 600) {
        navbarClass.classList.add("navbar2");
    } else {
        navbarClass.classList.remove("navbar2");
    }
})