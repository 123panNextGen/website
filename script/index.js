// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// 导航栏滚动效果
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(7, 11, 20, 0.88)";
        navbar.style.borderBottom = "1px solid rgba(77,163,255,0.15)";
    } else {
        navbar.style.background = "rgba(7, 11, 20, 0.65)";
        navbar.style.borderBottom = "1px solid rgba(255,255,255,0.05)";
    }
});


// 卡片渐入动画
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(".card, .feature-item").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});