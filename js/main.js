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

/*
Función que recoge el personaje, el nombre y la skill
y los use para crear la clase héroe.

Si una de las variables es undefined, mensaje de error al clickar start
*/

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

// FUCnción creacioón de personaje. Callback con el nombre, callback con el avatar y callback con el método elegido.
// al hacer click en el botón start, si no hay  ingún undefined..
// llamamos a la función de nombre crearMetodo. Este nombre es tem`poral.
// crearMetodo devolverá el personaje ya creado.
const crearMétodo = (e, skillId) => {
  // De esta forma podmeos recoger el input del usuario (Que será el id del elemento skill sobre el que haga click.
  // Con ese id (string), podremos crear dinámucamente un usuario y asignarle una clase y un método según su elección.
  // Success

  // con preventDerfault() podemos esperar a que activemos el evento. Antes estaba creadno la clase sin todos los componentes y por eso me daba el error.
  e.preventDefault();

  // Almacenamos el string del usuario en una variable
  const testeo = skillId.id;

  // extraemos del objeto skills el método que entra por la variable y almacenamos ese método que heredará
  // en una variable
  const rabbit = skills[testeo];

  // Instanciamos el objeto
  // junto con su heredera y damos valores a los parametros de la clase principal.
  let kilo = new rabbit(getAvatar, 'Aureliano');

  // Activamos el método
  kilo[testeo]();

  // Metodo aplicado y funcionando!!

  console.log(`Esto es el nombre: ${kilo.name}`);
  console.log(`Esto son las pociones: ${kilo.potions}`);
  console.log(`Esto es el daño mínimo:  ${kilo.minimunDamage}`);
  console.log(`Esto es la armadura:  ${kilo.armour}`);
  console.log('************************************************');
  // let monster = new Characters(monsterAvatar, monsterName);
};

// recoge el avatar que seleccione el usuario
const getAvatar = (id) => document.getElementById(id.id).innerHTML;

// recoge el nombre del input
const getName = () => document.getElementById('warriorId').value;

// Al pulsar el boton de start, se ha de crear la clase con la herencia
