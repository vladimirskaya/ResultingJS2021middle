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
            let target = event.target,
                purpose;

            if (target === openPopup) purpose = freeVisitForm;
            if (target === callbackBtn) purpose = callbackForm;
            if (target.closest('div') === fixedGift) purpose = gift;

            if (!!purpose){
                purpose.style.display = 'block';
                if (purpose === gift) fixedGift.style.display = 'none';
            } 
                
            if ( target.className === 'overlay' || target.className === 'close_icon' || target === closeBtn ) {
                freeVisitForm.style.display = 'none';
                callbackForm.style.display = 'none';
                gift.style.display = 'none';    
            }
    })       
        
}