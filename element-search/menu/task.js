const menuCollection = document.getElementsByClassName("menu__link"); //коллекция ссылок
const menuSub = document.getElementsByClassName("menu_sub"); //коллекция выпадающ. меню
const elemCollect = Array.from(menuCollection);

for (elem of menuCollection) {
    menuCollection[elem].onlick = function(event) {
        event.preventDefault();
        console.log("click");
    };
};

function onClick() {
    menuSub[0].className = 'menu menu_sub menu_active';

};
console.log(elemCollect[1]);
console.log(menuSub);

//elemCollect[1].onclick = onClick;
// for (let i; i < elemCollect.length; i++) {
//     elemCollect.item(i).onclick = onClick;
//     console.log(elemCollect.item(i));
// }

for (let menuItem of menuCollection) {
    menuItem.onclick = function() {
        menuSub.item(1).className = 'menu menu_sub menu_active';
    }
    console.log(menuItem[0]);
};