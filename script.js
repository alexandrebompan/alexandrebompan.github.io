// Smooth scroll dos links do menu
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        window.scrollTo({
            top: target.offsetTop - 70,
            behavior: "smooth"
        });
    });
});
