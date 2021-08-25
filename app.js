const nameElement = document.getElementById('name');

const updateButton = document.getElementById('update-button');

const nameInput = document.getElementById('name-input');

updateButton.addEventListener('click', () => {
    nameElement.textContent = nameInput.value;


})

const select = document.getElementById('change-color');


const backing = document.getElementById('backing');


select.addEventListener('change', () => {
    const value = select.value;
    backing.style.background = value;



});