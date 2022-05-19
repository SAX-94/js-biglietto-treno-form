// @ts-nocheck

// VARIABLES

const pricePerkm = 0.21;
const minorsDiscount = 0.8;
const elderDiscount = 0.6;
const noDiscount = 1;
let discount;

const inputName = document.querySelector("[name='userName']");
let age = parseInt(document.querySelector("[name='userDistance']"));
let km = parseInt(document.querySelector("[name='userAge']"));
// @ts-ignore
let price = parseFloat(pricePerkm * km);

// CONDITIONS FOR APPLYING THE DISCOUNT

if (age < 18) {
    discount = minorsDiscount;
} else if (age > 65) {
    discount = elderDiscount;
} else {
    discount = noDiscount;
}

// finalPrice VALUE

let finalPrice = parseFloat(price * discount).toFixed(2);