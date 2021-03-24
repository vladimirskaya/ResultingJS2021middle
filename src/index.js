
import './index.html';

import './css/font-awesome.min.css';

import './css/style.min.css';

import selectClubs from './modules/selectClubs'
// import selectTheClub from './modules/selectTheClub'
import  regForFreeVisit from './modules/regForFreeVisit'
import  reCallMe from './modules/reCallMe'
import togglePopup from './modules/burgerMenu'
import scrollBurgerMenu from './modules/scrollBurgerMenu'

selectClubs();

regForFreeVisit();
reCallMe();
togglePopup();
scrollBurgerMenu();