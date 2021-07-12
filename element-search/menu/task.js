const menuCollection = document.getElementsByClassName("menu__link"); //коллекция ссылок
const menuSub = document.getElementsByClassName("menu_sub"); //коллекция выпадающ. меню
const elemCollect = Array.from(menuCollection);

for (let i = 0; i < menuCollection.length; i++) {
    let elemMenu = menuCollection[i];
    console.log(elemMenu);
    elemMenu.onlick = (event) => {
        let currentItem = event.target;
        event.preventDefault();
        if (elemMenu == currentItem) {
            let nextSibling = currentItem.nextElementSibling;
            if (currentItem.nextElementSibling != null) {
                nextSibling.classList.add("menu_active");
                console.log(nextSibling);
            }
            console.log(currentItem, event.target, event.currentTarget);
        }

    };
};





// let onclick = (event) => {
//     event.preventDefault();
//     let currentItem = event.target;
//     let nextSibling = currentItem.nextElementSibling;
//     if (nextSibling != null) {
//         nextSibling.classList.add("menu_active");
//     }
// }


// function onlick(i, event) {
//     let currentItem = event.target;
//     elemMenu = menuCollection[i];
//     event.preventDefault();
//     if (elemMenu == currentItem) {
//         let nextSibling = currentItem.nextElementSibling;
//         if (currentItem.nextElementSibling != null) {
//             nextSibling.classList.add("menu_active");
//             console.log(nextSibling);
//         }
//         console.log(currentItem, event.target, event.currentTarget);
//     }

// };

// menuCollection.addEventListener("click", onlick(1, onclick));



// function onClick() {
//     menuSub[0].className = 'menu menu_sub menu_active';

// };

//elemCollect[1].onclick = onClick;
// for (let i; i < elemCollect.length; i++) {
//     elemCollect.item(i).onclick = onClick;
//     console.log(elemCollect.item(i));
// }

// for (let menuItem of menuCollection) {
//     menuItem.onclick = function() {
//         menuSub.item(1).className = 'menu menu_sub menu_active';
//     }
//     console.log(menuItem[0]);
// };