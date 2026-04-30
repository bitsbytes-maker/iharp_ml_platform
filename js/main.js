// Detect base path automatically (important for GitHub Pages)
const BASE_PATH = window.location.pathname.includes("iharp_ml_platform")
  ? "/iharp_ml_platform/"
  : "/";

// ---------- TOOLS ----------
function toggleTools() {
  document.getElementById("toolsMenu").classList.toggle("hidden");
}

function openTool(tool) {
  const url = `${BASE_PATH}tools/${tool}/index.html`;
  window.location.href = url;
}

// ---------- PACKAGES ----------
function togglePackages() {
  document.getElementById("pkgMenu").classList.toggle("hidden");
}

function launchPkg(pkg) {
  const githubUrl = `https://github.com/bitsbytes-maker/${pkg}`;
  window.open(githubUrl, "_blank");
}

// ---------- CLOSE DROPDOWN WHEN CLICK OUTSIDE ----------
window.onclick = function (event) {
  if (!event.target.matches("button")) {
    const dropdowns = document.getElementsByClassName("dropdown");

    for (let i = 0; i < dropdowns.length; i++) {
      if (!dropdowns[i].classList.contains("hidden")) {
        dropdowns[i].classList.add("hidden");
      }
    }
  }
};