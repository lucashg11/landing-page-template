const topBar = document.querySelector(".topbar");
const scrollers = document.querySelectorAll(".marquee");

function changeTopBarBg() {
    if (window.scrollY > 1) {
        topBar.classList.add("changeBg");
    } else {
        topBar.classList.remove("changeBg");
    }
}

window.addEventListener("scroll", changeTopBarBg);
