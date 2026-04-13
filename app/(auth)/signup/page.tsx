import Link from "next/link";

export default function SignupPage() {
	return (
		<article className="auth-card">
			<div className="auth-card__header">
				<div>
					<p className="eyebrow">Create account</p>
					<h2 className="section-title">Start a trial workspace</h2>
					<p className="helper-text">
						Create the account, create the workspace, and bring approvals under one roof.
					</p>
				</div>
				<span className="chip chip--blue">Trial path</span>
			</div>
			<form className="form-stack">
				<div className="field">
					<label htmlFor="signup-company">Company name</label>
					<input id="signup-company" type="text" placeholder="Acme Operations" />
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
					<label htmlFor="signup-role">Primary role</label>
					<select id="signup-role" defaultValue="">
						<option value="" disabled>
							Choose a role
						</option>
						<option value="operator">Operator</option>
						<option value="approver">Approver</option>
						<option value="admin">Admin</option>
					</select>
				</div>
				<div className="form-actions">
					<button type="button" className="button button--primary">
						Create workspace
					</button>
					<Link href="/login" className="button button--ghost">
						Sign in instead
					</Link>
				</div>
				<p className="helper-text">
					This screen defines the onboarding path even before the shared auth service is wired in.
				</p>
			</form>
		</article>
	);
}
