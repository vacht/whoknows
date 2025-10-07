
export function initStartScreen() {
  const input = document.getElementById("answer");
  const button = document.getElementById("submitBtn");
  const feedback = document.getElementById("feedback");

  if (!input || !button) return; 

  button.addEventListener("click", () => {
    const response = input.value.trim().toLowerCase();

    if (response === "apolo") {
      feedback.textContent = "✨ ¡Correcto! El amor te guía al siguiente nivel...";
      feedback.style.color = "#a3ffb7";
      button.disabled = true;
      input.disabled = true;

      setTimeout(() => {
        window.location.href = "./pages/level1.html";
      }, 2000);
    } else if (response === "") {
      feedback.textContent = "💭 Escribe una respuesta antes de continuar.";
      feedback.style.color = "#fff";
    } else {
      feedback.textContent = "❌ Mmm... no es la respuesta correcta.";
      feedback.style.color = "#ff8080";
      input.value = "";
    }
  });

  
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") button.click();
  });
}
