import classes from './Register.module.css';

const Register = () => {
	return (
		<section
			className={
				classes.section__register +
				' col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-12 d-flex flex-column justify-content-center align-items-center'
			}
		>
			<div className={classes.title + ' text-center'}>
				<h1>Register</h1>
				<p>Let's Sign up first for enter into Squarr Website. Uh She Up!</p>
			</div>
			<form className={classes.register__form}>
				<div className="d-flex justify-content-between align-items-center">
					<div className="mb-3">
						<input
							className={classes.firstname__input}
							type="text"
							name="firstname"
							id="firstname"
							required
							placeholder="Firstname"
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
						/>
					</div>
				</div>
				<div className="d-flex justify-content-between align-items-center">
					<div className="mb-3">
						<input
							className={classes.phone__input}
							type="text"
							name="phone"
							id="phone"
							required
							placeholder="Phone Number"
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
					/>
				</div>
				<div className="d-flex justify-content-between">
					<div className="mb-3">
						<input
							className={classes.password__input}
							type="password"
							name="password"
							id="password"
							required
							placeholder="Password"
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
					/>
				</div>
				<div className="d-flex align-items-center mb-3">
					<input className={classes.terms__input} type="checkbox" name="terms" id="terms" required />
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
