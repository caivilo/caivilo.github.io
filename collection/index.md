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
