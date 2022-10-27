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
let divId = Array.from(document.getElementsByClassName('getId'));
// usar la misma función para obtener el div del botón y de los divs de la skill y el avatar

const obtenerId = (divs) => {
  divs.forEach((div) => {
    div.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(e.target);
      const name = e.target.id.split('-')[1];
      console.log(name);
    });
  });

  // botones.map((boton) => {
  //   console.log(boton.id);
  //   boton.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     name = e.target.id.split('-')[1];
  //     console.log(name);
  //   });
  // });
};

obtenerId(divId);

function anagrams(list) {
  const anagramsMap = new Map();

  list.forEach((item) => {
    const letters = [];
    for (let letter of item.toLowerCase()) {
      letters.push(letter);
    }
    const ordered = letters.sort();
    anagramsMap.set(ordered.join(''), item);
  });

  return Array.from(anagramsMap.values());
}
