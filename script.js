document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("animateBtn");

    // Load previous preference
    if (localStorage.getItem("clicked") === "true") {
        btn.classList.add("animated");
    }

    // On button click, trigger animation and store preference
    btn.addEventListener("click", () => {
        btn.classList.add("animated");

        // Store user preference in localStorage
        localStorage.setItem("clicked", "true");

        // Remove animation class after animation completes
        setTimeout(() => {
            btn.classList.remove("animated");
        }, 500);
    });
});
