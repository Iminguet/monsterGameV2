'use-strict';

/*


El boton tiene un ID único--> goTo-mainGame
podemos obtener el id y hacer split (-) y así obtner el id único con el que cambiaremos visibilityOf

Para solucionar el problema de el botón back. Pouedo crearlo dinámicamente con un append child a una clase del div y darle la idy su comportamiento. De ese modo, solo habrá un botón. Si div padre no tiene visibilityOff, crear el botón back. 

// o añadirlo con .setAttribute('id', 'goTo-mainMenu')
Así podré sacar todo el JS del HTML. 

Usar addEventListener().

*/

// goSection.addEventListener();

// const startGame = (id) => {
//   // validar los datos
//   // Nombre ?
//   // Avatar?
//   // Skill?
//   // Crear clase --> Pasar a pantalla de juego.

const obtenerId = () => {
  let botones = Array.from(document.getElementsByClassName('toSection'));
  botones.forEach((boton) => {
    boton.addEventListener('click', (e) => {
      const name = e.target.id.split('-')[1];
      const displayOn = document.getElementById(name);
      const displayOff = document.getElementsByClassName('size');

      for (let i = 0; i < displayOff.length; i++) {
        displayOff[i].classList.add('visibilityOFF');
      }
      displayOn.classList.remove('visibilityOFF');
      // showButton(displayOn);
    });
  });
};

obtenerId();

const showButton = (element) => {
  console.log();
  if (element.classList.contains('visibilityOFF')) {
    const backButton = document.querySelector(
      `${element} > .goSection-mainMenu`
    );
    console.log(backButton);
  }
};
