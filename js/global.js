// global helper to load data once and share across modules
let cachedData = null;

async function getResumeData() {
  if (cachedData) return cachedData;
  try {
    const response = await fetch('data/data.json');
    cachedData = await response.json();
    return cachedData;
  } catch (error) {
    console.error('Error fetching data/data.json:', error);
    return null;
  }
}

// load header and footer components
document.addEventListener("DOMContentLoaded", () => {
  // fetch and inject header
  fetch("header.html")
    .then(res => res.text())
    .then(data => {
      const headerPlaceholder = document.getElementById("header-placeholder");
      if (headerPlaceholder) {
        headerPlaceholder.innerHTML = data;
        highlightActiveNav();
      }
    })
    .catch(error => console.error("Error loading header.html:", error));

  // fetch and inject footer
  fetch("footer.html")
    .then(res => res.text())
    .then(data => {
      const footerPlaceholder = document.getElementById("footer-placeholder");
      if (footerPlaceholder) {
        footerPlaceholder.innerHTML = data;
        
        // dynamically set current year in footer
        const yearSpan = document.getElementById("current-year");
        if (yearSpan) {
          yearSpan.textContent = new Date().getFullYear();
        }
      }
    })
    .catch(error => console.error("Error loading footer.html:", error));
});

// highlight current active tab in navbar
function highlightActiveNav() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  if (path.includes("index")) document.getElementById("nav-home")?.classList.add("active");
  if (path.includes("about")) document.getElementById("nav-about")?.classList.add("active");
  if (path.includes("resume")) document.getElementById("nav-resume")?.classList.add("active");
  if (path.includes("projects")) document.getElementById("nav-projects")?.classList.add("active");
}