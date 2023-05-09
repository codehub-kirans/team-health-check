<script>
	export let data;
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

				<select name="team" role="button" class="secondary" required>
					<option value="" disabled selected>Select Team</option>
					{#each data.records as record}
						<option value={record.team}>{record.team}</option>
					{/each}
				</select>

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
	<div style="background-image: url('register-image.jpg');" />
</article>
