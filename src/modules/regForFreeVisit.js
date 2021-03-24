export default function togglePopup() {
    
    const  doc = document.querySelector('body'); 
    openPopup = document.querySelectorAll('.popup'),

    callbackForm = document.querySelector('#callback_form'),
    callbackBtn = document.querySelector('.callback-btn'),
    freeVisitForm = document.querySelector('#free_visit_form'),
       
        


        formContent = document.querySelectorAll('.form-content')[1],       
        formContent = document.querySelectorAll('.form-content')[0],
       
        fixedGift = document.querySelector('.fixed-gift');

        //док  - для дальнейшего создания единого слушателя для всех событий
        doc.addEventListener('click', event => {
            let target = event.target;
            if (target === openPopup) freeVisitForm.style.display = 'block';
            // console.log('Элемент, в котором находитс таргет', formContent);
            // console.dir('Его дети', formContent.children);
            // console.log('Сам таргет', target);
            // console.log('Таргет внутри главного элемента', formContent.contains(target));
            if (target.nodeName === "IMG" || !formContent[1].contains(target) && target !== openPopup) {
                freeVisitForm.style.display = 'none';
            } 
            
    })       

    doc.addEventListener('click', event => {
        let target = event.target;
        if (target === callbackBtn) callbackForm.style.display = 'block';
        // console.log('Элемент, в котором находитс таргет', formContent);
        // console.dir('Его дети', formContent.children);
        // console.log('Сам таргет', target);
        // console.log('Таргет внутри главного элемента', formContent.contains(target));
        if (target.nodeName === "IMG" || !formContent[0].contains(target) && target !== callbackBtn) {
            callbackForm.style.display = 'none';
}