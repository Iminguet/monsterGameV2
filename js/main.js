'use-strict';

let avatars = Array.from(document.getElementsByClassName('getAvatar'));
let identifies = Array.from(document.getElementsByClassName('getId'));
let buttons = Array.from(document.getElementsByClassName('toSection'));
const showObj = document.getElementById('characterStartButton-mainGame');

let playerSelections = {
  name: undefined,
  avatar: undefined,
  skill: undefined,
};

// cambiamos la vista de las páginas
const changeView = (buttonsArray) => {
  const goSection = (e) => {
    e.preventDefault();
    const entireId = e.currentTarget.id;
    const currentId = entireId.split('-')[1];
    const displayOn = document.getElementById(currentId);
    const displayOff = document.getElementsByClassName('size');

    console.log(displayOff);
    for (let i = 0; i < displayOff.length; i++) {
      displayOff[i].classList.add('visibilityOFF');
    }
    displayOn.classList.remove('visibilityOFF');
  };

  for (const button of buttonsArray) {
    button.addEventListener('click', goSection);
  }
};

// conseguimos el avatar del personaje
const createAvatar = (avatarsArray) => {
  const getAvatar = (e) => {
    e.preventDefault();
    playerSelections.avatar = e.currentTarget;
    console.log(playerSelections.avatar);
  };

  for (const avatar of avatarsArray) {
    avatar.addEventListener('click', getAvatar);
  }
};

// conseguimos el nombre del personaje
const getName = () => {
  const playerName = document.getElementById('warriorId').value;
  if (playerName.trim() === '') {
    return 'Aureliano Buendía';
  } else {
    return playerName.trim();
  }
};

// Conseguimos el id de la skill del personaje
const createId = (identifiesArray) => {
  const getId = (e) => {
    e.preventDefault();
    playerSelections.skill = e.currentTarget.id;
    console.log(playerSelections.skill);
  };

  for (const identity of identifiesArray) {
    identity.addEventListener('click', getId);
  }
};

//Vamos a crear la clase

// acción del boton que lleva al principio del juego

const canStart = () => {
  showObj.addEventListener('click', (e) => {
    e.preventDefault();
    playerSelections.name = getName();
    if (
      playerSelections.name === undefined ||
      playerSelections.avatar === undefined ||
      playerSelections.skill === undefined
    ) {
      alert('Te as dejado algo por rellenar, mollano');
    } else {
      gameStart();
    }
  });
};

const gameStart = () => {
  class Characters {
    constructor(avatar, name) {
      (this.avatar = avatar),
        (this.name = name),
        (this.potions = 2),
        (this.minimunDamage = 0),
        (this.armour = 0),
        (this.life = 100);
    }

    ligthAttack(enemy) {
      enemy.life -=
        parseInt(
          Math.random() * (this.minimunDamage + 10 - this.minimunDamage) +
            this.minimunDamage
        ) - enemy.armour;
    }
    normalAttack(enemy) {
      enemy.life -=
        parseInt(
          Math.random() * (this.minimunDamage + 15 - this.minimunDamage) +
            this.minimunDamage
        ) - enemy.armour;
    }
    strongAttack(enemy) {
      enemy.life -=
        parseInt(
          Math.random() * (this.minimunDamage + 25 - this.minimunDamage) +
            this.minimunDamage
        ) - enemy.armour;
    }
  }

  const skills = {
    increaseAttack: class IncreaseAttack extends Characters {
      increaseAttack() {
        this.minimunDamage += 5;
      }
    },

    increaseDefense: class IncreaseDefense extends Characters {
      increaseDefense() {
        this.armour += 5;
      }
    },

    morePotions: class MorePotions extends Characters {
      morePotions() {
        this.potions += 1;
      }
    },

    increaseHealth: class IncreaseHealth extends Characters {
      increaseHealth() {
        this.life += 50;
      }
    },
  };

  const classHerecy = playerSelections.skill;

  const hero = new skills[classHerecy](
    playerSelections.avatar,
    playerSelections.name
  );
  hero[classHerecy]();

  console.log('******************************************************');
  console.log(hero);
  console.log('******************************************************');
};

createAvatar(avatars);
createId(identifies);
changeView(buttons);
canStart();
