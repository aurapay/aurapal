import Link from "next/link";
import { publicNavLinks } from "@/lib/site-data";

export default function BookDemoPage() {
	return (
		<>
			<div className="shell">
				<header className="topbar">
					<Link href="/" className="site-brand" aria-label="MyAuraPal home">
						<span className="brand-mark">MP</span>
						<span>MyAuraPal</span>
					</Link>
					<nav className="nav" aria-label="Primary">
						{publicNavLinks.map((link) => (
							<Link key={link.href} href={link.href} className="nav-link">
								{link.label}
							</Link>
						))}
					</nav>
					<div className="nav-actions">
						<Link href="/login" className="button button--ghost">
							Sign in
						</Link>
						<Link href="/signup" className="button button--primary">
							Start free trial
						</Link>
					</div>
				</header>
			</div>

			<div className="shell">
				<section className="section demo-layout">
					<div className="demo-copy">
						<p className="eyebrow">Book a demo</p>
						<h1 className="section-title" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}>
							See how AI agents can automate your team's busywork.
						</h1>
						<p className="section-copy">
							In 30 minutes, we'll show you how MyAuraPal agents handle invoicing, onboarding,
							scheduling, and more — tailored to your team's workflows.
						</p>
						<ul className="demo-checklist">
							<li>Live walkthrough of agents relevant to your team</li>
							<li>See real workflows: invoice processing, HR onboarding, scheduling</li>
							<li>Custom ROI estimate based on your team size and volume</li>
							<li>Q&A on security, compliance, and integrations</li>
						</ul>
						<div className="demo-social-proof">
							<div className="demo-stat">
								<span className="demo-stat__value">85%</span>
								<span className="demo-stat__label">less manual work after deployment</span>
							</div>
							<div className="demo-stat">
								<span className="demo-stat__value">15 min</span>
								<span className="demo-stat__label">average time to go live</span>
							</div>
						</div>
					</div>
					<div className="form-card">
						<div className="panel-header">
							<div>
								<p className="eyebrow">Request a demo</p>
								<h2 className="panel-title">Tell us about your team</h2>
							</div>
						</div>
						<form className="form-stack">
							<div className="form-row">
								<div className="field">
									<label htmlFor="demo-first">First name</label>
									<input id="demo-first" type="text" placeholder="Jordan" />
								</div>
								<div className="field">
									<label htmlFor="demo-last">Last name</label>
									<input id="demo-last" type="text" placeholder="Lee" />
								</div>
							</div>
							<div className="field">
								<label htmlFor="demo-email">Work email</label>
								<input id="demo-email" type="email" placeholder="jordan@company.com" />
							</div>
							<div className="field">
								<label htmlFor="demo-company">Company name</label>
								<input id="demo-company" type="text" placeholder="Acme Corp" />
							</div>
							<div className="form-row">
								<div className="field">
									<label htmlFor="demo-team">Team size</label>
									<select id="demo-team" defaultValue="">
										<option value="" disabled>
											Choose a range
										</option>
										<option value="1-20">1 – 20</option>
										<option value="21-100">21 – 100</option>
										<option value="101-500">101 – 500</option>
										<option value="500+">500+</option>
									</select>
								</div>
								<div className="field">
									<label htmlFor="demo-department">Department</label>
									<select id="demo-department" defaultValue="">
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
							<div className="field">
								<label htmlFor="demo-use-case">What workflows do you want to automate?</label>
								<textarea
									id="demo-use-case"
									placeholder="E.g., invoice processing, employee onboarding, meeting scheduling, expense management..."
								/>
							</div>
							<button type="button" className="button button--primary button--lg">
								Request demo
							</button>
							<p className="helper-text">
								We'll respond within one business day with available times.
							</p>
						</form>
					</div>
				</section>
			</div>
		</>
	);
}
