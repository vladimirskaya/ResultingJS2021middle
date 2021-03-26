export default function burgerMenuPopup() {
    const popupMenuHidLarge = document.querySelector('.popup-menu'),
        btnClosePopupMenu = document.querySelector('.close-menu-btn'),
        btnPopupMenu = document.querySelector('.menu-button');
        console.log(btnPopupMenu);


        btnPopupMenu.addEventListener('click', event =>{
            let target = event.target;
           
            console.log(target);
            if (target === btnPopupMenu.children[0]) {
                popupMenuHidLarge.style.display = 'flex';
            }
        });

        popupMenuHidLarge.addEventListener('click', event =>{
            let target = event.target;
            
            if (target === btnClosePopupMenu.children[0]){
                popupMenuHidLarge.style.display = 'none';
            } else{
                target = target.closest('li');
                if (target){
                    popupMenuHidLarge.style.display = 'none';
                }
            }   
        })
    } 