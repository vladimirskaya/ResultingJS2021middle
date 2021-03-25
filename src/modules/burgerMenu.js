export default function appearBurgerMenu() {
    const topMenu = document.querySelector('.top-menu'), // popup-menu hidden-large ДОБАВИТЬ АНИМАЦИЮ
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

    //
    const beforeScrollCoord = topMenu.getBoundingClientRect();
    window.addEventListener(`scroll`, () => {
        let clientWidth = document.documentElement.clientWidth;
       if (window.pageYOffset > beforeScrollCoord.y && clientWidth < 768){
        topMenu.style.position = 'fixed';
       }else if  (window.pageYOffset <= beforeScrollCoord.y){
        topMenu.style.position = 'initial';
       }
    }, false);

}

