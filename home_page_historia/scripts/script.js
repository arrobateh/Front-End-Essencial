//Pega Todos os Elementos da Class Banner que sejam img
const imagens = document.querySelectorAll('.banner img');


window.addEventListener("load", () => {
  if (imagens.length === 0) {
    console.log("Nenhuma imagem encontrada no banner");
    return;
  }

  let index = 0;
  imagens[0].classList.add('ativa');

  setInterval(() => {
    imagens[index].classList.remove('ativa');
    index = (index + 1) % imagens.length;
    imagens[index].classList.add('ativa');
  }, 12000);
});