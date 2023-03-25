<form action="?/login" method="POST">
	<fieldset>
		<legend>Enter Credentials</legend>
		<label for="username">Username</label>
		<input id="username" type="text" placeholder="john" name="username" minlength="4" required />

		<label for="password">Password</label>
		<input
			id="password"
			type="password"
			name="password"
			minlength="3"
			placeholder="new password"
			required
		/>
		<span id="message" />
	</fieldset>

	<button>Submit</button>
</form>
