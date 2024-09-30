let button = document.querySelector('.popup-button');
button.addEventListener('mouseover', showPopup);
button.addEventListener('mouseout', showPopup);
function showPopup() {
   	document.querySelector('.popup').classList.toggle('visible');
    console.log('showPopup работает');
}