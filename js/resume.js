document.addEventListener("DOMContentLoaded", async () => {
  const data = await getResumeData();
  if (!data) return;

  // Education
  const eduContainer = document.getElementById("education-container");
  if (eduContainer && data.education) {
    eduContainer.innerHTML = data.education.map(edu => `
      <div class="card card-dark p-3 mb-3">
        <div class="d-flex justify-content-between align-items-center flex-wrap">
          <h5 class="mb-0 text-white">${edu.institution}</h5>
          <span class="badge badge-red">${edu.period}</span>
        </div>
        <p class="text-gradient-red fw-bold mb-1 mt-1">${edu.degree}</p>
        ${edu.details.length ? `<ul class="mb-0 text-muted small">${edu.details.map(d => `<li>${d}</li>`).join('')}</ul>` : ''}
      </div>
    `).join('');
  }

  // Skills
  const skillsContainer = document.getElementById("skills-container");
  if (skillsContainer && data.skills) {
    skillsContainer.innerHTML = data.skills.map(s => `
      <div class="col-md-6 mb-3">
        <div class="card card-dark p-3 h-100">
          <h6 class="text-danger fw-bold">${s.category}</h6>
          <div class="skill-badge-group">
            ${s.items.map(item => `<span class="badge badge-red">${item}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }

  // Work Experience
  const workContainer = document.getElementById("work-container");
  if (workContainer && data.workExperience) {
    workContainer.innerHTML = data.workExperience.map(work => `
      <div class="card card-dark experience-card p-3 mb-3">
        <div class="d-flex justify-content-between align-items-start flex-wrap">
          <div>
            <h5 class="mb-0 text-white">${work.role}</h5>
            <div class="text-muted small">${work.company} | ${work.location}</div>
          </div>
          <span class="badge badge-red">${work.period}</span>
        </div>
        <ul class="mt-2 text-muted small mb-0">
          ${work.responsibilities.map(r => `<li>${r}</li>`).join('')}
        </ul>
      </div>
    `).join('');
  }

  // Awards
  const awardsContainer = document.getElementById("awards-container");
  if (awardsContainer && data.awards) {
    awardsContainer.innerHTML = data.awards.map(a => `
      <div class="card card-dark p-3 mb-2">
        <div class="d-flex justify-content-between">
          <strong class="text-white">${a.title}</strong>
          <span class="text-danger small">${a.year}</span>
        </div>
        <div class="text-muted small">${a.details}</div>
      </div>
    `).join('');
  }
});