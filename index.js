document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".btn").addEventListener("click", function() {
        alert("Welcome to EduMaster!");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const navMenu = document.querySelector("nav ul");

    menuBtn.addEventListener("click", function () {
        navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
    });
});