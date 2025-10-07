export function initLevel1() {
    const photoButtons = document.querySelectorAll(".photo-option");
    const feedback = document.getElementById("feedback");
    const nextBtn = document.getElementById("nextLevelBtn");

    if (!photoButtons.length) return;

    photoButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
    const isCorrect = btn.dataset.correct === "true";

      photoButtons.forEach(b => b.disabled = true); 

        if (isCorrect) {
        feedback.textContent = "💘 ¡Esa es! Sabía que elegirías la correcta.";
        feedback.style.color = "#a3ffb7";
        nextBtn.disabled = false;
        } else {
        feedback.textContent = "😅 No, esa no era... inténtalo de nuevo (recarga la página).";
        feedback.style.color = "#ff8080";
    }
    });
    });

    nextBtn.addEventListener("click", () => {
    window.location.href = "./level2.html";
    });
}
