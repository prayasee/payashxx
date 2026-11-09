// Replace these values with your real contact details before publishing.
const PROFILE = {
  email: "YOUR_EMAIL@example.com",
  linkedin: "https://www.linkedin.com/in/YOUR-LINKEDIN/",
  github: "https://github.com/prayasee"
};

document.getElementById("year").textContent = new Date().getFullYear();
const emailLink = document.getElementById("emailLink");
emailLink.href = `mailto:${PROFILE.email}`;
const linkedinLink = document.getElementById("linkedinLink");
linkedinLink.href = PROFILE.linkedin;
linkedinLink.addEventListener("click", (event) => {
  if (PROFILE.linkedin.includes("YOUR-LINKEDIN")) {
    event.preventDefault();
    alert("Add your LinkedIn profile URL in script.js before publishing.");
  }
});
document.getElementById("githubLink").href = PROFILE.github;

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "×" : "☰";
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}));
