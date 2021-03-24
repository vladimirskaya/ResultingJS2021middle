export default function regForFreeVisit() {
    
    const freeVisitForm = document.querySelector('#free_visit_form'),
        openPopup = document.querySelector('.open-popup'),
        doc = document.querySelector('body');

        //док  - для дальнейшего создания единого слушателя для всех событий
        doc.addEventListener('click', event => {
            let target = event.target;
            if (target === openPopup) freeVisitForm.style.display = 'block';
            if (event.target.nodeName === "IMG") freeVisitForm.style.display = 'none';
            
    })       
}