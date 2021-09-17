import { useState } from 'react';
import classes from './Login.module.css';

const Login = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const formSubmitHandler = (e) => {
		e.preventDefault();
		console.log({ email: email, password: password });
	};

	return (
		<section className={classes.login__section + ' col-md-6 offset-md-3 col-10 offset-1'}>
			<div className={classes.login__title}>
				<h1>Sign In</h1>
				<p>Just sign in if you have an account in here. Enjoy our Website.</p>
			</div>
			<div className={classes.login__form}>
				<form onSubmit={formSubmitHandler}>
					<div className="mb-3">
						<input
							type="text"
							className={classes.login__input}
							name="email"
							placeholder="Your email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<input
							type="password"
							className={classes.login__input + ' ' + classes.login__password}
							name="password"
							placeholder="Enter password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className="mb-3 d-flex justify-content-between px-2">
						<div className="d-flex justify-content-center align-items-center">
							<input className={'me-2'} type="checkbox" name="remember" id="remember" />
							<label htmlFor="remember">Remember Me</label>
						</div>
						<a href="/#">Forgot Password</a>
					</div>
					<button className={classes.login__submit}>Login</button>
				</form>
			</div>
			<div className={classes.account__exist}>
				<a href="/#">Already have an Square account? Login</a>
			</div>
		</section>
	);
};

export default Login;
