// JavaScript Documentdocument.addEventListener("DOMContentLoaded", function() {
  var pageUrls = {
    1: "/marguerite_paglierani/imdb-100-movies.html",
    2: "/marguerite_paglierani/imdb-100-movies-2",
    3: "/marguerite_paglierani/imbd-100-movies-3.html",
  };
		
  var currentPage = getCurrentPage();
  var buttonContainer = document.querySelector(".button-container");
  var previousBtn = buttonContainer.querySelector("#previousBtn");
  var nextBtn = buttonContainer.querySelector("#nextBtn");

  previousBtn.addEventListener("click", goToPreviousPage);
  nextBtn.addEventListener("click", goToNextPage);

  function goToPreviousPage() {
    var previousPage = currentPage !== 1 ? currentPage - 1: Object.keys(pageUrls).length;
    if (previousPage >= 1) {
      navigateToPage(previousPage);
    }
  }

  function goToNextPage() {
    var nextPage = currentPage !== Object.keys(pageUrls).length ? currentPage + 1: 1;
    if (nextPage <= Object.keys(pageUrls).length) {
      navigateToPage(nextPage);
    }
  }

  function navigateToPage(page) {
    var nextPageUrl = pageUrls[page];
    window.location.href = nextPageUrl;
  }

  function getCurrentPage() {
    var currentPageUrl = window.location.pathname;
    var currentPageIndex = Object.values(pageUrls).indexOf(currentPageUrl);
	return currentPageIndex !== -1 ? currentPageIndex + 1: 1;
  }
});
