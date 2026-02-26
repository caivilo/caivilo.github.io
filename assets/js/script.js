// Dark mode toggle
document.getElementById("darkModeToggle").addEventListener("click", function() {
  document.body.classList.toggle("dark");
});

// Project filter
function filterProjects(category) {
  const projects = document.querySelectorAll(".project");

  projects.forEach(project => {
    if (category === "all") {
      project.style.display = "block";
    } else {
      project.style.display = project.classList.contains(category)
        ? "block"
        : "none";
    }
  });
}
