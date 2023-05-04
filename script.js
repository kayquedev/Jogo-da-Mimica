// lista de imagens
const imagens = [
  '01.jpg',
  '02.jpg',
  'abelha.jpg',
  'barbie.jpg',
  'ben10.jpg',
  'bob-esponja.jpg',
  'borboleta.jpg',
  'branca de neve.jpg',
  'cachorro-de-oculos.jpg',
  'capivara.jpg',
  'carangueijo.jpg',
  'cavalo.jpg',
  'chapeuzinho-vermelho.jpg',
  'charles-chapin.jpg',
  'coelho.jpg',
  'coringa.jpg',
  'elefante.jpg',
  'gato-de-botas.jpg',
  'homem-de-ferro.jpg',
  'indiana-jones.jpg',
  'lobo-mau.jpg',
  'michal-jackson.jpg',
  'monica.jpg',
  'napoelao.jpg',
  'papai-noel.jpg',
  'picapau.jpg',
  'pirata.jpg',
  'ponoquio.jpg',
  'rambo.jpg',
  'rei-leao.jpg',
  'saci.jpg',
  'seu madruga.jpg',
  'silvio.jpg',
  'girafa.jpg',
  'sapo.jpg',
  'esquilo.jpg',
  'golfinho.jpg',
  'superman.jpg',
  'batman.jpg',
  'lula-moluco.jpg',
  'patrick.jpg',
  'gato.jpg',
  'nojo.jpg',
  'medo.jpg',
  'odio.jpg',
  'alegria.jpg',
  'tristeza.jpg',
  'cego.jpg',
  'raiva.jpg',
  'amor.jpg',
  'astronauta.jpg',
  'mimica.jpg',
  'pintor.jpg',
  'torre.jpg',
  'bailarina.jpg',
  'futebol.jpg',
  'papaleguas.jpg'

];

// função para exibir uma nova imagem
function exibirNovaImagem() {
  // seleciona uma imagem aleatoriamente
  const imagemSelecionada = imagens[Math.floor(Math.random() * imagens.length)];
  
  // exibe a nova imagem na div
  const divImagem = document.querySelector('.imagem');
  divImagem.innerHTML = ""; // Limpa a div para exibir apenas a nova imagem
  const imagem = document.createElement("img");
  imagem.src = "imagens/" + imagemSelecionada; // caminho para a pasta de imagens e a imagem selecionada
  divImagem.appendChild(imagem);
}

// adiciona evento de clique ao botão "Gerar nova imagem"
const btnGerar = document.getElementById('gerar');
btnGerar.addEventListener('click', exibirNovaImagem);
