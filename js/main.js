const goSection = (userClicked) => {
  const displayOn = document.getElementById(userClicked);
  const displayOff = document.getElementsByClassName('size');

  for (let i = 0; i < displayOff.length; i++) {
    displayOff[i].classList.add('visibilityOFF');
  }
  displayOn.classList.remove('visibilityOFF');
};
