// modelo padrao
const defaultCharacter = {
    name: '',
    tipo: '',
    life: 1,
    maxLife:1,
    attack: 0,
    defense: 0
}

//Pikachu
const createPikachu = (name) => {
    return {
        ...defaultCharacter,
        name,
        tipo: 'eletrico',
        life: 100,
        maxLife: 100,
        attack: 10,
        defense: 6,
        
    }
}

//Glaceon
const createGlaceon = (name) => {
    return {
        ...defaultCharacter,
        name,
        tipo: 'gelo',
        life: 100,
        maxLife: 100,
        attack: 12,
        defense: 3,
    }
}

//Roserade
const createRoserade = (name) => {
    return {
        ...defaultCharacter,
        name,
        tipo: 'grama',
        life: 100,
        maxLife: 100,
        attack: 8,
        defense: 6,
        
    }
}

//Corphish
const createCorphish = (name) => {
    return {
        ...defaultCharacter,
        name,
        tipo: 'agua',
        life: 100,
        maxLife: 100,
        attack: 6,
        defense: 10,
    }
}

//Noctowl
const createNoctowl = (name) => {
    return {
        ...defaultCharacter,
        name,
        tipo: 'voador',
        life: 100,
        maxLife: 100,
        attack: 7,
        defense: 4,
    }
}


// passo 2 ///
const stage = {
  
    start(primeiroPokemon, segundoPokemon, primeiroPokemonEl, segundoPokemonEl) {
        this.primeiroPokemon = primeiroPokemon;
        this.segundoPokemon = segundoPokemon;
        this.primeiroPokemonEl = primeiroPokemonEl;
        this.segundoPokemonEl = segundoPokemonEl;

        //funcao para o pokeemon atacar

        this.primeiroPokemonEl.querySelector('.attackButton').addEventListener('click', ()=> this.doAttack(this.primeiroPokemon, this.segundoPokemon)); 
        this.segundoPokemonEl.querySelector('.attackButton2').addEventListener('click', ()=> this.doAttack(this.segundoPokemon, this.primeiroPokemon));
  

        this.update();
    },
    update() {
        //Aqui vai atualizar as informacoes do Pokemon 1 na tela
        this.primeiroPokemonEl.querySelector('.name').innerHTML = `${this.primeiroPokemon.name} - ${this.primeiroPokemon.life.toFixed(0,1)} HP`
        //barra de porcentagem Pokemon 1
        let pokemon1Porcentagem = (this.primeiroPokemon.life / this.primeiroPokemon.maxLife) * 100;
        this.primeiroPokemonEl.querySelector('.bar').style.width = `${pokemon1Porcentagem}%`
        
        
        //Aqui vai atualizar as informacoes do Pokemon 2 na tela
        this.segundoPokemonEl.querySelector('.name').innerHTML = `${this.segundoPokemon.name} - ${this.segundoPokemon.life.toFixed(0,1)} HP`
        //barra de porcentagem Pokemon 2
        let pokemon2Porcentagem = (this.segundoPokemon.life / this.segundoPokemon.maxLife) * 100;
        this.segundoPokemonEl.querySelector('.bar').style.width = `${pokemon2Porcentagem}%`
    },

    //funcao para atacar
    doAttack (attacking, attacked) {
       if (attacking.life <= 0 || attacked.life <= 0) {
        log.addMessage("Fim de jogo")

        document.querySelector('.grid-2 h3').style.display = 'block'
        document.querySelector('.grid-2 button').style.display = 'block'
        return;

       }

       const attackFactor = (Math.random() *2).toFixed(2);
       const defenseFactor = (Math.random() *2).toFixed(2);

       const actualAttack = attacking.attack * attackFactor;
       const actualDefense = attacked.defense * defenseFactor;

       if (actualAttack > actualDefense) {
            attacked.life -= actualAttack;
            attacked.life = attacked.life < 0 ? 0 : attacked.life;
        log.addMessage(`${attacking.name} Causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`)
       } else {
        log.addMessage(`${attacked.name} Conseguiu defender`)
       }

        this.update(); //sempre que houver um ataque ele e atualizado 
    }

}

/////////////////////////////////////////////////////////////////


// log
const log = {
    list: [],
    addMessage(msg) {
        this.list.push(msg);
        this.render();
    },

    //exibir mensagem
    render() {
        const logEl = document.querySelector('.log');
        logEl.innerHTML = '';

        for (let i in this.list) {
            logEl.innerHTML += `<li>${this.list[i]}</li>`;
        }
    }
}