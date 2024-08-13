// Script pour l'autre schéma
let schemaPopup = document.getElementById("popup");
let openSchemaPopupBtn = document.getElementById("openPopup");
let schemaPopupCloseBtn = document.getElementsByClassName("close")[0];

// Function to disable scroll
function disableScroll() {
    document.body.style.overflow = 'hidden';
}

// Function to enable scroll
function enableScroll() {
    document.body.style.overflow = 'auto';
}

// When the user clicks the button, open the popup
openSchemaPopupBtn.onclick = function() {
    schemaPopup.style.display = "block";
    disableScroll(); // Disable scrolling
}

// When the user clicks on close (x), close the popup
schemaPopupCloseBtn.onclick = function() {
    schemaPopup.style.display = "none";
    enableScroll(); // Enable scrolling
}

// When the user clicks anywhere outside of the popup, close it
window.onclick = function(event) {
    if (event.target == schemaPopup) {
        schemaPopup.style.display = "none";
        enableScroll(); // Enable scrolling
    }
}
