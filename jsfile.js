//  product selection part 

function Shoppingcart(casee, numberr) {
    let caseinput = document.getElementById(casee);
    let num = numberr;
    caseinput.innerText = num;
    calculatetotal();
}





document.getElementById('case1').addEventListener('click', function() {
    Shoppingcart('case-p', 0);
});

document.getElementById('case2').addEventListener('click', function() {
    Shoppingcart('case-p', 180);

});

document.getElementById('case3').addEventListener('click', function() {
    Shoppingcart('case-m', 0);

});
document.getElementById('case4').addEventListener('click', function() {
    Shoppingcart('case-m', 100);
});
document.getElementById('case5').addEventListener('click', function() {
    Shoppingcart('case-m', 180);

});
document.getElementById('case6').addEventListener('click', function() {
    Shoppingcart('case-n', 0);

});
document.getElementById('case7').addEventListener('click', function() {
    Shoppingcart('case-n', 20);

});






// calculator part 

function calculatetotal() {
    const bestPrice = parseFloat(document.getElementById("best-price").innerText);
    const caseP = parseFloat(document.getElementById("case-p").innerText);
    const caseM = parseFloat(document.getElementById("case-m").innerText);
    const caseN = parseFloat(document.getElementById("case-n").innerText);
    const total = bestPrice + caseP + caseM + caseN;
    document.getElementById("case-o").innerText = total;
    document.getElementById("total").innerText = total;
}



// promo code part 

document.getElementById("apply").addEventListener("click", function(event) {
    const promoText = document.getElementById("promo-text");
    if (promoText.value == "stevekaku") {
        const total = document.getElementById("total");
        const discount = (parseFloat(total.innerText) * 20) / 100;
        total.innerText = parseFloat(total.innerText) - discount;
        event.target.disabled = true;
    }
});



//  finish