//Hämta input från form och visa den på sidan
let savedUser = localStorage.getItem('user');

const current = document.querySelector('#navbarDropdown');

 
current.innerText = savedUser;