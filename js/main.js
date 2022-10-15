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

class Hero {
  constructor(avatar, name, perk) {
    (this.avatar = avatar),
      (this.name = name),
      (this.perk = perk),
      (this.minimunDamage = 0),
      (this.armour = 0),
      (this.life = 100);
  }

  ataque_basico(enemigo) {
    enemigo.life -= parseInt(
      this.fuerza / this.suerte - enemigo.velocidad / enemigo.peso
    );
  }

  ataque_fuerte(enemigo) {
    enemigo.life -= parseInt(
      this.fuerza + this.suerte - enemigo.velocidad / enemigo.peso
    );
  }

  defensa() {}
}

const playerLife = document.getElementById('playerLife');
const playerArmour = document.getElementById('playerArmour');
const playerName = document.getElementById('playerName');
const playerDamage = document.getElementById('playerDamage');
const showActions = document.getElementById('showActions');
const barbarian = document.getElementById('barbarian').innerHTML;

// showActions.innerHTML = barbarian;
console.log(barbarian);

let hero = new Hero(barbarian, 'Antofagasto EL grande', [
  'perk',
  Math.random(),
]);

showActions.innerHTML = hero.avatar;
playerName.innerHTML = hero.name;
playerDamage.innerHTML = hero.minimunDamage;
playerArmour.innerHTML = hero.armour;

function restarSalud() {
  hero.life -= 10;
  let heroSalud = `${hero.life}%`;
  playerLife.style.width = heroSalud;
}

setTimeout(restarSalud, 3000);
setTimeout(restarSalud, 6000);
setTimeout(restarSalud, 9000);
setTimeout(restarSalud, 12000);
setTimeout(restarSalud, 15000);
