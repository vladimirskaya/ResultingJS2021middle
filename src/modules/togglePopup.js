export default function togglePopup() {
    
    const doc = document.querySelector('body'),

        openPopup = document.querySelector('.open-popup'),
        callbackBtn = document.querySelector('.callback-btn'),
        fixedGift = document.querySelector('.fixed-gift'),
        closeBtn = document.querySelectorAll('.close-btn')[1],
                
        callbackForm = document.querySelector('#callback_form'), // id=form1
        freeVisitForm = document.querySelector('#free_visit_form'), // id=form2
        gift = document.querySelector('#gift');
       
        doc.addEventListener('click', event => {
            let target = event.target;
            // console.log('target', target);
            if (target === openPopup) freeVisitForm.style.display = 'block';
            if (target === callbackBtn) callbackForm.style.display = 'block';
            if (target.closest('div') === fixedGift) {
                gift.style.display = 'block';  
                fixedGift.style.display = 'none';
                // console.log('closeBtn',closeBtn);
            }        
            if ( target.className === 'overlay' || target.className === 'close_icon' || target === closeBtn ) {
                freeVisitForm.style.display = 'none';
                callbackForm.style.display = 'none';
                gift.style.display = 'none';    
            }
    })       
        
}