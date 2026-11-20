const projects = [
  { title: "Bio Page", description: "My first HTML and CSS page.", category: "HTML" },
  { title: "Responsive Nav", description: "A flexbox nav bar that adapts.", category: "CSS" },
  { title: "Grid Gallery", description: "Cards laid out with CSS Grid.", category: "CSS" },
  { title: "Contact Form", description: "A form with validation.", category: "HTML" },
  { title: "Accessible Bio Page", description: "A page tested with Lighthouse.", category: "HTML" }
];

// ---- Projects (projects.html) ----
const grid = document.querySelector("#projectsGrid");

if (grid) {
  function showProjects(category) {
    grid.innerHTML = "";
    projects.forEach(function (project) {
      if (category === "All" || project.category === category) {
        const card = document.createElement("div");
        card.className = "project-card";
        card.innerHTML = "<h3>" + project.title + "</h3><p>" + project.description + "</p>";
        grid.appendChild(card);
      }
    });
  }

  document.querySelectorAll(".filter").forEach(function (btn) {
    btn.addEventListener("click", function () {
      showProjects(btn.dataset.category);
    });
  });

  showProjects("All");
}

// ---- Form (contact.html) ----
const form = document.querySelector("#contactForm");
const message = document.querySelector("#formMessage");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const text = document.querySelector("#message").value.trim();

    if (name === "" || text.length < 10) {
      message.textContent = "Please enter your name and a message of at least 10 characters.";
      return;
    }

    message.textContent = "Thanks, " + name + "! Your message was received.";
    form.reset();
  });

  const counter = document.querySelector("#counter");
  if (counter) {
    document.querySelector("#message").addEventListener("input", function (e) {
      counter.textContent = e.target.value.length + " characters";
    });
  }
}

// ---- Dark mode ----
const darkToggle = document.querySelector("#darkToggle");

if (darkToggle) {
  darkToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");
  });
}