const modal = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');

function showModal() {
    modal.className = 'modal modal_active';
};

window.onload = showModal;

function onClick() {
    modal.className = 'modal';
    modalSuccess.className = 'modal';
};

const modalClose = document.getElementsByClassName('modal__close');
const arrModalClose = Array.from(modalClose);

arrModalClose[0].onclick = onClick;

const showSucsess = document.getElementsByClassName('show-success');
const modalSucs = document.getElementById('modal_success');

const arrSucsess = Array.from(showSucsess);

arrSucsess[0].onclick = function() {
    modalSucs.className = 'modal modal_active';
    modal.className = 'modal';
};

arrModalClose[2].onclick = onClick;

// for (let i; i < arrModalClose.length; i++) {
//     arrModalClose[i].onclick = onClick;
//     if (i == 1) {
//         break;
//     };
// };

// const Close = modalClose.item(0);
// Close.onclick = onClick;