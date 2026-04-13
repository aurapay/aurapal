import Link from "next/link";
import { publicNavLinks, trustSignals } from "@/lib/site-data";

const complianceBadges = [
	{
		title: "SOC 2 Type II",
		status: "Certified",
		copy: "Independently audited annually. Controls verified by a Big 4 firm.",
	},
	{
		title: "GDPR",
		status: "Compliant",
		copy: "Full data subject rights support. EU data residency available.",
	},
	{
		title: "HIPAA",
		status: "Available",
		copy: "BAA available for healthcare customers on Enterprise plans.",
	},
];

const securityFeatures = [
	{
		title: "Zero-trust agent architecture",
		copy: "Every agent action is scoped to the minimum permissions required. Agents cannot access data or systems outside their configured boundaries.",
	},
	{
		title: "Human-in-the-loop by default",
		copy: "Sensitive actions — money movement, account changes, data deletion — always require explicit human approval before execution.",
	},
	{
		title: "End-to-end encryption",
		copy: "Data encrypted in transit (TLS 1.3) and at rest (AES-256). Agent actions never expose raw credentials or API keys.",
	},
	{
		title: "Immutable audit trail",
		copy: "Every agent action is logged with full context: source input, decision reasoning, policy checks, actor, and outcome. Logs cannot be modified or deleted.",
	},
	{
		title: "Role-based access control",
		copy: "Granular permissions for operators, approvers, and admins. Team members see only what they need. SSO and SCIM provisioning for Enterprise.",
	},
	{
		title: "Data residency controls",
		copy: "Choose where your data lives. US and EU regions available. Custom deployment regions for Enterprise customers.",
	},
];

export default function SecurityPage() {
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
							SOC 2 Type II Certified
						</p>
						<h1 className="headline">Security that earns the trust of your compliance team.</h1>
						<p className="lede">
							MyAuraPal is built for enterprises that take security seriously. Every agent operates
							within strict boundaries, every action is auditable, and humans stay in control of
							every sensitive decision.
						</p>
						<div className="cta-row">
							<Link href="/book-demo" className="button button--primary button--lg">
								Request security review
							</Link>
							<Link href="/pricing" className="button button--ghost button--lg">
								See Enterprise plan
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* Compliance Badges */}
			<div className="shell">
				<section className="section">
					<div className="section-heading section-heading--center">
						<p className="eyebrow">Compliance</p>
						<h2 className="section-title">Built to meet the standards your industry requires.</h2>
					</div>
					<div className="usecase-grid">
						{complianceBadges.map((badge) => (
							<article key={badge.title} className="usecase-card">
								<div className="panel-header">
									<h3 className="usecase-card__title">{badge.title}</h3>
									<span className="chip chip--success">{badge.status}</span>
								</div>
								<p className="usecase-card__copy">{badge.copy}</p>
							</article>
						))}
					</div>
				</section>
			</div>

			{/* Security Features */}
			<div className="shell">
				<section className="section">
					<div className="section-heading section-heading--center">
						<p className="eyebrow">Security architecture</p>
						<h2 className="section-title">Enterprise controls at every layer of the stack.</h2>
						<p className="section-copy">
							From agent permissions to data storage, security is built into the architecture — not
							bolted on after the fact.
						</p>
					</div>
					<div className="trust-grid">
						{securityFeatures.map((feature) => (
							<article key={feature.title} className="trust-card">
								<h3 className="trust-card__title">{feature.title}</h3>
								<p className="trust-card__copy">{feature.copy}</p>
							</article>
						))}
					</div>
				</section>
			</div>

			{/* Trust Signals */}
			<div className="shell">
				<section className="section">
					<div className="section-heading section-heading--center">
						<p className="eyebrow">Trust principles</p>
						<h2 className="section-title">How we think about trust.</h2>
						<p className="section-copy">
							These are the principles that govern how every agent behaves and how every piece of
							data is handled.
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
				</section>
			</div>

			{/* CTA */}
			<div className="shell">
				<div className="cta-band">
					<p className="cta-band__eyebrow">Enterprise ready</p>
					<h2 className="section-title">Need a detailed security review?</h2>
					<p className="section-copy">
						Our team will walk through architecture, compliance documentation, and custom deployment
						options for your organization.
					</p>
					<div className="cta-row">
						<Link href="/book-demo" className="button button--primary button--lg">
							Request security review
						</Link>
						<Link href="/pricing" className="button button--ghost button--lg">
							Compare plans
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
