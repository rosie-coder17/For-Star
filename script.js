document.addEventListener("DOMContentLoaded", () => {
  const isIndex =
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname === "/" ||
    window.location.pathname.endsWith("/");

  let herName = localStorage.getItem("herName");

  // ALERT ONLY ON INDEX PAGE
  if (isIndex) {
    herName = prompt("Hey love! What's your name?");
    if (!herName) herName = "Star";
    localStorage.setItem("herName", herName);
  }

  if (!herName) herName = "Star";

  // INDEX PAGE HEADING
  const heading = document.getElementById("valentineHeading");
  if (heading) heading.textContent = `Happy Valentine's Day, ${herName}!`;

  // OTHER PAGES — DYNAMIC TITLES
  const lettersTitle = document.getElementById("lettersTitle");
  if (lettersTitle) lettersTitle.textContent = `Letter for ${herName}`;

  const poemsTitle = document.getElementById("poemsTitle");
  if (poemsTitle) poemsTitle.textContent = `Poems for ${herName}`;

  const mixtapesTitle = document.getElementById("mixtapesTitle");
  if (mixtapesTitle) mixtapesTitle.textContent = `Mixtapes for ${herName}`;

  // POEM EXPANDABLE BOXES (Clean Version)
  const expandableBoxes = document.querySelectorAll(".expandable");

  expandableBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      box.classList.toggle("fullscreen");
    });
  });

  // INDEX PAGE FLOATIES
  const openBtn = document.getElementById("openHeartBtn");
  if (openBtn) {
    openBtn.addEventListener("click", () => {
      createFloaties();
    });
  }
});

function createFloaties() {
  const container = document.querySelector(".floaties");
  if (!container) return;

  container.innerHTML = "";
  const colors = ["#ff69b4", "#00d4ff"];

  for (let i = 0; i < 40; i++) {
    const heart = document.createElement("div");
    heart.classList.add("floatie");
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 4 + Math.random() * 4 + "s";
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];
    heart.style.fontSize = 15 + Math.random() * 25 + "px";
    container.appendChild(heart);
  }
}
