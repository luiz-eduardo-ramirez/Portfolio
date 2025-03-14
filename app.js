document.addEventListener("DOMContentLoaded", function () {
  // Função para abrir o modal
  function openModal(content) {
    let modal = document.createElement("div");
    modal.classList.add("modal-overlay");
    modal.innerHTML = `
          <div class="modal-content">
              <span class="close-modal">&times;</span>
              <p>${content}</p>
          </div>
      `;
    document.body.appendChild(modal);

    // Fechar o modal ao clicar no botão de fechar ou fora dele
    modal
      .querySelector(".close-modal")
      .addEventListener("click", () => modal.remove());
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.remove();
    });
  }

  // Adicionando eventos aos botões
  document
    .getElementById("btn-telefone")
    .addEventListener("click", function () {
      openModal("Telefone: (11) 99998-7915");
    });

  document.getElementById("btn-email").addEventListener("click", function () {
    openModal("E-mail: luizeduramirez@icloud.com");
  });
});
