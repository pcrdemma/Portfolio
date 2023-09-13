//POPUP LINKEDIN
let LinkedinImage = document.getElementById("linkedin");
let closePopup = document.getElementById('closePopup');
let popupLinkedin = document.getElementById('overlayLinkedin'); 

LinkedinImage.addEventListener('click', function(event){
    event.preventDefault();
    popupLinkedin.style.display = 'block';  
});

// Function to close the popup
function closePopupFunc() {
    popupLinkedin.style.display = 'none';
}

// Event listeners
closePopup.addEventListener('click', closePopupFunc);

// Close the popup when clicking outside of it
window.addEventListener('click', function (event) {
    if (event.target === popupLinkedin) {
        closePopupFunc();
    }
});