// modelo padrao do jogo
let pokemon1 = createPikachu('Pikachu')
let pokemon2 = createGlaceon('Glaceon');
let pokemon3 = createRoserade('Roserade');
let pokemon4 = createCorphish('Corphish');
let pokemon5 = createNoctowl('Noctowl');
// modelo padrao do jogo


////// funcoes para trocar imagem e nome do pokemon escolhido, e iniciar o jogo//////
let pikachu = document.querySelector('.pokemon-1')
let glaceon = document.querySelector('.pokemon-2')
let roserade = document.querySelector('.pokemon-3')
let corphish = document.querySelector('.pokemon-4')
let noctowl = document.querySelector('.pokemon-5')

let arrayPokemons = []
arrayPokemons.push (pikachu, glaceon, roserade, corphish, noctowl)

//gerar um pokemon aleatorio
const randomPokemon = Math.floor(Math.random() * arrayPokemons.length);
console.log(randomPokemon, arrayPokemons[randomPokemon]);



//Pikachu
function mostrarPikachu() {
    // selecionar o pokemon escolhido
    pokemon1 = createPikachu(`Pikachu`);

    //troca de imagem e nome do pokemon para Pikachu//
    if (pokemon1.name === 'Pikachu') {
        document.querySelector('#numeroPokemon').src="./img/pikachu.png"
        
    } 
    //else if (pokemon2.name === 'Pikachu') {
    //     document.querySelector('#numeroPokemon2').src="img/pikachu.png"
    // }

    // selecionar o pokemon 2 e trocar a imagem e o nome aleatoriamente
    if (randomPokemon == 0) {
        console.log('pikachu')
        pokemon2 = createPikachu(`Pikachu`);
        document.querySelector('#numeroPokemon2').src="./img/pikachu.png"
    } else if (randomPokemon == 1) {
        console.log('glaceon')
        pokemon2 = createGlaceon('Glaceon');
        document.querySelector('#numeroPokemon2').src="./img/glaceon.png"
    } else if (randomPokemon == 2) {
        console.log('roserade')
        pokemon2 = createRoserade('Roserade');
        document.querySelector('#numeroPokemon2').src="./img/roserade.png"
    } else if (randomPokemon == 3) {
        console.log('corphish')
        pokemon2 = createCorphish('Corphish');
        document.querySelector('#numeroPokemon2').src="./img/corphish.png"
    } else if (randomPokemon == 4) {
        console.log('noctowl')
        pokemon2 = createNoctowl('Noctowl');
        document.querySelector('#numeroPokemon2').src="./img/noctowl.png"
    }


    // iniciar game
    stage.start(
        pokemon1,
        pokemon2,
        document.querySelector('.pokemonOne'),
        document.querySelector('.pokemonTwo')
    ) 
  }
  pikachu.addEventListener('click', mostrarPikachu); //funcao para escolher o Pikachu
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////


//Glaceon
function monstrarGlaceon() {
    // selecionar o pokemon escolhido
    pokemon1 = createGlaceon('Glaceon');

    //troca de imagem e nome do pokemon para Glaceon//
    if (pokemon1.name === 'Glaceon') {
        document.querySelector('#numeroPokemon').src="./img/glaceon.png"
    } 
    // else if (pokemon2.name === 'Glaceon') {
    //     document.querySelector('#numeroPokemon2').src="img/glaceon.png"
    // }


    // selecionar o pokemon 2 e trocar a imagem e o nome aleatoriamente
    if (randomPokemon == 0) {
        console.log('pikachu')
        pokemon2 = createPikachu(`Pikachu`);
        document.querySelector('#numeroPokemon2').src="./img/pikachu.png"
    } else if (randomPokemon == 1) {
        console.log('glaceon')
        pokemon2 = createGlaceon('Glaceon');
        document.querySelector('#numeroPokemon2').src="./img/glaceon.png"
    } else if (randomPokemon == 2) {
        console.log('roserade')
        pokemon2 = createRoserade('Roserade');
        document.querySelector('#numeroPokemon2').src="./img/roserade.png"
    } else if (randomPokemon == 3) {
        console.log('corphish')
        pokemon2 = createCorphish('Corphish');
        document.querySelector('#numeroPokemon2').src="./img/corphish.png"
    } else if (randomPokemon == 4) {
        console.log('noctowl')
        pokemon2 = createNoctowl('Noctowl');
        document.querySelector('#numeroPokemon2').src="./img/noctowl.png"
    }


    // iniciar game
    stage.start(
        pokemon1,
        pokemon2,
        document.querySelector('.pokemonOne'),
        document.querySelector('.pokemonTwo')
    ) 
  }
  glaceon.addEventListener('click', monstrarGlaceon); //funcao para escolher a Glaceon
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////


