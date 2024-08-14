// Sélectionne tous les éléments avec la classe 'popup-image'
let popupImages = document.querySelectorAll(".popup-image");
let popup = document.getElementById("imagePopup");
let popupImageContent = document.getElementById("popupImageContent");
let popupClose = document.querySelector(".popup-close");

// Affiche la popup lors du clic sur une image du carousel
popupImages.forEach(function(image) {
    image.onclick = function() {
        popup.style.display = "block";
        popupImageContent.src = this.src;
        document.body.classList.add("no-scroll"); // Empêche le défilement en arrière-plan
    }
});

// Ferme la popup lorsqu'on clique sur le bouton de fermeture
popupClose.onclick = function() {
    popup.style.display = "none";
    document.body.classList.remove("no-scroll"); // Réactive le défilement
}

// Ferme la popup lorsqu'on clique en dehors de l'image
popup.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
        document.body.classList.remove("no-scroll");
    }
}
