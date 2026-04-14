import Link from "next/link";
import { publicNavLinks } from "@/lib/site-data";

const shellClass = "mx-auto max-w-[1200px] px-4 sm:px-6";
const sectionCopyClass = "mt-3 text-base leading-6 text-text-secondary";
const sectionButtonPrimaryClass =
	"inline-flex min-h-10 items-center justify-center rounded-xs border border-transparent bg-accent px-5 py-2.5 text-sm font-bold text-white transition duration-150 hover:-translate-y-px hover:bg-accent-hover hover:shadow-md focus-visible:outline-none";
const sectionButtonGhostClass =
	"inline-flex min-h-10 items-center justify-center rounded-xs border border-border bg-transparent px-5 py-2.5 text-sm font-bold text-text transition duration-150 hover:-translate-y-px hover:bg-black/5 hover:shadow-md focus-visible:outline-none";

export default function BookDemoPage() {
	return (
		<main className="pb-20">
			<div className={shellClass}>
				<header className="flex flex-col gap-3 border-b border-border py-4 lg:flex-row lg:items-center lg:justify-between">
					<Link
						href="/"
						className="inline-flex items-center gap-3 font-display text-[1.05rem] font-bold tracking-[-0.03em]"
						aria-label="MyAuraPal home"
					>
						<span className="flex h-8 w-8 items-center justify-center rounded-xs bg-accent text-[0.7rem] font-extrabold text-white">
							MP
						</span>
						<span>MyAuraPal</span>
					</Link>
					<nav
						className="flex flex-wrap items-center gap-2 rounded-full border border-border bg-white/60 p-1"
						aria-label="Primary"
					>
						{publicNavLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="rounded-full px-3.5 py-1.5 text-sm font-semibold text-text-secondary transition-colors hover:bg-black/5 hover:text-text"
							>
								{link.label}
							</Link>
						))}
					</nav>
					<div className="flex flex-wrap items-center gap-3">
						<Link href="/login" className={sectionButtonGhostClass}>
							Sign in
						</Link>
						<Link href="/signup" className={sectionButtonPrimaryClass}>
							Start free trial
						</Link>
					</div>
				</header>
			</div>

			<div className={shellClass}>
				<section className={`grid gap-12 pt-20 lg:grid-cols-[1fr_0.95fr]`}>
					<div>
						<p className="mb-2 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-accent">
							Book a demo
						</p>
						<h1 className="font-display text-[clamp(2.2rem,4vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.035em]">
							See how agents cut busywork.
						</h1>
						<p className={sectionCopyClass}>
							In 30 minutes, we’ll show the fastest workflows to automate.
						</p>
						<ul className="mt-6 grid gap-3">
							<li className="relative pl-5 text-sm leading-6 text-text-secondary before:absolute before:left-0 before:top-0 before:font-extrabold before:text-accent before:content-['✓']">
								Walk through the agents that fit your team
							</li>
							<li className="relative pl-5 text-sm leading-6 text-text-secondary before:absolute before:left-0 before:top-0 before:font-extrabold before:text-accent before:content-['✓']">
								See one or two workflows in action
							</li>
							<li className="relative pl-5 text-sm leading-6 text-text-secondary before:absolute before:left-0 before:top-0 before:font-extrabold before:text-accent before:content-['✓']">
								Get a rough ROI estimate
							</li>
							<li className="relative pl-5 text-sm leading-6 text-text-secondary before:absolute before:left-0 before:top-0 before:font-extrabold before:text-accent before:content-['✓']">
								Ask about security and integrations
							</li>
						</ul>
						<div className="mt-8 flex gap-6 border-t border-border pt-6">
							<div>
								<span className="block font-display text-[2rem] font-extrabold tracking-[-0.04em] text-accent">
									85%
								</span>
								<span className="block text-sm font-semibold text-text-secondary">
									less manual work
								</span>
							</div>
							<div>
								<span className="block font-display text-[2rem] font-extrabold tracking-[-0.04em] text-accent">
									15 min
								</span>
								<span className="block text-sm font-semibold text-text-secondary">to go live</span>
							</div>
						</div>
					</div>
					<div className="rounded-lg border border-border bg-surface p-6 shadow-md sm:p-8">
						<div className="mb-6">
							<p className="mb-2 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-accent">
								Request a demo
							</p>
							<h2 className="font-display text-2xl font-extrabold tracking-[-0.03em]">
								Tell us about your workflows
							</h2>
						</div>
						<form className="space-y-4">
							<div className="grid gap-4 sm:grid-cols-2">
								<div className="grid gap-2">
									<label htmlFor="demo-first" className="text-sm font-bold text-text">
										First name
									</label>
									<input
										id="demo-first"
										type="text"
										placeholder="Jordan"
										className="min-h-11 rounded-xs border border-border bg-surface px-4 py-3 text-text placeholder:text-text-secondary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
									/>
								</div>
								<div className="grid gap-2">
									<label htmlFor="demo-last" className="text-sm font-bold text-text">
										Last name
									</label>
									<input
										id="demo-last"
										type="text"
										placeholder="Lee"
										className="min-h-11 rounded-xs border border-border bg-surface px-4 py-3 text-text placeholder:text-text-secondary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
									/>
								</div>
							</div>
							<div className="grid gap-2">
								<label htmlFor="demo-email" className="text-sm font-bold text-text">
									Work email
								</label>
								<input
									id="demo-email"
									type="email"
									placeholder="jordan@company.com"
									className="min-h-11 rounded-xs border border-border bg-surface px-4 py-3 text-text placeholder:text-text-secondary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
								/>
							</div>
							<div className="grid gap-2">
								<label htmlFor="demo-company" className="text-sm font-bold text-text">
									Company name
								</label>
								<input
									id="demo-company"
									type="text"
									placeholder="Acme Corp"
									className="min-h-11 rounded-xs border border-border bg-surface px-4 py-3 text-text placeholder:text-text-secondary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
								/>
							</div>
							<div className="grid gap-4 sm:grid-cols-2">
								<div className="grid gap-2">
									<label htmlFor="demo-team" className="text-sm font-bold text-text">
										Team size
									</label>
									<select
										id="demo-team"
										defaultValue=""
										className="min-h-11 rounded-xs border border-border bg-surface px-4 py-3 text-text focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
									>
										<option value="" disabled>
											Choose a range
										</option>
										<option value="1-20">1 – 20</option>
										<option value="21-100">21 – 100</option>
										<option value="101-500">101 – 500</option>
										<option value="500+">500+</option>
									</select>
								</div>
								<div className="grid gap-2">
									<label htmlFor="demo-department" className="text-sm font-bold text-text">
										Department
									</label>
									<select
										id="demo-department"
										defaultValue=""
										className="min-h-11 rounded-xs border border-border bg-surface px-4 py-3 text-text focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
									>
										<option value="" disabled>
											Choose a department
										</option>
										<option value="finance">Finance / Accounting</option>
										<option value="hr">People / HR</option>
										<option value="ops">Operations</option>
										<option value="it">IT / Procurement</option>
										<option value="executive">Executive team</option>
										<option value="other">Other</option>
									</select>
								</div>
							</div>
							<div className="grid gap-2">
								<label htmlFor="demo-use-case" className="text-sm font-bold text-text">
									What should we automate?
								</label>
								<textarea
									id="demo-use-case"
									placeholder="E.g., invoices, onboarding, scheduling, expenses..."
									className="min-h-24 rounded-xs border border-border bg-surface px-4 py-3 text-text placeholder:text-text-secondary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
								/>
							</div>
							<button
								type="button"
								className="inline-flex min-h-12 items-center justify-center rounded-sm border border-transparent bg-accent px-8 py-3.5 text-base font-bold text-white transition hover:bg-accent-hover hover:shadow-md focus-visible:outline-none"
							>
								Request demo
							</button>
							<p className="text-sm leading-6 text-text-secondary">
								We’ll respond within one business day.
							</p>
						</form>
					</div>
				</section>
			</div>
		</main>
	);
}
