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
							placeholder="Firstname"
						/>
					</div>
					<div className="mb-3">
						<input
							className={classes.lastname__input}
							type="text"
							name="lastname"
							id="lastname"
							placeholder="Lastname"
						/>
					</div>
				</div>
				<div className="d-flex justify-content-lg-between align-items-center">
					<div className="mb-3">
						<input
							className={classes.phone__input}
							type="text"
							name="phone"
							id="phone"
							placeholder="Phone Number"
						/>
					</div>
					<div className="mb-3">
						<input
							className={classes.country__input}
							type="text"
							name="country"
							id="country"
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
						placeholder="Email Address"
					/>
				</div>
				<div className="d-flex justify-content-between align-items-center">
					<div className="mb-3">
						<input
							className={classes.password__input}
							type="password"
							name="password"
							id="password"
							placeholder="Password"
						/>
					</div>
					<div className="mb-3">
						<input
							className={classes.password__input}
							type="password"
							name="confirm"
							id="confirm"
							placeholder="Confirm Password"
						/>
					</div>
				</div>
				<div className="d-flex">
					<textarea
						className={classes.terms__input}
						name="terms"
						id="terms"
						cols="30"
						rows="3"
						placeholder="Tell us about yourself"
					/>
				</div>
			</form>
		</section>
	);
};

export default Register;
