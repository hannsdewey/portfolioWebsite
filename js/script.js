// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".project-item").forEach((item) => {
  item.addEventListener("click", function () {
    // Remove active class from all
    document.querySelectorAll(".project-item").forEach((el) => {
      el.classList.remove("active-project");
    });

    // Add active class to the clicked item
    this.classList.add("active-project");
  });
});
