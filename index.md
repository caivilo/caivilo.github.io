---
layout: default
title: Home
---

<section class="hero">
  <h1>Information Science, Data, & Legal Infrastructure</h1>
  <p class="lead">
    I examine how information systems, metadata infrastructures, and research analytics shape access to environmental and legal knowledge.
  </p>
</section>

<section>
  <h2>Research Overview</h2>
  <p>
    My work explores the ethical and structural dimensions of information access. 
    Drawing on a background in mathematics and librarianship, I investigate how 
    classification systems, circulation policies, and research infrastructures 
    influence environmental law, prison reform, and institutional knowledge production.
  </p>
</section>

<section>
  <h2>Selected Publications</h2>

  <ul class="pub-list">
    <li>
      Coleman, O. (Forthcoming). <em>Title of Article</em>. Journal Name.
    </li>
    <li>
      Master's Thesis (In Progress). 
      <em>Information Infrastructures in Environmental Legal Systems</em>.
    </li>
  </ul>

  <p><a href="/publications/">View Full Publications →</a></p>
</section>

<section>
  <h2>Selected Research & Projects</h2>

  {% assign sorted = site.projects | sort: "date" | reverse %}
  {% for project in sorted limit:2 %}
    <div class="archive-card">
      <h3><a href="{{ project.url }}">{{ project.title }}</a></h3>
      <p class="meta">
        {{ project.creator }} • {{ project.date | date: "%Y" }}
      </p>
      <p>{{ project.abstract }}</p>
    </div>
  {% endfor %}

  <p><a href="/collection/">View Research Collection →</a></p>
</section>

<section>
  <h2>Academic Appointments</h2>
  <p>
    Head of Circulation Services, Purchase College (2024–Present)
  </p>
  <p>
    Access Services & Science Library Roles, Columbia University Libraries
  </p>
</section>

<section>
  <h2>Education</h2>
  <p>
    M.S. Information Science, University at Albany (2024–2026)
  </p>
  <p>
    B.A. Mathematics, Colorado College (2021)
  </p>
</section>
