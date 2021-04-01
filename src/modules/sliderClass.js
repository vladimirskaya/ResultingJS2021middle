export default class Slider{
    constructor(cont, list, dots){
        this.container = document.querySelector(cont),
        this.listSlides =  this.container.querySelectorAll(list),
        // this.dotSlides =  this.container.querySelectorAll(dots)
        this.startIndex = 0;
        this.lastIndex =  this.listSlides.length;
        this.currentIndex = 0;
        this.interval = 4000;
    }
    //методы класса
    changeSlides(){
        const slide = () => {
            this.listSlides.forEach((elem,index) => {
            //console.log('mainIndex', mainIndex);
            elem.style.display = 'none';
            if (index === this.currentIndex){
                elem.style.display = 'flex';
                elem.style.transition = '2s ease 1s';
                // console.log('elem',elem);
            } 
        })
        if (this.currentIndex === this.listSlides.length - 1 ) this.currentIndex = 0;
        else this.currentIndex++;
        // console.log('this.currentIndex', this.currentIndex);}
        }
        setInterval(slide, this.interval);
    }


    addDots(){

    }

    init() {
        console.log(this);
        this.changeSlides();    
        // if (this.dotSlides) this.changeSlides();
        // else this.addDots();
    }
}