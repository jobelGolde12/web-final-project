
let card = document.querySelectorAll('.card');
let nameView = document.querySelector('.name');
let cardButton = document.getElementById('cardButton');
let nameButton = document.getElementById('nameButton');
cardButton.addEventListener('click', () =>{
    card.forEach(e =>{
        e.style.display = 'flex';
    })
    nameView.style.display = 'none';

    nameButton.style.display = 'block';
    cardButton.style.display = 'none';
    console.log('chooseCardFunc is clicked');
})
nameButton.addEventListener('click', () =>{

    nameView.style.display = 'block';
    card.forEach(e =>{
        e.style.display = 'none';
    })

    nameButton.style.display = 'none';
    cardButton.style.display = 'block';
    console.log('chooseNameFunc is clicked');

})