export default function reCallMe() {
    
    const callbackForm = document.querySelector('#callback_form'),
        callbackBtn = document.querySelector('.callback-btn'),
        formContent = document.querySelectorAll('.form-content')[0],
        doc = document.querySelector('body');

        //док  - для дальнейшего создания единого слушателя для всех событий
        doc.addEventListener('click', event => {
            let target = event.target;
            if (target === callbackBtn) callbackForm.style.display = 'block';
            // console.log('Элемент, в котором находитс таргет', formContent);
            // console.dir('Его дети', formContent.children);
            // console.log('Сам таргет', target);
            // console.log('Таргет внутри главного элемента', formContent.contains(target));
            if (target.nodeName === "IMG" || !formContent.contains(target) && target !== callbackBtn) {
                callbackForm.style.display = 'none';
            } 
            
    })       
}