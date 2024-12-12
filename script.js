document.addEventListener("DOMContentLoaded", () => {
    const introVideo = document.getElementById("introVideo");

    // Desaparecer el video después de 1 segundo
    setTimeout(() => {
        introVideo.classList.add("fade-out");
    }, 1000); // 1 segundo
});

// CSS para el fade-out en el video
const style = document.createElement("style");
style.innerHTML = `
    .fade-out {
        animation: fadeOut 1s forwards;
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
            visibility: hidden;
        }
    }
`;
document.head.appendChild(style);
