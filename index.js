window.onload = function() {
    document.querySelectorAll('.singer-card').forEach((card, i) => {
        card.style.opacity = 0;
        setTimeout(() => {
            card.style.transition = "opacity 1s";
            card.style.opacity = 1;
        }, 300 + i * 350);
    });
};