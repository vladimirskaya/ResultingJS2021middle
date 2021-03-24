export default function scrollBurgerMenu() {
    const popupMenuLarge = document.querySelector('.popup-menu'), // popup-menu hidden-large ДОБАВИТЬ АНИМАЦИЮ
        menuButtonLarge = document.querySelector('.menu-button'), // menu-button hidden-large
        ulHiddenSmall = document.querySelector('.hidden-small');

    window.addEventListener(`scroll`, () => {
        let menuCoordinates= menuButtonLarge.getBoundingClientRect();
        if (menuCoordinates.y <= 0) {
            menuButtonLarge.style.position = 'fixed';
            // menuButtonLarge.style.display = 'block';
        } else{
            console.log(menuCoordinates.y);
            // ulHiddenSmall.style.display = 'flex';
            // menuButtonLarge.style.display = 'none';
        }
    }, false);
}