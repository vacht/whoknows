
export function initLevel2() {
    const input = document.getElementById("answer2");
    const button = document.getElementById("submitBtn2");
    const feedback = document.getElementById("feedback2");
    const nextBtn = document.getElementById("nextLevelBtn2");

    if (!input || !button) return; 

    button.addEventListener("click", () => {
    const response = input.value.trim().toLowerCase();

    if (response === "mundo") {
        feedback.textContent = "💘 ¡Exacto! Eres mi mundo, mi todo.";
        feedback.style.color = "#a3ffb7";
        button.disabled = true;
        input.disabled = true;
        nextBtn.disabled = false;
    } else if (response === "") {
        feedback.textContent = "💭 Escribe algo primero...";
        feedback.style.color = "#fff";
    } else {
        feedback.textContent = "❌ No era eso, pero igual me encantas 💕";
        feedback.style.color = "#ff8080";
        input.value = "";
    }
});


    input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") button.click();
});

    nextBtn.addEventListener("click", () => {
    feedback.textContent = "✨ Cargando el siguiente nivel...";
    feedback.style.color = "#ffb7d5";
    nextBtn.disabled = true;

    setTimeout(() => {
    window.location.href = "./level3.html";
    }, 2000);
    });
}
