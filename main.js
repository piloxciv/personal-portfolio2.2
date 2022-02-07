const http = require('http')

function updateList() {
	const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
		return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
	});

	document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));
	
	document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected-circle");
}

updateList();
window.addEventListener('scroll', () => {
    updateList();
})

const $form = document.querySelector('#form')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
	event.preventDefault()
	const form = new FormData(this)
	const validator = validate(this);
	const response = await fetch(this.action, {
		method: this.method,
		body: form,
		headers: {
			'Accept': 'application/json'
		}
	})
	if (response.ok) {
		this.reset()
		alert('Thank you, I will reply as soon as posible.')
	}
	} 

	function validate() {
		var name, email, message, expresion
	
		name = document.getElementById("name").value;
		email = document.getElementById("email").value;
		message = document.getElementById("message").value;

		expresion = /\w+@\w+\.+[a-z]/;
	
		if (name === "" || name === null){
			alert("'Name' cannot be empty");
			return false;
		}
		else if (email === ""|| email === null){
			alert("'Email' cannot be empty");
			return false;
		}
		else if (message === "") {
			alert("'Message' cannot be empty");
			return false;
		}
		else if (name.length>30){
			alert("Name is too long");
			return false; 
		}
		else if (message.length>120){
			alert("Message is too long");
			return false; 
		}
		else if (!expresion.test(email)){
			alert("Email not valid");
			return false;
		}
	}

	// Create a server object:
const server = http.createServer(function (req, res) {
  
  
    // End the response 
    res.end()
})
  