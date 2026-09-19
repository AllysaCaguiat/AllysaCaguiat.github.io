const navigation = document.querySelector(".nav-links");
const dropdowns = document.querySelectorAll(".dropdown");

function closeDropdown(dropdown) {
  const button = dropdown.querySelector(".dropdown-toggle");
  const menu = dropdown.querySelector(".dropdown-menu");
  const arrow = dropdown.querySelector(".dropdown-arrow");

  menu.classList.remove("show");
  button.setAttribute("aria-expanded", "false");
  arrow.textContent = "▼";
}

dropdowns.forEach(function (dropdown) {
  const dropdownButton = dropdown.querySelector(".dropdown-toggle");
  const dropdownMenu = dropdown.querySelector(".dropdown-menu");
  const dropdownArrow = dropdown.querySelector(".dropdown-arrow");

  dropdownButton.addEventListener("click", function (event) {
    event.stopPropagation();

    const isOpen = dropdownMenu.classList.toggle("show");
    dropdownButton.setAttribute("aria-expanded", String(isOpen));
    dropdownArrow.textContent = isOpen ? "▲" : "▼";
  });
});

document.addEventListener("click", function (event) {
  if (navigation && !navigation.contains(event.target)) {
    dropdowns.forEach(closeDropdown);
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    dropdowns.forEach(closeDropdown);
  }
});
