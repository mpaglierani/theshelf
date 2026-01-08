// review.js
const urlParams = new URLSearchParams(window.location.search);
const reviewId = urlParams.get("id");

fetch("media.json")
  .then(res => res.json())
  .then(data => {
    const index = data.findIndex(r => r.id === reviewId);
    if (index === -1) {
      document.querySelector(".container").innerHTML = "<p>Review not found.</p>";
      return;
    }

    const review = data[index];
    document.title = review.title;

    // Stars
    const stars = Array(review.rating)
      .fill('<i data-feather="star" class="star"></i>')
      .join("");

    // Metadata
    let metadataHtml = "";
    for (let key in review.metadata) {
      metadataHtml += `<h3>${key}</h3><p> • ${review.metadata[key]}</p><br>`;
    }

    // External Links
    let linksHtml = "";
    if (review.externalLinks && review.externalLinks.length > 0) {
      linksHtml = review.externalLinks
        .map(
          link => `<a href="${link.url}" target="_blank"><h4>${link.label}</h4></a>`
        )
        .join("<br>");
    }

    // Review Content
    let reviewHtml = `
      <div class="review">
        <div class="review-title">
          <h1>${review.title}</h1>
          <h5>${review.subtitle}</h5>
        </div>

        <div class="review-content">
          <div class="review-img">
            <img src="${review.image}" alt="${review.title}">
          </div>
          <div class="review-stars">${stars}</div>
          <div class="additional-content">
            ${metadataHtml}
            ${linksHtml}
          </div>
        </div>

        <div class="review-text">
          <h2>${review.reviewHeadline}</h2>
          ${review.reviewBody.map(p => `<p>${p}</p>`).join("")}
        </div>

        <div class="button-container">
          <button id="previousBtn">
            <i data-feather="arrow-left" class="pointer"></i> Previous
          </button>
          <button id="nextBtn">
            Next <i data-feather="arrow-right" class="pointer"></i>
          </button>
        </div>
      </div>
    `;

    document.querySelector(".container").innerHTML = reviewHtml;

    // Handle Previous / Next
    const prevIndex = (index - 1 + data.length) % data.length;
    const nextIndex = (index + 1) % data.length;

    document.getElementById("previousBtn").addEventListener("click", () => {
      window.location.href = `review.html?id=${data[prevIndex].id}`;
    });

    document.getElementById("nextBtn").addEventListener("click", () => {
      window.location.href = `review.html?id=${data[nextIndex].id}`;
    });

    // Refresh Feather icons
    feather.replace();
  })
  .catch(err => console.error("Error loading review:", err));