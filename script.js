document.addEventListener("DOMContentLoaded", () => {
    const verMaisButtons = document.querySelectorAll(".ver-mais");
    const adicionarButtons = document.querySelectorAll(".adicionar");
  
    verMaisButtons.forEach(button => {
      button.addEventListener("click", () => {
        alert("Página do produto em construção!");
      });
    });
  
    adicionarButtons.forEach(button => {
      button.addEventListener("click", () => {
        alert("Produto adicionado ao carrinho!");
      });
    });
  });
  