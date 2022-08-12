const items = document.getElementById('items');
let numberOfItems = 0;
const soda = document.getElementById('soda');

soda.addEventListener('click', () => {
    console.log('clicking');
    soda.classList.toggle('picked');
    if (soda.classList.contains('picked')) {
        numberOfItems = numberOfItems +1;
    } else {
        numberOfItems = numberOfItems -1;
    }
    
    items.textContent = ' ' + numberOfItems;
});

const cheese = document.getElementById('cheese');

cheese.addEventListener('click', () =>{
    console.log('clicking');
    cheese.classList.toggle('picked');
    if (cheese.classList.contains('picked')) {
        numberOfItems = numberOfItems + 1; 
    } else {
        numberOfItems = numberOfItems - 1;
    }
    items.textContent = ' ' + numberOfItems;
});


const grapes = document.getElementById('grapes');

grapes.addEventListener('click', () => {
    console.log('clicking');
    grapes.classList.toggle('picked');
    if (grapes.classList.contains('picked')){
        numberOfItems=numberOfItems + 1;
    } else { 
        numberOfItems=numberOfItems - 1;
    }
    items.textContent = ' ' + numberOfItems;
});

const bread = document.getElementById('bread');

bread.addEventListener('click', () => {
    console.log('clicking');
    bread.classList.toggle('picked');
    if (bread.classList.contains('picked')){
        numberOfItems=numberOfItems+1;
    } else {
        numberOfItems=numberOfItems-1;
    }
    items.textContent = ' ' + numberOfItems;
});

const watermelon = document.getElementById('watermelon');

watermelon.addEventListener('click', () => {
    console.log('clicking');
    watermelon.classList.toggle('picked');
    if (watermelon.classList.contains('picked')){
        numberOfItems=numberOfItems+1;
    } else {
        numberOfItems=numberOfItems-1;
    }
    items.textContent = ' ' + numberOfItems;
    
});




