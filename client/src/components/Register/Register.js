import { useState } from 'react';
import classes from './Register.module.css';

const Register = () => {
	const [ firstname, setFirstname ] = useState('');
	const [ lastname, setLastname ] = useState('');
	const [ phone, setPhone ] = useState('');
	const [ country, setCountry ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ confirmPass, setConfirmPass ] = useState('');
	const [ about, setAbout ] = useState('');
	const [ agree, setAgree ] = useState('');

	const registerFormHandler = (e) => {
		e.preventDefault();
		const data = {
			name: firstname + ' ' + lastname,
			phone,
			country,
			email,
			password: password + ' === ' + confirmPass,
			about,
			agree
		};
		console.log(data);
	};

	return (
		<section
			className={
				classes.section__register +
				' col-md-6 offset-md-3 col-sm-10 offset-sm-1 col-10 offset-1 d-flex flex-column justify-content-center align-items-center '
			}
		>
			<div className={classes.title + ' text-center'}>
				<h1>Register</h1>
				<p>Let's Sign up first for enter into Squarr Website. Uh She Up!</p>
			</div>
			<form className={classes.register__form + ' col-10 offset-1'} onSubmit={registerFormHandler} noValidate>
				<div className="d-flex flex-md-row flex-column justify-content-between">
					<div className="mb-3">
						<input
							className={classes.firstname__input}
							type="text"
							name="firstname"
							id="firstname"
							required
							placeholder="Firstname"
							value={firstname}
							onChange={(e) => setFirstname(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<input
							className={classes.lastname__input}
							type="text"
							name="lastname"
							id="lastname"
							required
							placeholder="Lastname"
							value={lastname}
							onChange={(e) => setLastname(e.target.value)}
						/>
					</div>
				</div>
				<div className="d-flex flex-md-row flex-column justify-content-between ">
					<div className="mb-3">
						<input
							className={classes.phone__input}
							type="text"
							name="phone"
							id="phone"
							required
							placeholder="Phone Number"
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<input
							className={classes.country__input}
							type="text"
							name="country"
							id="country"
							required
							placeholder="Your Country"
							value={country}
							onChange={(e) => setCountry(e.target.value)}
						/>
					</div>
				</div>
				<div className="mb-3">
					<input
						className={classes.email__input}
						type="text"
						name="email"
						id="email"
						required
						placeholder="Email Address"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="d-flex flex-md-row flex-column justify-content-between ">
					<div className="mb-3">
						<input
							className={classes.password__input}
							type="password"
							name="password"
							id="password"
							required
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<input
							className={classes.password__input}
							type="password"
							name="confirm"
							id="confirm"
							required
							placeholder="Confirm Password"
							value={confirmPass}
							onChange={(e) => setConfirmPass(e.target.value)}
						/>
					</div>
				</div>
				<div className="d-flex mb-3">
					<textarea
						className={classes.about__input}
						name="about"
						id="about"
						cols="30"
						rows="3"
						required
						placeholder="Tell us about yourself"
						value={about}
						onChange={(e) => setAbout(e.target.value)}
					/>
				</div>
				<div className="d-flex align-items-center mb-3">
					<input
						className={classes.terms__input}
						type="checkbox"
						name="terms"
						id="terms"
						value={agree}
						onChange={(e) => setAgree(e.target.value)}
						required
					/>
					<label htmlFor="terms" className={classes.terms__label}>
						I agree to Suare's <a href="/#">Cookie</a>and <a href="/#">Privacy Policy</a>
					</label>
				</div>
				<div className="d-flex justify-content-between">
					<button className={classes.login__btn} type="button">
						Login
					</button>
					<button className={classes.submit__btn} type="submit">
						Get Started
					</button>
				</div>
			</form>
		</section>
	);
};

export default Register;
