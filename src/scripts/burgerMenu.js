export default function togglePopup() {
    const popupMenuLarge = document.querySelector('.popup-menu'), // popup-menu hidden-large ДОБАВИТЬ АНИМАЦИЮ
        menuButtonLarge = document.querySelector('.menu-button'), // menu-button hidden-large
        ulHiddenSmall = document.querySelector('.hidden-small');

    window.addEventListener(`resize`, () => {
        let clientWidth = document.documentElement.clientWidth;
        if (clientWidth < 768) {
            ulHiddenSmall.style.display = 'none';
            menuButtonLarge.style.display = 'block';
        } else{
            ulHiddenSmall.style.display = 'flex';
            menuButtonLarge.style.display = 'none';
        }
    }, false);
}