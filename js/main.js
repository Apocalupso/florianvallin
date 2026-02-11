document.addEventListener("DOMContentLoaded", function() {

  // Charger le header automatiquement
  fetch("header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header-placeholder").innerHTML = data;
    });

});
