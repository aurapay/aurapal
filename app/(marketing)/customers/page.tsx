import Link from "next/link";
import { customerStories, heroMetrics, publicNavLinks } from "@/lib/site-data";

export default function CustomersPage() {
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
							Customer stories
						</p>
						<h1 className="headline">Teams saving thousands of hours with AI agents.</h1>
						<p className="lede">
							From 85-person startups to 1,200-employee enterprises, these teams replaced manual
							busywork with intelligent automation — and never looked back.
						</p>
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

			{/* Customer Stories */}
			<div className="shell">
				<section className="section">
					<div className="customer-grid">
						{customerStories.map((story) => (
							<article key={story.company} className="customer-card">
								<div className="customer-card__header">
									<div>
										<h3 className="customer-card__company">{story.company}</h3>
										<p className="customer-card__meta">
											{story.industry} &middot; {story.size}
										</p>
									</div>
								</div>
								<blockquote className="customer-card__quote">
									&ldquo;{story.quote}&rdquo;
								</blockquote>
								<div className="customer-card__author">
									<span className="customer-card__name">{story.author}</span>
									<span className="customer-card__role">
										{story.role}, {story.company}
									</span>
								</div>
								<div className="customer-card__stats">
									{story.stats.map((stat) => (
										<div key={stat.label} className="customer-stat">
											<span className="customer-stat__value">{stat.value}</span>
											<span className="customer-stat__label">{stat.label}</span>
										</div>
									))}
								</div>
							</article>
						))}
					</div>
				</section>
			</div>

			{/* CTA */}
			<div className="shell">
				<div className="cta-band">
					<p className="cta-band__eyebrow">Join them</p>
					<h2 className="section-title">Ready to see what agents can do for your team?</h2>
					<p className="section-copy">
						Start your free 14-day trial or book a demo to see MyAuraPal in action with your
						specific workflows.
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
