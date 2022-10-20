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

// recoge el avatar que seleccione el usuario
const getAvatar = (id) => document.getElementById(id).innerHTML;

// recoge el nombre del input
const getName = () => document.getElementById('warriorId').value;

// Clase principal character, con esta clase se construirá el héroe y los monstruos
class Characters {
  constructor(avatar, name) {
    (this.avatar = avatar),
      (this.name = name),
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

let hero = new Characters(getAvatar, getName);

let monster = new Characters(monsterAvatar, monsterName);
