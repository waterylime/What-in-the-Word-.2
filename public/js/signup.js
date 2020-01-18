$(document).ready(function() {
	var signUpForm = $('form.signup');
	var emailInput = $('input#email');
	var passwordInput = $('input#password');

	signUpForm.on('submit', function(event) {
		console.log('submit');
		event.preventDefault();
		var userData = {
			email: emailInput.val().trim(),
			password: passwordInput.val().trim()
		};

		if (!userData.email || !userData.password) {
			return;
		}

		signUpUser(userData.email, userData.password);
		emailInput.val('');
		passwordInput.val('');
	});
	function signUpUser(email, password) {
		$.post('/api/signup', {
			email: email,
			pass: password
		})
			.then(function(data) {
				console.log(data);
				window.location.replace('/index');
			})
			.catch(handleLoginErr);
	}
});
