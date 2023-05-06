// abrir modal
let modal = document.querySelector('#myModal');
let btn = document.querySelector('.container #myBtn')

function abrir () {
  modal.style.display = "block";
} 
 
btn.addEventListener ('click', abrir)
// modal end



//////////// fechar modal depois de selecionar pokemon ////////////
let fecharContainer = document.querySelector('.container')
let fecharModal = document.querySelector('.modal')
let body = document.querySelector('body')
let pokemonList = document.querySelectorAll('.pokemon-1, .pokemon-2, .pokemon-3, .pokemon-4, .pokemon-5')


// funcao para fechar o modal e selecionar o pikachu
function selecionaPikachu() {
  body.style.display = 'block',
  fecharContainer.style.display = 'none',
  fecharModal.style.display = 'none'

}
pokemonList[0].addEventListener('click', selecionaPikachu);

// funcao para fechar o modal e selecionar o glaceon
function selecionaGlaceon() {
  body.style.display = 'block',
  fecharContainer.style.display = 'none',
  fecharModal.style.display = 'none'
}
pokemonList[1].addEventListener('click', selecionaGlaceon);

// funcao para fechar o modal e selecionar a roserade
function selecionaRoserade() {
  body.style.display = 'block',
  fecharContainer.style.display = 'none',
  fecharModal.style.display = 'none' 
}
pokemonList[2].addEventListener('click', selecionaRoserade);


// funcao para fechar o modal e selecionar o corphish
function selecionaCorphish() {
  body.style.display = 'block',
  fecharContainer.style.display = 'none',
  fecharModal.style.display = 'none' 
}
pokemonList[3].addEventListener('click', selecionaCorphish);


// funcao para fechar o modal e selecionar o noctowl
function selecionaNoctowl() {
  body.style.display = 'block',
  fecharContainer.style.display = 'none',
  fecharModal.style.display = 'none' 
}
pokemonList[4].addEventListener('click', selecionaNoctowl);
