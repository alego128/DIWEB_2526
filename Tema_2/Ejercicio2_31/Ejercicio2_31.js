const toggleButton = document.getElementById("toggleButton");
const hiddenElement = document.querySelector(".none");

toggleButton.addEventListener("click", () => {
    if (hiddenElement.style.display === "none") {
        hiddenElement.style.display = "block";
    } else {
        hiddenElement.style.display = "none";
    }
});
