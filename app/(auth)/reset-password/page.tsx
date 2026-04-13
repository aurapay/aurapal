import Link from "next/link";

export default function ResetPasswordPage() {
	return (
		<article className="w-full max-w-[32rem] rounded-xl border border-border bg-surface p-6 shadow-md sm:p-8">
			<div className="mb-6 flex items-start justify-between gap-4">
				<div>
					<p className="mb-2 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-accent">
						Account recovery
					</p>
					<h2 className="font-display text-2xl font-extrabold tracking-[-0.03em]">
						Reset your password
					</h2>
					<p className="mt-3 text-sm leading-6 text-text-secondary">
						Enter your work email and we'll send you a link to reset your password.
					</p>
				</div>
			</div>
			<form className="space-y-4">
				<div className="grid gap-2">
					<label htmlFor="reset-email" className="text-sm font-bold text-text">
						Work email
					</label>
					<input
						id="reset-email"
						type="email"
						placeholder="you@company.com"
						className="min-h-11 rounded-xs border border-border bg-surface px-4 py-3 text-text placeholder:text-text-secondary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
					/>
				</div>
				<div className="flex flex-col gap-3 sm:flex-row">
					<button
						type="button"
						className="inline-flex min-h-11 items-center justify-center rounded-xs border border-transparent bg-accent px-5 py-3 text-sm font-bold text-white transition hover:bg-accent-hover"
					>
						Send reset link
					</button>
					<Link
						href="/login"
						className="inline-flex min-h-11 items-center justify-center rounded-xs border border-border px-5 py-3 text-sm font-bold text-text transition hover:bg-black/5"
					>
						Back to sign in
					</Link>
				</div>
			</form>
		</article>
	);
}
