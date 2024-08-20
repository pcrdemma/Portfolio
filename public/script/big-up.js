// Sélectionner le modal
let modal = document.getElementById("image-modal");

// Sélectionner l'image qui sera affichée dans le modal
let modalImg = document.getElementById("img01");

// Sélectionner toutes les images cliquables
let images = document.getElementsByClassName("clickable-image");

// Ajouter un événement de clic à chaque image
for (let i = 0; i < images.length; i++) {
  images[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  }
}

// Fermer le modal lorsqu'on clique sur la croix
let span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
  modal.style.display = "none";
}

// Fermer le modal lorsqu'on clique en dehors de l'image
modal.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
