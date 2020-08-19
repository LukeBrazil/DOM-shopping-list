'use strict';
const myBtn = document.querySelector('#generateList');
const shopList = document.querySelector('#shopping-list');


myBtn.addEventListener('click', function() {
const item1 = document.querySelector('.input1').value;
const item2 = document.querySelector('.input2').value;
const item3 = document.querySelector('.input3').value;
const item4 = document.querySelector('.input4').value;
    shopList.innerHTML = `
<div class="container">
    <h2>Shopping List:</h2>
    <br>
    <li>${item1}</li>
    <li>${item2}</li>
    <li>${item3}</li>
    <li>${item4}</li>
</div>
    `
});