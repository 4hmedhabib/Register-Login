import { useState } from 'react';
import classes from './Login.module.css';
import Axios from 'axios';
import { useInput } from '../../hooks';

const Login = () => {
	const {
		value: enteredEmail,
		inputChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: emailReset
	} = useInput();

	const {
		value: enteredPassword,
		inputChangeHandler: passwordChangeHandler,
		inputBlurHandler: passwordBlurHandler,
		reset: passwordReset
	} = useInput();

	const { isRemember: enteredRemember, rememberHandler: rememberChangeHandler } = useInput();

	console.log(enteredRemember);

	const formSubmitHandler = (e) => {
		e.preventDefault();
		// const data = {
		// 	email,
		// 	password
		// };
		// Axios.post('http://localhost:3001/api/v1/login', data)
		// 	.then((response) => {
		// 		console.log(response.data);
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 	});
		console.log({
			email: enteredEmail,
			password: enteredPassword,
			remamber: enteredRemember
		});
		emailReset();
		passwordReset();
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
							value={enteredEmail}
							onChange={emailChangeHandler}
							onBlur={emailBlurHandler}
						/>
					</div>
					<div className="mb-3">
						<input
							type="password"
							className={classes.login__input + ' ' + classes.login__password}
							name="password"
							placeholder="Enter password"
							value={enteredPassword}
							onChange={passwordChangeHandler}
							onBlur={passwordBlurHandler}
						/>
					</div>
					<div className="mb-3 d-flex justify-content-between px-2">
						<div className="d-flex justify-content-center align-items-center">
							<input
								className={'me-2'}
								type="checkbox"
								name="remember"
								id="remember"
								value={enteredRemember}
								onChange={rememberChangeHandler}
							/>
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
