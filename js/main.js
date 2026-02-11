document.addEventListener("DOMContentLoaded", function() {

  const contactBtn = document.getElementById("contactBtn");
  const methodeBtn = document.getElementById("methodeBtn");

  contactBtn.addEventListener("click", function() {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth"
    });
  });

  methodeBtn.addEventListener("click", function() {
    document.getElementById("methode").scrollIntoView({
      behavior: "smooth"
    });
  });

});
