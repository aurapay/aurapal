import Link from "next/link";
import { agents, publicNavLinks, solutions } from "@/lib/site-data";

export default function SolutionsPage() {
	return (
		<>
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
							Solutions by department
						</p>
						<h1 className="headline">AI agents built for how your team actually works.</h1>
						<p className="lede">
							Every department has repetitive workflows that drain hours from high-value work.
							MyAuraPal agents are purpose-built to handle them — from invoice processing to
							employee onboarding to executive scheduling.
						</p>
					</div>
				</div>
			</div>

			{/* Agent Overview */}
			<div className="shell">
				<section className="section">
					<div className="section-heading section-heading--center">
						<p className="eyebrow">AI Agents</p>
						<h2 className="section-title">Meet the agents that power your operations.</h2>
						<p className="section-copy">
							Each agent is a specialist — trained on your policies, connected to your systems, and
							supervised by your team.
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
				</section>
			</div>

			{/* Solution Deep Dives */}
			{solutions.map((solution, index) => (
				<div key={solution.id} className="shell" id={solution.id}>
					<section
						className={`section solution-section ${index % 2 === 1 ? "solution-section--alt" : ""}`}
					>
						<div className="solution-header">
							<p className="eyebrow">{solution.title}</p>
							<h2 className="section-title">{solution.headline}</h2>
							<p className="section-copy">{solution.copy}</p>
							<div className="solution-agents">
								{solution.agents.map((agentName) => (
									<span key={agentName} className="chip chip--success">
										{agentName}
									</span>
								))}
							</div>
						</div>
						<div className="solution-content">
							<div className="solution-stats">
								{solution.stats.map((stat) => (
									<div key={stat.label} className="solution-stat">
										<span className="solution-stat__value">{stat.value}</span>
										<span className="solution-stat__label">{stat.label}</span>
									</div>
								))}
							</div>
							<div className="solution-workflows">
								<h3 className="solution-workflows__title">Automated workflows</h3>
								<ul className="solution-workflows__list">
									{solution.workflows.map((workflow) => (
										<li key={workflow}>{workflow}</li>
									))}
								</ul>
							</div>
						</div>
					</section>
				</div>
			))}

			{/* CTA */}
			<div className="shell">
				<div className="cta-band">
					<p className="cta-band__eyebrow">See it in action</p>
					<h2 className="section-title">Which workflows are eating your team's time?</h2>
					<p className="section-copy">
						Book a demo and we'll show you exactly how agents handle your specific use cases.
					</p>
					<div className="cta-row">
						<Link href="/book-demo" className="button button--primary button--lg">
							Book a demo
						</Link>
						<Link href="/pricing" className="button button--ghost button--lg">
							See pricing
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
