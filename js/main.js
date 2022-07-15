/**
 * passo a passo
 * 
 * 1º passo: capturar o valor da textarea para criar o tweet
 * 2º passo: construir o tweet
 * 3º passo: imprimir esse tweet
 * 
 */

 const textarea = document.querySelector('textarea');
 const tweetar = document.querySelector('button');
 const feed = document.querySelector(".conteudoPrincipal__listaTweets")

 function pegarTweet(event) {
  event.preventDefault();

  const tweetTextarea = textarea.value;
  criarTweet(tweetTextarea)
}

tweetar.addEventListener('click', pegarTweet);

// Função para criar o tweet
function criarTweet(tweetTexto){
    
  let data = new Date();
  let hora = data.getHours();
  let minutos = data.getMinutes();

  const tweet = {
    nome: "Bruno",
    foto: "./assets/photo0.jpeg",
    usuario: "@brunoooooooo_",
    texto: tweetTexto,
    tempo: `${hora}:${minutos}`
  }

  listarTemplateTweet(tweet);
}

function listarTemplateTweet(tweet){
    
  const {nome,foto,usuario,texto,tempo} = tweet
  
  // Criação dos elementos
  let li = document.createElement("li");
  li.classList.add("conteudoPrincipal__tweet")

  let img = document.createElement("img");
  img.src = foto
  img.classList.add("tweet__fotoPerfil")

  let div = document.createElement("div");
  div.classList.add("tweet__conteudo")

  let h2 = document.createElement("h2");
  h2.innerText = nome
  
  let span = document.createElement("span");
  span.innerText = ` ${usuario} - ${tempo}`

  let p = document.createElement("p");
  p.innerText = texto

  // elementos dentro da div
  div.appendChild(h2)
  div.appendChild(span)
  div.appendChild(p)

  // elementos dentro da li
  li.appendChild(img)
  li.appendChild(div)

  
  feed.appendChild(li)

  textarea.value = ""
}