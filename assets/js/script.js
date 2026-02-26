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

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".archive-card");
  const tags = new Set();

  cards.forEach(card => {
    card.querySelectorAll(".tag").forEach(tag => {
      tags.add(tag.textContent.trim());
    });
  });

  const container = document.getElementById("tag-filters");

  if (!container) return; // prevents errors on other pages

  // Add "All" button
  const allButton = document.createElement("button");
  allButton.textContent = "All";
  allButton.addEventListener("click", () => {
    cards.forEach(card => card.style.display = "block");
  });
  container.appendChild(allButton);

  tags.forEach(tag => {
    const button = document.createElement("button");
    button.textContent = tag;

    button.addEventListener("click", () => {
      cards.forEach(card => {
        card.style.display = card.innerText.includes(tag)
          ? "block"
          : "none";
      });
    });

    container.appendChild(button);
  });
});
