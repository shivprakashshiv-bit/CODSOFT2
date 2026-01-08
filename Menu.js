function showCategory(categoryId) {
  let categories = document.querySelectorAll(".category");
  categories.forEach(cat => cat.style.display = "none");

  document.getElementById(categoryId).style.display = "block";
}

// Show default category
showCategory("starters");
