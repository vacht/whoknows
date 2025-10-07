export function initLevel3() {
    const keys = document.querySelectorAll(".key-option");
    const feedback = document.getElementById("feedback");
    const nextBtn = document.getElementById("nextLevelBtn");

    if (!keys.length) return; 

    keys.forEach((key) => {
    key.addEventListener("click", () => {
    const isCorrect = key.dataset.correct === "true";

    keys.forEach(k => k.disabled = true); 

    if (isCorrect) {
        feedback.textContent = "🔓 ¡Has abierto mi corazón!";
        feedback.style.color = "#a3ffb7";
        nextBtn.disabled = false;
    } else {
        feedback.textContent = "❌ Esa llave no encaja...";
        feedback.style.color = "#ff8080";
    }
    });
});

    nextBtn.addEventListener("click", () => {
    feedback.textContent = "✨ Avanzando al siguiente nivel...";
    feedback.style.color = "#ffb7d5";
    nextBtn.disabled = true;

    setTimeout(() => {
        window.location.href = "./level4.html";
    }, 2000);
});
}
