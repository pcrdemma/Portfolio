// Script pour la carte Wazuh
let wazuhPopup = document.getElementById("imagePopup");
let allWazuhCards = document.querySelectorAll(".card-inner");
let allWazuhSwitchCards = document.querySelectorAll("#switch-card");
let allWazuhSwitchCardsBack = document.querySelectorAll(".switch-card-back");
let wazuhPopupImageContent = document.getElementById("popupImageContent");
let wazuhPopupClose = document.querySelector(".popup-close-article-wazuh");

// Retourne la carte au clic sur switch-card (recto)
allWazuhSwitchCards.forEach(function(switchCard, index) {
    switchCard.onclick = function() {
        allWazuhCards[index].classList.toggle("flipped");
    }
});

// Retourne la carte au clic sur switch-card (verso)
allWazuhSwitchCardsBack.forEach(function(switchCardBack, index) {
    switchCardBack.onclick = function() {
        allWazuhCards[index].classList.toggle("flipped");
    }
});

// Affiche l'image en popup lors du clic sur une image du verso
let allWazuhPopupImages = document.querySelectorAll(".popup-image-wazuh");

allWazuhPopupImages.forEach(function(image) {
    image.onclick = function() {
        wazuhPopup.style.display = "block";
        wazuhPopupImageContent.src = this.src;
        document.body.classList.add("no-scroll"); // Empêche le défilement en arrière-plan
    }
});

// Ferme la popup lorsque l'utilisateur clique sur le bouton de fermeture
wazuhPopupClose.onclick = function() {
    wazuhPopup.style.display = "none";
    document.body.classList.remove("no-scroll"); // Réactive le défilement
}

// Ferme la popup lorsqu'il clique en dehors de l'image
wazuhPopup.onclick = function(event) {
    if (event.target == wazuhPopup) {
        wazuhPopup.style.display = "none";
        document.body.classList.remove("no-scroll");
    }
}

function disableScroll() {
    document.body.style.overflow = 'hidden';
}

// Function to enable scroll
function enableScroll() {
    document.body.style.overflow = 'auto';
}
