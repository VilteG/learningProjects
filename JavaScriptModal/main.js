let modal = document.getElementById('simpleModal');

let modalBtn = document.getElementById('modalBtn');

let closeBtn = document.getElementsByClassName('closeBtn')[0]; // only returs the first one

// Listen for a click

modalBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

// outside cick

window.addEventListener('click', clickOutside);

function openModal() {
    modal.style.display='block';
}

function closeModal() {
    modal.style.display='none';
}

function clickOutside(e) {
    if(e.target==modal){
    modal.style.display='none';
    }
}