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
  goSection(id);
  const name = document.getElementById('warriorId').value;
  return name;
};

const getAvatar = (id) => {
  const avatar = document.getElementById(id).innerHTML;
  showActions.innerHTML = avatar;
};

const getName = () => {
  const name = document.getElementById('warriorId').value;
  console.log(name);
};

class Hero {
  constructor(avatar, name) {
    (this.avatar = avatar),
      (this.name = name),
      (this.minimunDamage = 0),
      (this.armour = 0),
      (this.life = 100);
  }

  addLife() {
    this.life += 20;
  }

  addArmour() {
    this.armour += 30;
  }

  ligthAttack(enemy) {
    enemy.life -= parseInt(
      Math.random() * (this.minimunDamage + 10 - this.minimunDamage) +
        this.minimunDamage
    );
  }
  normalAttack(enemy) {
    enemy.life -= parseInt(
      Math.random() * (this.minimunDamage + 15 - this.minimunDamage) +
        this.minimunDamage
    );
  }
  strongAttack(enemy) {
    enemy.life -= parseInt(
      Math.random() * (this.minimunDamage + 25 - this.minimunDamage) +
        this.minimunDamage
    );
  }
}

let hero = new Hero(getAvatar, getName);

const salud = () => hero.addLife();
const armadura = () => hero.addArmour();

const playerSelection = armadura;
const heroe = playerSelection;
heroe();

// const playerLife = document.getElementById('playerLife');
// const playerArmour = document.getElementById('playerArmour');
// const playerName = document.getElementById('playerName');
// const playerDamage = document.getElementById('playerDamage');
// const showActions = document.getElementById('showActions');
// const barbarian = document.getElementById('barbarian').innerHTML;

// showActions.innerHTML = barbarian;
// console.log(barbarian);

// showActions.innerHTML = hero.avatar;
// playerName.innerHTML = hero.name;
// playerDamage.innerHTML = hero.minimunDamage;
// playerArmour.innerHTML = hero.armour;

function restarSalud() {
  hero.life -= 10;
  let heroSalud = `${hero.life}%`;
  playerLife.style.width = heroSalud;
  monsterLife.style.width = heroSalud;
}

// setTimeout(restarSalud, 3000);
// setTimeout(restarSalud, 6000);
// setTimeout(restarSalud, 9000);
// setTimeout(restarSalud, 12000);
// setTimeout(restarSalud, 15000);

console.log(`aqui la salud del héroe ${hero.life}`);
console.log(`aqui la armadura del héroe ${hero.armour}`);

// Y SI LO ARREGLAMOS CON HERENCIA??

// https://es.javascript.info/class-inheritance
