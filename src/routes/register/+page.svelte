<script>
	function checkPasswordMatch() {
		if (
			document.getElementById('password').value == document.getElementById('passwordConfirm').value
		) {
			document.getElementById('message').style.color = 'green';
			document.getElementById('message').innerHTML = 'matching';
		} else {
			document.getElementById('message').style.color = 'red';
			document.getElementById('message').innerHTML = 'not matching';
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
			on:keyup={checkPasswordMatch}
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
