document.addEventListener("DOMContentLoaded", () => {
  console.log("External JS Loaded");

  const filterButtons = document.querySelectorAll(".project-item");
  const projectCards = document.querySelectorAll(".project-card");

  console.log("Buttons:", filterButtons.length);
  console.log("Cards:", projectCards.length);

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const selectedCategory = btn.textContent.toLowerCase();
      console.log("Clicked:", selectedCategory);

      projectCards.forEach((card) => {
        const cardCategory = card.dataset.category.toLowerCase();
        card.style.display =
          selectedCategory === "all" || cardCategory === selectedCategory
            ? "flex"
            : "none";
      });

      filterButtons.forEach((b) => b.classList.remove("active-project"));
      btn.classList.add("active-project");
    });
  });
});
