function loadComponent(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

// Load header & footer
loadComponent("header-placeholder", "components/header.html");
loadComponent("footer-placeholder", "components/footer.html");