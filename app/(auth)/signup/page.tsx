import Link from "next/link";

export default function SignupPage() {
	return (
		<article className="auth-card">
			<div className="auth-card__header">
				<div>
					<p className="eyebrow">Get started</p>
					<h2 className="section-title">Start your free 14-day trial</h2>
					<p className="helper-text">
						Set up your workspace and deploy your first AI agent in minutes. No credit card
						required.
					</p>
				</div>
			</div>
			<form className="form-stack">
				<div className="field">
					<label htmlFor="signup-company">Company name</label>
					<input id="signup-company" type="text" placeholder="Acme Corp" />
				</div>
				<div className="field">
					<label htmlFor="signup-email">Work email</label>
					<input id="signup-email" type="email" placeholder="you@company.com" />
				</div>
				<div className="field">
					<label htmlFor="signup-password">Password</label>
					<input id="signup-password" type="password" placeholder="Create a password" />
				</div>
				<div className="field">
					<label htmlFor="signup-department">Your department</label>
					<select id="signup-department" defaultValue="">
						<option value="" disabled>
							Choose your department
						</option>
						<option value="finance">Finance / Accounting</option>
						<option value="hr">People / HR</option>
						<option value="ops">Operations</option>
						<option value="it">IT / Procurement</option>
						<option value="executive">Executive team</option>
						<option value="other">Other</option>
					</select>
				</div>
				<button type="button" className="button button--primary">
					Create workspace
				</button>
			</form>
			<p className="auth-switch">
				Already have an account? <Link href="/login">Sign in</Link>
			</p>
		</article>
	);
}
