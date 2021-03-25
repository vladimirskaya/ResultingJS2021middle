export default function genMainSlider(){
    const mainSlider = document.querySelector('.main-slider'),
        sliders = [...mainSlider.children];
    let mainIndex = 1;
    // console.log('mainSlider', sliders);

    setInterval(changeSlide, 4000);

    function changeSlide(){
        sliders.forEach((elem,index) => {
            /console.log('mainIndex', mainIndex);
            elem.style.display = 'none';
            if (index === mainIndex){
                elem.style.display = 'flex';
                elem.style.transition = '2s ease 1s';
                // console.log('elem',elem);
            } 
        })
        if (mainIndex === sliders.length - 1 ) mainIndex = 0;
        else mainIndex++;
        // console.log('mainIndex', mainIndex);
    }
    


}