//Roserade
function monstrarRoserade() {
    // selecionar o pokemon escolhido
    pokemon1 = createRoserade('Roserade');

    //troca de imagem e nome do pokemon para Roserade//
    if (pokemon1.name === 'Roserade') {
        document.querySelector('#numeroPokemon').src="./img/roserade.png"
    } 
    // else if (pokemon2.name === 'Roserade') {
    //     document.querySelector('#numeroPokemon2').src="./img/roserade.png"
    // }
    

    // selecionar o pokemon 2 e trocar a imagem e o nome aleatoriamente
    if (randomPokemon == 0) {
        console.log('pikachu')
        pokemon2 = createPikachu(`Pikachu`);
        document.querySelector('#numeroPokemon2').src="./img/pikachu.png"
    } else if (randomPokemon == 1) {
        console.log('glaceon')
        pokemon2 = createGlaceon('Glaceon');
        document.querySelector('#numeroPokemon2').src="./img/glaceon.png"
    } else if (randomPokemon == 2) {
        console.log('roserade')
        pokemon2 = createRoserade('Roserade');
        document.querySelector('#numeroPokemon2').src="./img/roserade.png"
    } else if (randomPokemon == 3) {
        console.log('corphish')
        pokemon2 = createCorphish('Corphish');
        document.querySelector('#numeroPokemon2').src="./img/corphish.png"
    } else if (randomPokemon == 4) {
        console.log('noctowl')
        pokemon2 = createNoctowl('Noctowl');
        document.querySelector('#numeroPokemon2').src="./img/noctowl.png"
    }


    // iniciar game
    stage.start(
        pokemon1,
        pokemon2,
        document.querySelector('.pokemonOne'),
        document.querySelector('.pokemonTwo')
    ) 
  }
  roserade.addEventListener('click', monstrarRoserade); //funcao para escolher a Roserade
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////


//Corphish
function mostrarCorphish() {
    // selecionar o pokemon escolhido
    pokemon1 = createCorphish('Corphish');

    //troca de imagem e nome do pokemon para Corphish//
    if (pokemon1.name === 'Corphish') {
        document.querySelector('#numeroPokemon').src="./img/corphish.png"
    } 
    // else if (pokemon2.name === 'Corphish') {
    //     document.querySelector('#numeroPokemon2').src="./img/corphish.png"
    // }


    // selecionar o pokemon 2 e trocar a imagem e o nome aleatoriamente
    if (randomPokemon == 0) {
        console.log('pikachu')
        pokemon2 = createPikachu(`Pikachu`);
        document.querySelector('#numeroPokemon2').src="./img/pikachu.png"
    } else if (randomPokemon == 1) {
        console.log('glaceon')
        pokemon2 = createGlaceon('Glaceon');
        document.querySelector('#numeroPokemon2').src="./img/glaceon.png"
    } else if (randomPokemon == 2) {
        console.log('roserade')
        pokemon2 = createRoserade('Roserade');
        document.querySelector('#numeroPokemon2').src="./img/roserade.png"
    } else if (randomPokemon == 3) {
        console.log('corphish')
        pokemon2 = createCorphish('Corphish');
        document.querySelector('#numeroPokemon2').src="./img/corphish.png"
    } else if (randomPokemon == 4) {
        console.log('noctowl')
        pokemon2 = createNoctowl('Noctowl');
        document.querySelector('#numeroPokemon2').src="./img/noctowl.png"
    }


    // iniciar game
    stage.start(
        pokemon1,
        pokemon2,
        document.querySelector('.pokemonOne'),
        document.querySelector('.pokemonTwo')
    ) 
  }
  corphish.addEventListener('click', mostrarCorphish); //funcao para escolher o Corphish
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////


//Noctowl
function mostrarNoctowl() {
    // selecionar o pokemon escolhido
    pokemon1 = createNoctowl('Noctowl');

    //troca de imagem e nome do pokemon para Noctowl//
    if (pokemon1.name === 'Noctowl') {
        document.querySelector('#numeroPokemon').src="./img/noctowl.png"
    } 
    // else if (pokemon2.name === 'Noctowl') {
    //     document.querySelector('#numeroPokemon2').src="./img/noctowl.png"
    // }


    // selecionar o pokemon 2 e trocar a imagem e o nome aleatoriamente
    if (randomPokemon == 0) {
        console.log('pikachu')
        pokemon2 = createPikachu(`Pikachu`);
        document.querySelector('#numeroPokemon2').src="./img/pikachu.png"
    } else if (randomPokemon == 1) {
        console.log('glaceon')
        pokemon2 = createGlaceon('Glaceon');
        document.querySelector('#numeroPokemon2').src="./img/glaceon.png"
    } else if (randomPokemon == 2) {
        console.log('roserade')
        pokemon2 = createRoserade('Roserade');
        document.querySelector('#numeroPokemon2').src="./img/roserade.png"
    } else if (randomPokemon == 3) {
        console.log('corphish')
        pokemon2 = createCorphish('Corphish');
        document.querySelector('#numeroPokemon2').src="./img/corphish.png"
    } else if (randomPokemon == 4) {
        console.log('noctowl')
        pokemon2 = createNoctowl('Noctowl');
        document.querySelector('#numeroPokemon2').src="./img/noctowl.png"
    }


    // iniciar game
    stage.start(
        pokemon1,
        pokemon2,
        document.querySelector('.pokemonOne'),
        document.querySelector('.pokemonTwo')
    ) 
  }
  noctowl.addEventListener('click', mostrarNoctowl); //funcao para escolher o Noctowl
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////



// funcao para jogar novamente
function playAgain () {
    location.reload();
}