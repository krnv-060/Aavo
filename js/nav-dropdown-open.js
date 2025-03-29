document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".nav-dropdown");
    const toggle = document.querySelector(".nav-dropdown-toggle");

    toggle.addEventListener("click", function () {
        dropdown.classList.toggle("open");
    });

    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove("open");
        }
    });
});