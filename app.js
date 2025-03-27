document.addEventListener("DOMContentLoaded", function () {
  // Função para abrir o modal
  function openModal(content, isImage = false) {
    let modal = document.createElement("div");
    modal.classList.add("modal-overlay");
    modal.innerHTML = `
          <div class="modal-content">
              <span class="close-modal">&times;</span>
              ${
                isImage
                  ? `<img src="${content}" alt="Imagem de Serviços">`
                  : `<p>${content}</p>`
              }
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
      window.open("https://wa.me/+5511999987915", "_blank");
    });

  document.getElementById("btn-email").addEventListener("click", function () {
    openModal("E-mail: luizeduramirez@icloud.com");
  });

  document
    .getElementById("btn-servicos")
    .addEventListener("click", function () {
      openModal("img/Servicos.png", true);
    });
});
