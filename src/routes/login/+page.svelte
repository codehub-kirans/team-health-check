<h1>Login</h1>

<article class="grid">
	<div>
		<hgroup><h2>Enter Credentials</h2></hgroup>
		<form action="?/login" method="POST">
			<fieldset>
				<legend />
				<input
					type="text"
					name="username"
					placeholder="Login"
					aria-label="Login"
					minlength="4"
					required
				/>

				<input
					type="password"
					name="password"
					minlength="3"
					placeholder="Password"
					aria-label="Password"
					required
				/>
				<span id="message" />

				<!-- Setup SMTP Email server under Mail Settings and Application URL under Application in Pocketbase for this to function -->
				<a href="/reset-password">Forgot Password?</a>
			</fieldset>

			<button>Submit</button>
		</form>
	</div>
	<div style="background-image: url('hero-image.jpg');" />
</article>
