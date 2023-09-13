function toggleBackToTopButton() {
    var backButton = document.getElementById("back-to-top-container");
    if (window.scrollY > 200) {
        backButton.style.display = "block";
    } else {
        backButton.style.display = "none";
    }
}
window.addEventListener("scroll", toggleBackToTopButton);

var backButton = document.getElementById("back-to-top");
backButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});