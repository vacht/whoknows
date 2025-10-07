
export function initFinal() {
    const message = document.getElementById("message");
    const song = document.getElementById("finalSong");
    const buttonsContainer = document.getElementById("buttonsContainer");
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const feedback = document.getElementById("finalFeedback");

    if (!message) return;


    const dedicationText = `
Cada nivel fue una pista,
cada reto una sonrisa,
y cada acierto te acercó más a mi corazón 💗

Quise que este juego fuera mi forma de decirte,
que eres mi inspiración, mi calma y mi alegría.

Gracias por existir y por ser tú y espero que te guste seguir siendo tú y yo por el resto de la vida,
por eso y por mucho más quiero preguntarte de la única forma en la que yo lo podría hacer.

¿Te gustaría ser mi novia y compartir esta aventura conmigo? 💞
`;


let i = 0;
function typeWriter() {
    if (i < dedicationText.length) {
        message.textContent += dedicationText.charAt(i);
        i++;
        setTimeout(typeWriter, 45);
    } else {
        buttonsContainer.classList.remove("hidden");
    }
}


    song.play().catch(() => {
    
    message.addEventListener("click", () => song.play());
    });

    typeWriter();

    
    yesBtn.addEventListener("click", () => {
    feedback.textContent = "💘 ¡Te amo mucho! 💞";
    feedback.style.color = "#a3ffb7";
    yesBtn.disabled = true;
    noBtn.disabled = true;
});

  // 
    noBtn.addEventListener("mouseenter", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 100 - 50;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
}
