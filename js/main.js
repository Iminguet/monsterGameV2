'use-strict';

let avatars = Array.from(document.getElementsByClassName('getAvatar'));
let identifies = Array.from(document.getElementsByClassName('getId'));
let buttons = Array.from(document.getElementsByClassName('toSection'));

let playerSelections = {
  name: '',
  avatar: '',
  skill: '',
};

// conseguimos el avatar
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

// Conseguimos el id
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

//Vamos a crear la clase

const showObj = document.getElementById('muestraObjeto');
const name = document.getElementById('warriorId').value;

playerSelections.name = name;

showObj.addEventListener('click', (e) => {
  e.preventDefault();

  console.log(playerSelections);
});

createAvatar(avatars);
createId(identifies);
changeView(buttons);
