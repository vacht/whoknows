export function initLevel4() {
    const words = document.querySelectorAll(".word");
    const feedback = document.getElementById("feedback4");
    const nextBtn = document.getElementById("nextLevelBtn4");

    if (!words.length) return;

    let correctCount = 0;
    const totalCorrect = document.querySelectorAll('.word[data-correct="true"]').length;

    words.forEach((word) => {
    word.addEventListener("click", () => {
    
    if (word.classList.contains("selected")) return;

        const isCorrect = word.dataset.correct === "true";

    if (isCorrect) {
        word.classList.add("selected");
        correctCount++;
        feedback.textContent = "✨ Bien hecho...";
        feedback.style.color = "#a3ffb7";

        if (correctCount === totalCorrect) {
            feedback.textContent = "💘 ¡Perfecto! Has armado mi declaración.";
            nextBtn.disabled = false;
        }
    } else {
        word.style.background = "#ff8080";
        feedback.textContent = "❌ Esa palabra no va en mi frase...";
        feedback.style.color = "#ff8080";
        }
    });
});

    nextBtn.addEventListener("click", () => {
    feedback.textContent = "💫 Preparando el final...";
    feedback.style.color = "#ffb7d5";
    nextBtn.disabled = true;

    setTimeout(() => {
        window.location.href = "./final.html";
    }, 2000);
    });
}
