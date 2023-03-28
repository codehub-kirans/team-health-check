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

<article class="grid">
	<div>
		<hgroup><h2>Register Credentials</h2></hgroup>
		<form action="?/register" method="POST">
			<fieldset>
				<legend />
				<input
					type="text"
					name="username"
					placeholder="Username"
					aria-label="Username"
					minlength="4"
					required
				/>

				<input
					type="email"
					name="email"
					placeholder="Email Address"
					aria-label="Email Address"
					minlength="7"
					required
				/>

				<input
					type="text"
					name="team"
					placeholder="Team Name"
					aria-label="Team Name"
					minlength="3"
					required
				/>

				<input
					name="password"
					type="password"
					minlength="3"
					placeholder="New Password"
					aria-label="New Password"
					required
				/>

				<input
					name="passwordConfirm"
					type="password"
					minlength="3"
					placeholder="Confirm Password"
					aria-label="Confirm Password"
					required
					on:keyup={checkPasswordMatch}
				/>
				<span id="message" />
			</fieldset>

			<button>Submit</button>
		</form>
	</div>
</article>
