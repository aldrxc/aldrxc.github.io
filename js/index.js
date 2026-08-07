document.addEventListener("DOMContentLoaded", async () => {
  const data = await getResumeData();
  if (!data) return;

  // Render dynamic featured project preview on index page if container exists
  const featuredContainer = document.getElementById("featured-project");
  if (featuredContainer && data.projects.length > 0) {
    const featured = data.projects.find(p => p.featured) || data.projects[0];
    featuredContainer.innerHTML = `
      <div class="card card-dark p-4 highlight-card">
        <span class="badge badge-red mb-2">Featured Project</span>
        <h4>${featured.title}</h4>
        <p class="text-muted small">${featured.description}</p>
        <a href="projects.html" class="text-danger small fw-bold">View all projects &rarr;</a>
      </div>
    `;
  }
});