<script>
	function checkPasswordMatch() {
		const password = document.getElementById('password');
		const passwordConfirm = document.getElementById('passwordConfirm');
		const message = document.getElementById('message');

		if (password.value == passwordConfirm.value) {
			message.style.color = 'green';
			message.innerHTML = 'matching';
			passwordConfirm.setAttribute('aria-invalid', 'false');
		} else {
			message.style.color = 'red';
			message.innerHTML = 'not matching';
			passwordConfirm.setAttribute('aria-invalid', 'true');
		}
	}
</script>

<h1>Register</h1>

<form action="?/register" method="POST">
	<fieldset>
		<legend>Enter Credentials</legend>
		<label for="username">Username</label>
		<input id="username" type="text" placeholder="john" name="username" minlength="4" required />

		<label for="email">Email</label>
		<input
			id="email"
			type="email"
			placeholder="johndoe@domain.com"
			name="email"
			minlength="7"
			required
		/>

		<label for="team">Team Name</label>
		<input id="team" type="text" placeholder="team name" name="team" minlength="3" required />

		<label for="password">Password</label>
		<input
			id="password"
			type="password"
			name="password"
			minlength="3"
			placeholder="new password"
			required
		/>
		<label for="passwordConfirm">Verify Password</label>
		<input
			id="passwordConfirm"
			type="password"
			name="passwordConfirm"
			minlength="3"
			placeholder="confirm password"
			required
			on:keyup={checkPasswordMatch}
		/>
		<span id="message" />
	</fieldset>

	<button>Submit</button>
</form>
