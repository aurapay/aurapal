import Link from "next/link";

export default function LoginPage() {
	return (
		<article className="auth-card">
			<div className="auth-card__header">
				<div>
					<p className="eyebrow">Welcome back</p>
					<h2 className="section-title">Sign in to your account</h2>
					<p className="helper-text">
						Access your workspace, agents, and workflow dashboard.
					</p>
				</div>
			</div>
			<form className="form-stack">
				<div className="field">
					<label htmlFor="login-email">Work email</label>
					<input id="login-email" type="email" placeholder="you@company.com" />
				</div>
				<div className="field">
					<label htmlFor="login-password">Password</label>
					<input id="login-password" type="password" placeholder="Enter your password" />
				</div>
				<div className="form-actions">
					<button type="button" className="button button--primary">
						Sign in
					</button>
					<Link href="/reset-password" className="button button--ghost">
						Forgot password?
					</Link>
				</div>
			</form>
			<p className="auth-switch">
				Don't have an account? <Link href="/signup">Start your free trial</Link>
			</p>
		</article>
	);
}
