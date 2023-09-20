//POPUP LINKEDIN
let LinkedinImage = document.getElementById("linkedin");
let closePopupLinkedin = document.getElementById('closePopupLinkedin');
let popupLinkedin = document.getElementById('overlayLinkedin'); 

LinkedinImage.addEventListener('click', function(event){
    event.preventDefault();
    popupLinkedin.style.display = 'block'; 
    document.body.style.overflow = 'hidden'; 
});

// Function to close the popup
function closePopupFunc() {
    popupLinkedin.style.display = 'none';
    document.body.style.overflow = '';
}

// Event listeners
closePopupLinkedin.addEventListener('click', closePopupFunc);

// Close the popup when clicking outside of it
window.addEventListener('click', function (event) {
    if (event.target === popupLinkedin) {
        closePopupFunc();
    }
});



//POPUP GITHUB
let GithubImage = document.getElementById("github");
let closePopupGithub = document.getElementById('closePopupGithub');
let popupGithub = document.getElementById('overlayGithub');

GithubImage.addEventListener('click', function(event){
    event.preventDefault();
    popupGithub.style.display = 'block'; 
    document.body.style.overflow = 'hidden'; 
});

// Function to close the popup
function closePopupFuncGithub() {
    popupGithub.style.display = 'none';
    document.body.style.overflow = '';
}

// Event listeners
closePopupGithub.addEventListener('click', closePopupFuncGithub);

// Close the popup when clicking outside of it
window.addEventListener('click', function (event) {
    if (event.target === popupGithub) {
        closePopupFuncGithub();
    }
});