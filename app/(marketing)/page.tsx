import Link from "next/link";
import {
	agents,
	heroMetrics,
	howItWorks,
	integrationPartners,
	logoNames,
	publicNavLinks,
	trustSignals,
	useCases,
} from "@/lib/site-data";

export default function MarketingPage() {
	return (
		<>
			{/* Dark Hero */}
			<div className="hero-block">
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

					<div className="hero">
						<p className="hero-eyebrow">
							<span className="hero-eyebrow__dot" />
							Now available for finance, HR, and operations teams
						</p>
						<h1 className="headline">AI agents that do the work your team keeps putting off.</h1>
						<p className="lede">
							MyAuraPal deploys purpose-built AI agents for invoicing, HR onboarding, recruiting,
							scheduling, and expense management. They read documents, extract data, enforce
							policies, and route approvals — so your team stops doing it manually.
						</p>
						<div className="cta-row">
							<Link href="/signup" className="button button--primary button--lg">
								Start free trial
							</Link>
							<Link href="/book-demo" className="button button--ghost button--lg">
								Book a demo
							</Link>
						</div>
						<div className="metrics-row">
							{heroMetrics.map((metric) => (
								<div key={metric.label} className="metric">
									<span className="metric-value">{metric.value}</span>
									<span className="metric-label">{metric.label}</span>
									<p className="metric-detail">{metric.detail}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Logo Bar */}
			<div className="shell">
				<p className="logo-bar-label">Trusted by teams at</p>
				<div className="logo-bar">
					{logoNames.map((name) => (
						<span key={name} className="logo-bar__item">
							{name}
						</span>
					))}
				</div>
			</div>

			{/* AI Agents */}
			<div className="shell">
				<section className="section" id="agents">
					<div className="section-heading section-heading--center">
						<p className="eyebrow">AI Agents</p>
						<h2 className="section-title">
							Six agents. Dozens of workflows. Zero manual data entry.
						</h2>
						<p className="section-copy">
							Each agent is purpose-built for a specific domain — trained on your policies,
							connected to your tools, and supervised by your team. They don't guess. They execute.
						</p>
					</div>
					<div className="agent-grid">
						{agents.map((agent) => (
							<article key={agent.title} className="agent-card">
								<div className="agent-card__icon">{agent.icon.slice(0, 2).toUpperCase()}</div>
								<h3 className="agent-card__title">{agent.title}</h3>
								<p className="agent-card__copy">{agent.copy}</p>
								<span className="agent-card__stat">{agent.stat}</span>
							</article>
						))}
					</div>
					<div className="section-cta">
						<Link href="/solutions" className="button button--secondary">
							See all solutions
						</Link>
					</div>
				</section>
			</div>

			{/* How it Works */}
			<div className="shell">
				<section className="section" id="how-it-works">
					<div className="section-heading section-heading--center">
						<p className="eyebrow">How it works</p>
						<h2 className="section-title">Live in 4 steps. No engineering required.</h2>
						<p className="section-copy">
							Connect your tools, define your rules in plain English, and let agents handle the
							operational load. You stay in control of every decision.
						</p>
					</div>
					<div className="steps-grid">
						{howItWorks.map((step) => (
							<article key={step.step} className="step-card">
								<div className="step-card__number">{step.step}</div>
								<h3 className="step-card__title">{step.title}</h3>
								<p className="step-card__copy">{step.copy}</p>
							</article>
						))}
					</div>
				</section>
			</div>

			{/* Integrations */}
			<div className="shell">
				<section className="section">
					<div className="section-heading section-heading--center">
						<p className="eyebrow">Integrations</p>
						<h2 className="section-title">Connects to the tools your team already uses.</h2>
						<p className="section-copy">
							30+ integrations across email, finance, HR, recruiting, project management, and more.
							Agents pull data in and push actions out — no middleware required.
						</p>
					</div>
					<div className="integration-grid">
						{integrationPartners.slice(0, 15).map((partner) => (
							<div key={partner.name} className="integration-chip">
								<span className="integration-chip__name">{partner.name}</span>
								<span className="integration-chip__category">{partner.category}</span>
							</div>
						))}
						<div className="integration-chip integration-chip--more">
							<span className="integration-chip__name">
								+{integrationPartners.length - 15} more
							</span>
							<span className="integration-chip__category">Coming soon</span>
						</div>
					</div>
				</section>
			</div>

			{/* Use Cases */}
			<div className="shell">
				<section className="section">
					<div className="section-heading section-heading--center">
						<p className="eyebrow">Use cases</p>
						<h2 className="section-title">Built for the teams that keep your company running.</h2>
						<p className="section-copy">
							Finance, people ops, and executive teams save thousands of hours per year with agents
							that handle their most repetitive workflows.
						</p>
					</div>
					<div className="usecase-grid">
						{useCases.map((useCase) => (
							<article key={useCase.title} className="usecase-card">
								<h3 className="usecase-card__title">{useCase.title}</h3>
								<p className="usecase-card__copy">{useCase.copy}</p>
								<div className="usecase-card__stats">
									{useCase.stats.map((stat) => (
										<div key={stat.label}>
											<span className="usecase-stat__value">{stat.value}</span>
											<span className="usecase-stat__label">{stat.label}</span>
										</div>
									))}
								</div>
							</article>
						))}
					</div>
					<div className="section-cta">
						<Link href="/solutions" className="button button--secondary">
							Explore all solutions
						</Link>
					</div>
				</section>
			</div>

			{/* Trust */}
			<div className="shell">
				<section className="section">
					<div className="section-heading section-heading--center">
						<p className="eyebrow">Security & compliance</p>
						<h2 className="section-title">Enterprise-grade trust, built into every agent.</h2>
						<p className="section-copy">
							SOC 2 Type II certified. Every agent action is logged, every decision is auditable,
							and sensitive actions always require human approval.
						</p>
					</div>
					<div className="trust-grid">
						{trustSignals.map((signal) => (
							<article key={signal.title} className="trust-card">
								<h3 className="trust-card__title">{signal.title}</h3>
								<p className="trust-card__copy">{signal.copy}</p>
							</article>
						))}
					</div>
					<div className="section-cta">
						<Link href="/security" className="button button--secondary">
							Learn about our security
						</Link>
					</div>
				</section>
			</div>

			{/* Bottom CTA */}
			<div className="shell">
				<div className="cta-band">
					<p className="cta-band__eyebrow">Ready to automate?</p>
					<h2 className="section-title">Stop burning hours on work that agents can handle.</h2>
					<p className="section-copy">
						Join the teams already saving 85% of their manual operational time. Start your free
						14-day trial — no credit card required.
					</p>
					<div className="cta-row">
						<Link href="/signup" className="button button--primary button--lg">
							Start free trial
						</Link>
						<Link href="/book-demo" className="button button--ghost button--lg">
							Book a demo
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
