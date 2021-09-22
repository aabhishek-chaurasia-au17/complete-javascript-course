'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal')


const openModel = function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden')
    }

for(let i = 0; i < btnOpenModal.length; i++)
    btnOpenModal[i].addEventListener('click', openModel);


let CloseModal = function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}


btnCloseModal.addEventListener('click', CloseModal)

overlay.addEventListener('click', CloseModal)

document.addEventListener('keydown', function (e) {
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        CloseModal()
    }
})