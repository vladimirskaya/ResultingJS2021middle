export default function selectClub() {
    const clubSelect = document.querySelector('.club-select');
    console.log('selectClub');
    clubSelect.addEventListener('click', event => {
        clubSelect.children[0].getElementsByClassName.display = 'fixed';
        console.log('click', event);
    });
}

