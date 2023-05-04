const words = [
    "programação",
    "javascript",
    "html",
    "css",
    "interface",
    "desenvolvimento",
    "aplicação",
    "web",
    "mobile",
    "usuário",
    "experiência",
    "interface",
    "gráfico",
    "banco de dados",
    "servidor",
    "redes",
    "segurança",
    "hospedagem",
    "domínio",
    "internet"
  ];

  
  const imagens = [
    'imagens/carro.png',
    'https://picsum.photos/500/500',
    'https://picsum.photos/600/600',
    './imagens/carro.png'
  ];
  
  // contador de imagens
  let contador = 0;
  
  // função para exibir uma nova imagem
  function exibirNovaImagem() {
    // incrementa o contador
    contador++;
    
    // verifica se o contador ultrapassou o tamanho do array
    if (contador >= imagens.length) {
      contador = 0; // reinicia o contador se ultrapassar o tamanho do array
    }
    
    // exibe a nova imagem na div
    const divImagem = document.querySelector('.imagem');
    divImagem.style.backgroundImage = `url(${imagens[contador]})`;
  }
  
  // adiciona evento de clique ao botão "Gerar nova imagem"
  const btnGerar = document.getElementById('generate-btn');
  btnGerar.addEventListener('click', exibirNovaImagem);


/*
  const wordContainer = document.getElementById("word");
  const generateBtn = document.getElementById("generate-btn");
  
  generateBtn.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];
    wordContainer.textContent = randomWord;
  });

  */
  