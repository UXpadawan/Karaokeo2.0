// username form //
const form = document.querySelector('form');
const feedback = document.querySelector('.feedback');
//regex krav spec
const usernamePattern = /^[a-zA-Z0-9]{3,12}$/;
const username = document.querySelector('#uname');

//regex kontroll för att kontrollera så att användarnamnet uppfyller krav

form.uname.addEventListener('keyup', e => {
    
    if(usernamePattern.test(e.target.value)){
        username.setAttribute('class', 'success');
    } else {
        username.setAttribute('class', 'error')}
})


form.addEventListener('submit', e => {
    e.preventDefault();
//Spara användarnamnet i localstorage för att kuna kalla på den senare på andra sidor.
    if(usernamePattern.test(form.uname.value)){
        localStorage.setItem('user', form.uname.value );
        //efter submit är klar och godkänt så skickas man vidare.
        location.replace('privacy.html')
        //felmeddelande ifall man inte fyllt i användarnamn enligt krav.
    } else {
        alert('Username must be letters or numbers & 3-12 characters long');
    }
    
});