import Link from "next/link";

export default function SignupPage() {
	return (
		<article className="w-full max-w-[32rem] rounded-xl border border-border bg-surface p-6 shadow-md sm:p-8">
			<div className="mb-6 flex items-start justify-between gap-4">
				<div>
					<p className="mb-2 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-accent">
						Get started
					</p>
					<h2 className="font-display text-2xl font-extrabold tracking-[-0.03em]">
						Start your free 14-day trial
					</h2>
					<p className="mt-3 text-sm leading-6 text-text-secondary">
						Set up your workspace and deploy your first AI agent in minutes. No credit card
						required.
					</p>
				</div>
			</div>
			<form className="space-y-4">
				<div className="grid gap-2">
					<label htmlFor="signup-company" className="text-sm font-bold text-text">
						Company name
					</label>
					<input
						id="signup-company"
						type="text"
						placeholder="Acme Corp"
						className="min-h-11 rounded-xs border border-border bg-surface px-4 py-3 text-text placeholder:text-text-secondary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
					/>
				</div>
				<div className="grid gap-2">
					<label htmlFor="signup-email" className="text-sm font-bold text-text">
						Work email
					</label>
					<input
						id="signup-email"
						type="email"
						placeholder="you@company.com"
						className="min-h-11 rounded-xs border border-border bg-surface px-4 py-3 text-text placeholder:text-text-secondary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
					/>
				</div>
				<div className="grid gap-2">
					<label htmlFor="signup-password" className="text-sm font-bold text-text">
						Password
					</label>
					<input
						id="signup-password"
						type="password"
						placeholder="Create a password"
						className="min-h-11 rounded-xs border border-border bg-surface px-4 py-3 text-text placeholder:text-text-secondary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
					/>
				</div>
				<div className="grid gap-2">
					<label htmlFor="signup-department" className="text-sm font-bold text-text">
						Your department
					</label>
					<select
						id="signup-department"
						defaultValue=""
						className="min-h-11 rounded-xs border border-border bg-surface px-4 py-3 text-text focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
					>
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
				<button
					type="button"
					className="inline-flex min-h-11 items-center justify-center rounded-xs border border-transparent bg-accent px-5 py-3 text-sm font-bold text-white transition hover:bg-accent-hover"
				>
					Create workspace
				</button>
			</form>
			<p className="mt-4 text-center text-sm text-text-secondary">
				Already have an account?{" "}
				<Link href="/login" className="font-bold text-accent hover:underline">
					Sign in
				</Link>
			</p>
		</article>
	);
}
