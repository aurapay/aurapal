import Link from "next/link";
import Image from "next/image";
import { publicNavLinks, trustSignals } from "@/lib/site-data";

const shellClass = "mx-auto max-w-[1200px] px-4 sm:px-6";
const heroButtonPrimaryClass =
	"inline-flex min-h-12 items-center justify-center rounded-sm border border-transparent bg-accent px-8 py-3.5 text-base font-bold text-white transition duration-150 hover:-translate-y-px hover:bg-accent-hover hover:shadow-md focus-visible:outline-none";
const heroButtonGhostClass =
	"inline-flex min-h-12 items-center justify-center rounded-sm border border-border-dark bg-transparent px-8 py-3.5 text-base font-bold text-text-dark-secondary transition duration-150 hover:-translate-y-px hover:bg-white/5 hover:text-text-dark hover:shadow-md focus-visible:outline-none";

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
		<main className="pb-20">
			<div className="relative overflow-hidden bg-bg-dark text-text-dark">
				<div className="pointer-events-none absolute left-1/2 top-[-40%] h-[80%] w-[120%] -translate-x-1/2 bg-[radial-gradient(ellipse,_rgba(22,163,74,0.12)_0%,_transparent_60%)]" />
				<div className="relative z-10">
					<div className={shellClass}>
						<header className="flex flex-col gap-3 border-b border-border-dark py-4 lg:flex-row lg:items-center lg:justify-between">
							<Link
								href="/"
								className="inline-flex items-center gap-3 font-display text-[1.05rem] font-bold tracking-[-0.03em] text-text-dark"
								aria-label="MyAuraPal home"
							>
								<Image
									src="/logo.png"
									alt="MyAuraPal"
									width={40}
									height={40}
									className="h-10 w-10"
								/>
								<span>MyAuraPal</span>
							</Link>
							<nav
								className="flex flex-wrap items-center gap-2 rounded-full border border-border-dark bg-white/5 p-1"
								aria-label="Primary"
							>
								{publicNavLinks.map((link) => (
									<Link
										key={link.href}
										href={link.href}
										className="rounded-full px-3.5 py-1.5 text-sm font-semibold text-text-dark-secondary transition-colors hover:bg-white/5 hover:text-text-dark"
									>
										{link.label}
									</Link>
								))}
							</nav>
							<div className="flex flex-wrap items-center gap-3">
								<Link href="/login" className={heroButtonGhostClass}>
									Sign in
								</Link>
								<Link href="/signup" className={heroButtonPrimaryClass}>
									Start free trial
								</Link>
							</div>
						</header>

						<div className="pb-20 pt-20 text-center">
							<p className="inline-flex items-center gap-2 rounded-full border border-border-dark bg-white/5 px-4 py-1.5 text-[0.8rem] font-bold tracking-[0.02em] text-accent">
								<span className="h-1.5 w-1.5 rounded-full bg-accent" />
								SOC 2 Type II Certified
							</p>
							<h1 className="mx-auto mt-6 max-w-[18ch] font-display text-[clamp(3rem,6vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.04em]">
								Security that earns the trust of your compliance team.
							</h1>
							<p className="mx-auto mt-6 max-w-[42rem] text-[1.15rem] leading-7 text-text-dark-secondary">
								MyAuraPal is built for enterprises that take security seriously. Every agent
								operates within strict boundaries, every action is auditable, and humans stay in
								control of every sensitive decision.
							</p>
							<div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
								<Link href="/book-demo" className={heroButtonPrimaryClass}>
									Request security review
								</Link>
								<Link href="/pricing" className={heroButtonGhostClass}>
									See Enterprise plan
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className={shellClass}>
				<section className="pt-20">
					<div className="mx-auto mb-10 max-w-[44rem] text-center">
						<p className="mb-2 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-accent">
							Compliance
						</p>
						<h2 className="font-display text-[clamp(1.8rem,3vw,2.8rem)] font-extrabold leading-[1.05] tracking-[-0.035em]">
							Built to meet the standards your industry requires.
						</h2>
					</div>
					<div className="grid gap-6 md:grid-cols-3">
						{complianceBadges.map((badge) => (
							<article
								key={badge.title}
								className="rounded-lg border border-border bg-surface p-6 shadow-sm"
							>
								<div className="flex items-start justify-between gap-4">
									<h3 className="m-0 font-display text-base font-bold tracking-[-0.01em]">
										{badge.title}
									</h3>
									<span className="inline-flex items-center gap-1 rounded-full border border-transparent bg-accent-subtle px-3 py-1 text-xs font-bold text-accent">
										{badge.status}
									</span>
								</div>
								<p className="m-0 mt-3 text-sm leading-6 text-text-secondary">{badge.copy}</p>
							</article>
						))}
					</div>
				</section>
			</div>

			<div className={shellClass}>
				<section className="pt-20">
					<div className="mx-auto mb-10 max-w-[44rem] text-center">
						<p className="mb-2 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-accent">
							Security architecture
						</p>
						<h2 className="font-display text-[clamp(1.8rem,3vw,2.8rem)] font-extrabold leading-[1.05] tracking-[-0.035em]">
							Enterprise controls at every layer of the stack.
						</h2>
						<p className="mt-3 text-base leading-6 text-text-secondary">
							From agent permissions to data storage, security is built into the architecture — not
							bolted on after the fact.
						</p>
					</div>
					<div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 xl:grid-cols-3">
						{securityFeatures.map((feature) => (
							<article key={feature.title} className="flex flex-col gap-2 bg-surface p-7">
								<h3 className="m-0 font-display text-base font-bold tracking-[-0.01em]">
									{feature.title}
								</h3>
								<p className="m-0 text-sm leading-6 text-text-secondary">{feature.copy}</p>
							</article>
						))}
					</div>
				</section>
			</div>

			<div className={shellClass}>
				<section className="pt-20">
					<div className="mx-auto mb-10 max-w-[44rem] text-center">
						<p className="mb-2 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-accent">
							Trust principles
						</p>
						<h2 className="font-display text-[clamp(1.8rem,3vw,2.8rem)] font-extrabold leading-[1.05] tracking-[-0.035em]">
							How we think about trust.
						</h2>
						<p className="mt-3 text-base leading-6 text-text-secondary">
							These are the principles that govern how every agent behaves and how every piece of
							data is handled.
						</p>
					</div>
					<div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 xl:grid-cols-3">
						{trustSignals.map((signal) => (
							<article key={signal.title} className="flex flex-col gap-2 bg-surface p-7">
								<h3 className="m-0 font-display text-base font-bold tracking-[-0.01em]">
									{signal.title}
								</h3>
								<p className="m-0 text-sm leading-6 text-text-secondary">{signal.copy}</p>
							</article>
						))}
					</div>
				</section>
			</div>

			<div className={shellClass}>
				<div className="mt-20 rounded-xl bg-bg-dark px-6 py-16 text-center text-text-dark shadow-lg sm:px-12">
					<p className="mb-2 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-accent">
						Enterprise ready
					</p>
					<h2 className="font-display text-[clamp(1.8rem,3vw,2.8rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-text-dark">
						Need a detailed security review?
					</h2>
					<p className="mx-auto mt-3 max-w-[36rem] text-base leading-7 text-text-dark-secondary">
						Our team will walk through architecture, compliance documentation, and custom deployment
						options for your organization.
					</p>
					<div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
						<Link href="/book-demo" className={heroButtonPrimaryClass}>
							Request security review
						</Link>
						<Link href="/pricing" className={heroButtonGhostClass}>
							Compare plans
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}
