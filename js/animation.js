function attacking() {
    let attackedPokemon = document.querySelector('#numeroPokemon')
    attackedPokemon.style.display = 'block';
    attackedPokemon.style.animationName = 'attackSuccess';
    attackedPokemon.style.opacity = '0';
    attackedPokemon.style.animationDuration = '2s';
    setTimeout(() => attackedPokemon.style = '', 3000)
}

function attacking2() {
    let attackedPokemon2 = document.querySelector('#numeroPokemon2')
    attackedPokemon2.style.display = 'block';
    attackedPokemon2.style.animationName = 'attackSuccess';
    attackedPokemon2.style.opacity = '0';
    attackedPokemon2.style.animationDuration = '2s';
    setTimeout(() => attackedPokemon2.style = '', 3000)
}