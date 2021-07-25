"use strict"

const product = Array.from(document.getElementsByClassName("product"));
const controls = Array.from(document.getElementsByClassName("product__controls"));
const cart = document.querySelector(".cart__products");

// controls.forEach(item => {
//     let quantValue = item.querySelector(".product__quantity-value");
//     item.querySelector(".product__quantity-control_inc").onclick = () => {
//         quantValue.textContent++;
//     };
//     item.querySelector(".product__quantity-control_dec").onclick = () => {
//         if (quantValue.textContent > 1) {
//             quantValue.textContent--;
//         }
//     };
// });
for (let item of controls) {
    let quantValue = item.querySelector(".product__quantity-value");
    item.querySelector(".product__quantity-control_inc").onclick = () => {
        quantValue.textContent++;
    };
    item.querySelector(".product__quantity-control_dec").onclick = () => {
        if (quantValue.textContent > 1) {
            quantValue.textContent--;
        }
    };
};

function addProduct(name) {
    cart.insertAdjacentHTML("beforeend", `
    <div class="cart__product" data-id="${name.dataset.id}">
    <img class="cart__product-image" src="${name.querySelector(".product__image").src}">
    <div class="cart__product-count">${name.querySelector(".product__quantity-value").textContent}</div>
</div>
    `);
};

product.forEach(elem => {
    elem.querySelector(".product__add").onclick = () => {
        let cartProduct = Array.from(document.getElementsByClassName("cart__product"));
        if (cartProduct.length != 0 && cartProduct.some(item => item.dataset.id == elem.dataset.id)) { //когда в корзине что-то есть и мы добавляем продукт
            cartProduct.forEach(item => {
                if (item.dataset.id == elem.dataset.id) {
                    item.querySelector(".cart__product-count").textContent =
                        Number(item.querySelector(".cart__product-count").textContent) +
                        Number(elem.querySelector(".product__quantity-value").textContent);
                }
            });
        } else {
            addProduct(elem);
        }
    };

});






// const controlDec = Array.from(document.getElementsByClassName("product__quantity-control_dec"));
// const controlInc = Array.from(document.getElementsByClassName("product__quantity-control_inc"));
// const addButton = Array.from(document.getElementsByClassName("product__add"));
// const quantValue = Array.from(document.getElementsByClassName("product__quantity-value"));