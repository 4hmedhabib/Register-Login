const Login = () => {
	return (
		<section className="login__section">
			<div className="login__title">
				<h1>Sign In</h1>
				<p>Just sign in if you have an account in here. Enjoy our Website.</p>
			</div>
			<div className="login__form">
				<form>
					<div className="mb-3">
						<input type="text" className="login__email" name="email" placeholder="Your email" />
					</div>
					<div className="mb-3">
						<input
							type="password"
							className="login__password"
							name="password"
							placeholder="Enter password"
						/>
					</div>
					<div className="mb-3">
						<div>
							<input type="checkbox" name="remember" id="remember" />
							<label htmlFor="remember">Remember Me</label>
						</div>
						<a href="/#">Forgot Password</a>
					</div>
					<div className="login__submit">Login</div>
				</form>
			</div>
			<div>
				<a href="/#">Already have an Square account? Login</a>
			</div>
		</section>
	);
};

export default Login;
