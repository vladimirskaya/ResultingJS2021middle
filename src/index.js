import "./index.html";

// import * as $ from '@images'

import "./css/font-awesome.min.css";
import "./css/style.min.css";

import togglePopup from "./modules/togglePopup";
import appearBurgerMenu from "./modules/burgerMenu";
import selectClubs from "./modules/selectClubs";
import genMainSlider from "./modules/genMainSlider";
import slideServices from "./modules/slideServices";
import checkInputFormData from "./modules/checkInputFormData";
import sendForm from "./modules/sendForm";
import burgerMenuPopup from "./modules/burgerMenuPopup.js";
import sliderGallery from "./modules/sliderGallery";
import calculator from "./modules/calculator";
import scrollPage from "./modules/scrollPage";
import Slider from "./modules/sliderClass.js"

togglePopup();
appearBurgerMenu();
// genMainSlider();
const mainSlider = new Slider('.main-slider', '.slide');
mainSlider.init();

selectClubs();
slideServices();
burgerMenuPopup();
// sliderGallery();
scrollPage();
calculator();
checkInputFormData();
sendForm();
