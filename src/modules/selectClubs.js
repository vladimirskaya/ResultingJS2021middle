export default function selectClubs() {
    const clubList = document.querySelector('.clubs-list');
    clubList.addEventListener('click', event => {
        
        [...clubList.children].forEach(elem => {
            // console.log('elem ', elem);
            if (elem.nodeName === 'UL'){
                if (elem.classList.contains('open')) {
                    elem.classList.remove('open');
                    elem.style.display = 'none';
                } else {
                    elem.style.display = 'block';
                    elem.classList.add('open');
                    let liClubs =[...document.querySelector('.open').children];
                    console.log(liClubs);
                    liClubs.forEach(li =>{
                        li.addEventListener('click', (event) =>{
                            if (event.target === li.children[0]){
                                event.preventDefault();
                                console.dir(event.target);
                                window.location = event.target.href;   
                            }
                            // target = event.target;
                            
                        })
                    })
                   
                }
            }   
        })
    })       
}