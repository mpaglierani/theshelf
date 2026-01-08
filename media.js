// media.js
const itemsPerPage = 25;
let currentPage = 1;
let mediaData = [];

function renderMedia(page = 1) {
  const container = document.getElementById("media-container");
  const pagination = document.getElementById("pagination");
  container.innerHTML = "";
  pagination.innerHTML = "";

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageItems = mediaData.slice(start, end);

  pageItems.forEach(item => {
    const article = document.createElement("article");
    article.innerHTML = `
      <a href="review.html?id=${item.id}">
        <img src="${item.image}" alt="${item.title}">
        <div class="content">
          <div class="title">${item.title}</div>
          <div class="stars">
            ${Array(item.rating).fill('<i data-feather="star" class="rating"></i>').join("")}
          </div>
        </div>
      </a>
    `;
    container.appendChild(article);
  });

  // Pagination buttons
  const totalPages = Math.ceil(mediaData.length / itemsPerPage);
  if (totalPages > 1) {
    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement("button");
      btn.textContent = i;
      if (i === page) btn.disabled = true;
      btn.addEventListener("click", () => {
        currentPage = i;
        renderMedia(i);
      });
      pagination.appendChild(btn);
    }
  }

  feather.replace();
}

fetch("media.json")
  .then(res => res.json())
  .then(data => {
    mediaData = data;
    renderMedia(currentPage);
  })
  .catch(err => console.error("Error loading media:", err));