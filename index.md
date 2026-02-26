---
layout: default
title: Home
---

<section class="hero">
  <h2>Information Science • Data • Law</h2>
  <p>
    I research information infrastructures, metadata systems, and the ethical implications of access in academic and legal environments.
  </p>
</section>

<section id="about">
  <h2>About</h2>
  <p>
    Librarian and data-driven information professional with experience in research support,
    metadata management, digital scholarship, and data analysis.
  </p>
</section>

<section>
  <h3>Research Interests</h3>
  <ul>
    <li>Information Ethics</li>
    <li>Metadata & Knowledge Organization</li>
    <li>Research Analytics & Data Visualization</li>
    <li>Environmental Law & Information Access</li>
    <li>Carceral Information Systems</li>
  </ul>
</section>

<section>
  <h3>Experience</h3>

  <div class="job">
    <h4>Supervisor, Library Curriculum Support Services — Princeton University Libraries</h4>
    <span class="date">2022–Present</span>
    <ul>
      <li>Supported faculty research and managed digital collections.</li>
      <li>Improved metadata workflows, increasing retrieval efficiency by 20%.</li>
      <li>Conducted data analysis on usage metrics to inform policy decisions.</li>
    </ul>
  </div>
</section>

<section>
  <h3>Selected Collection</h3>

  {% assign sorted = site.projects | sort: "date" | reverse %}
  {% for project in sorted limit:3 %}
    <div class="archive-card">
      <h4><a href="{{ project.url }}">{{ project.title }}</a></h4>
      <p class="meta">
        {{ project.creator }} • {{ project.date | date: "%Y" }}
      </p>
      <p>{{ project.abstract }}</p>
    </div>
  {% endfor %}

  <p><a href="/collection/">View Full Collection →</a></p>
</section>

<section id="education">
  <h3>Education</h3>
  <p><strong>MSIS</strong> — University at Albany (2024–2026)</p>
  <p><strong>MSDSA</strong> — SUNY Polytechnic Institute (2026–2028)</p>
</section>
