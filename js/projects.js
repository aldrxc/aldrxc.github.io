document.addEventListener("DOMContentLoaded", async () => {
  const data = await getResumeData();
  if (!data) return;

  const projectsContainer = document.getElementById("projects-container");
  if (projectsContainer && data.projects) {
    projectsContainer.innerHTML = data.projects.map(p => `
      <div class="col-md-6 mb-4">
        <div class="card card-dark project-card p-4">
          <div>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <h5 class="text-white mb-0">${p.title}</h5>
              <span class="badge badge-red">${p.period}</span>
            </div>
            <p class="text-muted small">${p.description}</p>
          </div>
          <div class="mt-3">
            ${p.techStack.map(t => `<span class="badge tech-tag">${t}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }
});