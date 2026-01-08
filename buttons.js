document.addEventListener("DOMContentLoaded", function() {
  var pageUrls = {
    1: "/marguerite_paglierani/bottoms.html",
    2: "/marguerite_paglierani/talk-to-me.html",
    3: "/marguerite_paglierani/house-md.html",
    4: "/marguerite_paglierani/darkening.html",
	5: "/marguerite_paglierani/fnaf.html",
	6: "/marguerite_paglierani/beetlejuice.html",
	7: "/marguerite_paglierani/john-wick-4.html",
	8: "/marguerite_paglierani/my-year-of-rest-and-relaxation.html",
	9: "/marguerite_paglierani/super-mario.html",
	10: "/marguerite_paglierani/the-last-of-us.html",
	11: "/marguerite_paglierani/interstellar.html",
	12: "/marguerite_paglierani/prometheus.html",
	13: "/marguerite_paglierani/shrek-2.html",
	14: "/marguerite_paglierani/spirited-away.html",
	15: "/marguerite_paglierani/whiplash.html",
	16: "/marguerite_paglierani/her-body-and-other-parties.html",
	17: "/marguerite_paglierani/the-song-of-achilles.html",
	18: "/marguerite_paglierani/lord-of-the-flies.html",
	19: "/marguerite_paglierani/the-merciful-crow.html",
	20: "/marguerite_paglierani/the-walking-dead.html",
	21: "/marguerite_paglierani/yellowjackets.html",
	22: "/marguerite_paglierani/the-great.html",
	23: "/marguerite_paglierani/lost.html"
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
