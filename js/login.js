let input = document.querySelector('.login-input');
let button= document.querySelector('.login-button');

const habilitaButton = ({target}) =>{
	if(target.value.length > 3){
		button.removeAttribute('disabled');
		return;
	}
		button.setAttribute('disabled','');
}
input.addEventListener('input', habilitaButton);

let form = document.querySelector('.login-form');
const paginaHome = ({env}) => {
	event.preventDefault();
	window.location = 'home.php';
}
form.addEventListener('submit', paginaHome);

