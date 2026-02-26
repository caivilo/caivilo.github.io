---
layout: default
title: Home
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Olivia Coleman | Information Professional</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>

<body>
  <header>
    <h1>Olivia Coleman</h1>
    <p>Information Professional | Librarian | Aspiring Data Scientist</p>
    <div class="header-links">
      <a href="mailto:molc216@gmail.com">Email</a>
      <a href="https://github.com/caivilo" target="_blank">GitHub</a>
      <a href="https://linkedin.com/in/caivilo" target="_blank">LinkedIn</a>
      <a href="assets/resume.pdf" target="_blank">Download PDF</a>
    </div>
    <button id="darkModeToggle">Toggle Dark Mode</button>
  </header>

  <section id="about">
    <h2>About</h2>
    <p>
      Librarian and data-driven information professional with experience in research support,
      metadata management, digital scholarship, and data analysis. Passionate about access,
      information ethics, and using data to improve knowledge systems.
    </p>
  </section>

  <section id="skills">
    <h2>Skills</h2>
    <div class="skills-grid">
      <div>
        <h3>Library & Information</h3>
        <ul>
          <li>Metadata (MARC, Dublin Core)</li>
          <li>Cataloging & Classification</li>
          <li>Reference & Research Support</li>
          <li>Information Literacy Instruction</li>
        </ul>
      </div>
      <div>
        <h3>Data Science</h3>
        <ul>
          <li>Python (Pandas, NumPy)</li>
          <li>SQL</li>
          <li>Data Visualization (Matplotlib, Tableau)</li>
          <li>Machine Learning (scikit-learn)</li>
        </ul>
      </div>
      <div>
        <h3>Technical</h3>
        <ul>
          <li>Git & GitHub</li>
          <li>HTML/CSS/JavaScript</li>
          <li>APIs & Data Cleaning</li>
          <li>Digital Repositories</li>
        </ul>
      </div>
    </div>
  </section>

  <section id="experience">
    <h2>Experience</h2>

    <div class="job">
      <h3>Supervisor, Library Curriculum Support Services — Princeton University Libraries</h3>
      <span class="date">2022–Present</span>
      <ul>
        <li>Supported faculty research and managed digital collections.</li>
        <li>Improved metadata workflows, increasing retrieval efficiency by 20%.</li>
        <li>Conducted data analysis on usage metrics to inform policy decisions.</li>
      </ul>
    </div>

    <div class="job">
      <h3>Previous Role — Organization</h3>
      <span class="date">2020–2022</span>
      <ul>
        <li>Developed instructional materials for information literacy sessions.</li>
        <li>Maintained institutional repository records.</li>
      </ul>
    </div>
  </section>


---
layout: default
title: Collection
---

<h2>Digital Research Collection</h2>

{% for project in site.projects %}
  <div class="archive-card">
    <h3><a href="{{ project.url }}">{{ project.title }}</a></h3>

    <div class="metadata">
      <p><strong>Creator:</strong> {{ project.creator }}</p>
      <p><strong>Date:</strong> {{ project.date | date: "%B %Y" }}</p>
      <p><strong>Keywords:</strong>
        {% for tag in project.keywords %}
          <span class="tag">{{ tag }}</span>
        {% endfor %}
      </p>
    </div>

    <p><strong>Abstract:</strong> {{ project.abstract }}</p>
  </div>
{% endfor %}

  </section>

  <section id="education">
    <h2>Education</h2>
    <p><strong>MSLIS</strong> — University at Albany Dec '24- May '26</p>
    <p><strong>MSDSA</strong> — SUNY Polytechnic Institute Sept '26 - May '28</p>
  </section>

  <footer>
    <p>© 2026 Olivia Coleman</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
