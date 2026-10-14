const modoBtn = document.getElementById("modoBtn");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeModal = document.getElementById("closeModal");

// Alternar entre modo escuro e claro
modoBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    const modoClaro = document.body.classList.contains("light-mode");

    modoBtn.textContent = modoClaro ? "☾ ESCURO" : "◐ MODO";
});

// Abrir os detalhes de cada tecnologia
document.querySelectorAll(".details-btn").forEach((button) => {
    button.addEventListener("click", () => {
        const card = button.closest(".card");
        const titulo = card.querySelector("h3").textContent;

        modalTitle.textContent = titulo;
        modalText.textContent = button.dataset.info;
        modal.hidden = false;
        closeModal.focus();
    });
});

// Fechar a janela de informações
function fecharModal() {
    modal.hidden = true;
}

closeModal.addEventListener("click", fecharModal);

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        fecharModal();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
        fecharModal();
    }
});

// Quiz interativo
const simBtn = document.getElementById("simBtn");
const naoBtn = document.getElementById("naoBtn");
const quizResult = document.getElementById("quizResult");

simBtn.addEventListener("click", () => {
    quizResult.textContent =
        "CORRETO! A IA consegue analisar dados e identificar padrões.";
});

naoBtn.addEventListener("click", () => {
    quizResult.textContent =
        "Não exatamente! A análise de padrões é uma das capacidades da IA.";
});