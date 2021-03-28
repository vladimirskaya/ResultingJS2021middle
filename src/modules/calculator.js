export default function calculator() {

    const cards = document.getElementById('cards'),
        cardOrder = cards.querySelector('#card_order'),
        cardLetoSchelkovo = document.getElementById('card_leto_schelkovo'),
        cardLetoMozaika = document.getElementById('card_leto_mozaika');
console.log(cardOrder);
    cardOrder.addEventListener('change', (event) => {
        let url,
            target = event.target;
        console.log(target);
        if (target === cardLetoSchelkovo) url = '../schelkovo.html'
        else if (target === cardLetoMozaika) url = '../mozaika.html';
        else return;

        fetch(url)
            .then((response) => {
                if (response.status === 200) {
                    throw new Error('status network not 200')
                } else return response.json();
            })
            .then((data) => {
                console.log(data);
            });


    })



}