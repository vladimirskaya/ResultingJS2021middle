
import './index.html';

// import * as $ from '@images'

import './css/font-awesome.min.css';
import './css/style.min.css';

import togglePopup from './modules/togglePopup'
import appearBurgerMenu from './modules/burgerMenu'
import selectClubs from './modules/selectClubs'
import genMainSlider from './modules/genMainSlider'
import slideLilCarousel from './modules/slideLilCarousel'
import checkInputFormData from './modules/checkInputFormData'
import sendForm from './modules/sendForm'
import burgerMenuPopup from './modules/burgerMenuPopup.js'

togglePopup();
appearBurgerMenu();
genMainSlider();
selectClubs();
slideLilCarousel();
burgerMenuPopup()
// const kar = new SlideCarousel();
// console.log(kar);
checkInputFormData();
sendForm();
