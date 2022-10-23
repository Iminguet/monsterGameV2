'use-strict';

// Función que itercambia la visibilidad de los DIVS.
const goSection = (userClicked) => {
  const displayOn = document.getElementById(userClicked);
  const displayOff = document.getElementsByClassName('size');

  for (let i = 0; i < displayOff.length; i++) {
    displayOff[i].classList.add('visibilityOFF');
  }
  displayOn.classList.remove('visibilityOFF');
};

const startGame = (id) => {
  // validar los datos
  // Nombre ?
  // Avatar?
  // Skill?
  // Crear clase --> Pasar a pantalla de juego.

  goSection(id);
};

// Clase principal character, con esta clase se construirá el héroe y los monstruos
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

const CrearMetodo = (skillId) => skillId.id;
const getAvatar = (id) => document.getElementById(id.id).innerHTML;
const getName = () => document.getElementById('warriorId').value;

const characterConstruction = (avatarImage, name, skillSelection) => {
  // extraemos del objeto skills el método que entra por la variable y almacenamos ese método que heredará
  // en una variable

  const skill = increaseAttack;

  // Instanciamos el objeto
  // junto con su heredera y damos valores a los parametros de la clase principal.
  let hero = new skill(avatarImage, name);

  // Activamos el método
  hero[skill]();

  return hero;
};

characterConstruction(getAvatar, getName, CrearMetodo);
console.log(characterConstruction.name);
console.log(characterConstruction.armour);
console.log(characterConstruction.skills);
