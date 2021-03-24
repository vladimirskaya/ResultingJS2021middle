export default function regForFreeVisit() {
    
    const freeVisitForm = document.querySelector('#free_visit_form'),
        openPopup = document.querySelector('.open-popup'),
        formContent = document.querySelectorAll('.form-content')[1],
        doc = document.querySelector('body');

        //док  - для дальнейшего создания единого слушателя для всех событий
        doc.addEventListener('click', event => {
            let target = event.target;
            if (target === openPopup) freeVisitForm.style.display = 'block';
            // console.log('Элемент, в котором находитс таргет', formContent);
            // console.dir('Его дети', formContent.children);
            // console.log('Сам таргет', target);
            // console.log('Таргет внутри главного элемента', formContent.contains(target));
            if (target.nodeName === "IMG" || !formContent.contains(target) && target !== openPopup) {
                freeVisitForm.style.display = 'none';
            } 
            
    })       
}