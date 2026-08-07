document.addEventListener("DOMContentLoaded", async () => {
  const data = await getResumeData();
  if (!data) return;

  const ccaContainer = document.getElementById("cca-container");
  if (ccaContainer && data.cca) {
    ccaContainer.innerHTML = data.cca.map(c => `
      <div class="col-md-6 mb-3">
        <div class="card card-dark cca-card p-3 h-100">
          <div class="d-flex justify-content-between align-items-center">
            <h6 class="text-white mb-0">${c.role}</h6>
            <span class="badge badge-red">${c.period}</span>
          </div>
          <small class="text-danger">${c.organization}</small>
          <p class="text-muted small mt-2 mb-0">${c.description}</p>
        </div>
      </div>
    `).join('');
  }
});