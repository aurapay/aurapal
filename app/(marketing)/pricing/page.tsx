import Link from "next/link";
import { pricingPlans, publicNavLinks } from "@/lib/site-data";

export default function PricingPage() {
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
				<section className="section">
					<div className="section-heading section-heading--center">
						<p className="eyebrow">Pricing</p>
						<h1 className="section-title" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}>
							Simple pricing that scales with your team.
						</h1>
						<p className="section-copy">
							Start with a 14-day free trial. No credit card required. Upgrade when your agents prove their value.
						</p>
					</div>
					<div className="pricing-grid">
						{pricingPlans.map((plan) => (
							<article
								key={plan.title}
								className={`pricing-card ${plan.featured ? "pricing-card--featured" : ""}`}
							>
								<p className="pricing-card__step">{plan.title}</p>
								<p className="pricing-card__price">
									{plan.price}
									{plan.period && <span className="pricing-card__period">{plan.period}</span>}
								</p>
								<p className="pricing-card__tag">{plan.copy}</p>
								<ul className="pricing-card__list">
									{plan.features.map((feature) => (
										<li key={feature}>{feature}</li>
									))}
								</ul>
								<Link
									href={plan.title === "Enterprise" ? "/book-demo" : "/signup"}
									className={`button ${plan.featured ? "button--primary" : "button--secondary"}`}
								>
									{plan.cta}
								</Link>
							</article>
						))}
					</div>
				</section>
			</div>

			<div className="shell">
				<section className="section">
					<div className="section-heading section-heading--center">
						<p className="eyebrow">FAQ</p>
						<h2 className="section-title">Common questions</h2>
					</div>
					<div className="faq-grid">
						<article className="faq-item">
							<h3 className="faq-item__q">What counts as an agent run?</h3>
							<p className="faq-item__a">One complete workflow execution — e.g., processing an invoice from intake to approval routing. Multi-step workflows count as one run.</p>
						</article>
						<article className="faq-item">
							<h3 className="faq-item__q">Can I change plans later?</h3>
							<p className="faq-item__a">Yes. Upgrade or downgrade at any time. Changes take effect at your next billing cycle. No penalties.</p>
						</article>
						<article className="faq-item">
							<h3 className="faq-item__q">Is there a free trial?</h3>
							<p className="faq-item__a">14-day free trial on Starter and Business plans. No credit card required to start. Full access to all features in your plan.</p>
						</article>
						<article className="faq-item">
							<h3 className="faq-item__q">What integrations are included?</h3>
							<p className="faq-item__a">Starter includes email and calendar. Business and Enterprise include all 30+ integrations including accounting, HR, and recruiting tools.</p>
						</article>
						<article className="faq-item">
							<h3 className="faq-item__q">How long does setup take?</h3>
							<p className="faq-item__a">Most teams are live within 15 minutes. Connect your tools, set your policies in plain English, and agents start working immediately.</p>
						</article>
						<article className="faq-item">
							<h3 className="faq-item__q">Do agents make decisions without humans?</h3>
							<p className="faq-item__a">Agents recommend. Humans decide. Every sensitive action requires explicit approval. You set the rules for what needs human judgment.</p>
						</article>
					</div>
				</section>
			</div>

			<div className="shell">
				<div className="cta-band">
					<p className="cta-band__eyebrow">Need a custom plan?</p>
					<h2 className="section-title">Ready to put your agents to work?</h2>
					<p className="section-copy">
						Start your free trial today or talk to our team about enterprise needs.
					</p>
					<div className="cta-row">
						<Link href="/signup" className="button button--primary button--lg">
							Start free trial
						</Link>
						<Link href="/book-demo" className="button button--ghost button--lg">
							Talk to sales
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
