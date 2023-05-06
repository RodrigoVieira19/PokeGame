// pokemon audios
let pikachuAttack = {
    push: new Howl({
       src: 
        './audios/pikachu.mp3',
    })
}

let GlaceonAttack = {
    push: new Howl({
       src: 
        './audios/glaceon.mp3',
    })
}

let RoseradeAttack = {
    push: new Howl({
       src: 
        './audios/roserade.mp3',
    })
}

let CorphishAttack = {
    push: new Howl({
       src: 
        './audios/corphish.mp3',
    })
}

let NoctowlAttack = {
    push: new Howl({
       src: 
        './audios/noctowl.mp3',
    })
}

// funcao para tocar os audios do pokemon I
function displayAudioPokemon () {
    if (pokemon1.name === 'Pikachu') {
        pikachuAttack.push.play()
    }

    if (pokemon1.name === 'Glaceon') {
        GlaceonAttack.push.play()
    }

    if (pokemon1.name === 'Roserade') {
        RoseradeAttack.push.play()
    }

    if (pokemon1.name === 'Corphish') {
        CorphishAttack.push.play()
    }

    if (pokemon1.name === 'Noctowl') {
        NoctowlAttack.push.play()
    }
}

// funcao para tocar os audios do pokemon II
function displayAudioPokemon2 () {
    if (pokemon2.name === 'Pikachu') {
        pikachuAttack.push.play()
    }

    if (pokemon2.name === 'Glaceon') {
        GlaceonAttack.push.play()
    }

    if (pokemon2.name === 'Roserade') {
        RoseradeAttack.push.play()
    }

    if (pokemon2.name === 'Corphish') {
        CorphishAttack.push.play()
    }

    if (pokemon2.name === 'Noctowl') {
        NoctowlAttack.push.play()
    }
}

botaodeataque = document.querySelector('.attackButton').addEventListener ('click',displayAudioPokemon)
botaodeataque2 = document.querySelector('.attackButton2').addEventListener ('click',displayAudioPokemon2)

