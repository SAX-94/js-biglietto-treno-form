// @ts-nocheck

// VARIABLES

const pricePerkm = 0.21;
const minorsDiscount = 0.8;
const elderDiscount = 0.6;
const noDiscount = 1;
let discount;

const inputName = document.querySelector("[name='userName']").value;
const age = parseInt(document.querySelector("[name='userAge']").value);
const km = parseInt(document.querySelector("[name='userDistance']").value);
// @ts-ignore
let price = parseFloat(pricePerkm * km);

const generateTicket = document.getElementById("generateTicket");
generateTicket.addEventListener("click", function () {
    console.log(finalPrice.value, price.value, inputName.value, age.value, km.value);
});

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

// VALUES THAT MUST BE TRANSFERRED TO HTML

document.getElementById("passengerName").innerHTML = inputName;
document.getElementById("ticketPrice").innerHTML = finalPrice;