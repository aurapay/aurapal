import Link from "next/link";

export default function ResetPasswordPage() {
	return (
		<article className="auth-card">
			<div className="auth-card__header">
				<div>
					<p className="eyebrow">Account recovery</p>
					<h2 className="section-title">Reset your password</h2>
					<p className="helper-text">
						Enter your work email and we'll send you a link to reset your password.
					</p>
				</div>
			</div>
			<form className="form-stack">
				<div className="field">
					<label htmlFor="reset-email">Work email</label>
					<input id="reset-email" type="email" placeholder="you@company.com" />
				</div>
				<div className="form-actions">
					<button type="button" className="button button--primary">
						Send reset link
					</button>
					<Link href="/login" className="button button--ghost">
						Back to sign in
					</Link>
				</div>
			</form>
		</article>
	);
}
