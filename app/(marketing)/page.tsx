import Image from "next/image";
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

const shellClass = "mx-auto max-w-[1200px] px-4 sm:px-6";
const sectionClass = "pt-20";
const sectionHeadingCenterClass = "mx-auto mb-10 max-w-[44rem] text-center";
const sectionTitleClass =
	"font-display text-[clamp(1.8rem,3vw,2.8rem)] font-extrabold leading-[1.05] tracking-[-0.035em]";
const sectionCopyClass = "mt-3 text-base leading-6 text-text-secondary";
const heroButtonPrimaryClass =
	"inline-flex items-center justify-center rounded-sm border border-transparent bg-accent px-6 py-2 text-xs font-bold text-white transition duration-150 hover:-translate-y-px hover:bg-accent-hover hover:shadow-md focus-visible:outline-none";
const heroButtonGhostClass =
	"inline-flex items-center justify-center rounded-sm border border-border-dark bg-transparent px-6 py-2 text-xs font-bold text-text-dark-secondary transition duration-150 hover:-translate-y-px hover:bg-white/5 hover:text-text-dark hover:shadow-md focus-visible:outline-none";
const sectionButtonSecondaryClass =
	"inline-flex items-center justify-center rounded-xs border border-transparent bg-text px-3 py-1 text-sm font-bold text-bg transition duration-150 hover:-translate-y-px hover:opacity-90 hover:shadow-md focus-visible:outline-none";

export default function MarketingPage() {
	return (
		<main className="pb-20">
			<div className="relative overflow-hidden bg-bg-dark text-text-dark min-h-screen">
				<div className="pointer-events-none absolute left-1/2 top-[-40%] h-[80%] w-[120%] -translate-x-1/2 bg-[radial-gradient(ellipse,_rgba(22,163,74,0.12)_0%,_transparent_60%)]" />
				<div className="relative z-10">
					<div className={shellClass}>
						<header className="flex flex-col gap-3 py-4 lg:flex-row lg:items-center lg:justify-between">
							<Link
								href="/"
								className="inline-flex items-center gap-3 font-display text-[1.05rem] font-bold tracking-[-0.03em] text-text-dark"
								aria-label="AuraPal"
							>
								<Image src="/logo.png" alt="AuraPal" width={40} height={40} className="h-10 w-10" />
								<span>AuraPal</span>
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
								For finance, HR, and ops teams
							</p>
							<h1 className="mx-auto mt-6 max-w-[18ch] font-display text-[clamp(3rem,6vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.04em]">
								AI agents that clear repetitive work off your team’s plate.
							</h1>
							<p className="mx-auto mt-6 max-w-[42rem] text-[1.15rem] leading-7 text-text-dark-secondary">
								MyAuraPal handles invoicing, onboarding, recruiting, scheduling, and expenses so
								your team moves faster with less manual work.
							</p>
							<div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
								<Link href="/signup" className={heroButtonPrimaryClass}>
									Start free trial
								</Link>
								<Link href="/book-demo" className={heroButtonGhostClass}>
									Book a demo
								</Link>
							</div>
							<div className="mt-14 flex flex-col gap-px overflow-hidden rounded-md bg-border-dark lg:flex-row">
								{heroMetrics.map((metric) => (
									<div key={metric.label} className="flex-1 bg-bg-dark-soft px-7 py-6 text-left">
										<span className="block font-display text-2xl font-extrabold tracking-[-0.04em] text-text-dark">
											{metric.value}
										</span>
										<span className="mt-1 block text-sm font-semibold text-text-dark-secondary">
											{metric.label}
										</span>
										<p className="mt-2 text-sm leading-6 text-text-dark-secondary/80">
											{metric.detail}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className={shellClass}>
				<p className="pt-12 text-center text-[0.8rem] font-bold uppercase tracking-[0.1em] text-text-secondary">
					Trusted by teams at
				</p>
				<div className="mt-6 flex flex-wrap items-center justify-center gap-6 border-b border-border pb-12 sm:gap-10">
					{logoNames.map((name) => (
						<span
							key={name}
							className="font-display text-base font-bold tracking-[-0.02em] text-text-secondary opacity-50"
						>
							{name}
						</span>
					))}
				</div>
			</div>

			<div className={shellClass}>
				<section className={sectionClass} id="agents">
					<div className={sectionHeadingCenterClass}>
						<p className="mb-2 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-accent">
							Agents
						</p>
						<h2 className={sectionTitleClass}>Six agents for repetitive work.</h2>
						<p className={sectionCopyClass}>
							Each one follows your rules, connects to your tools, and shows full context before
							anything sensitive moves.
						</p>
					</div>
					<div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 xl:grid-cols-3">
						{agents.map((agent) => (
							<article
								key={agent.title}
								className="flex flex-col gap-3 bg-surface p-7 transition-colors hover:bg-surface-hover"
							>
								<div className="flex h-10 w-10 items-center justify-center rounded-xs bg-accent-subtle text-xs font-extrabold text-accent">
									{agent.icon.slice(0, 2).toUpperCase()}
								</div>
								<h3 className="m-0 font-display text-[1.15rem] font-bold tracking-[-0.02em]">
									{agent.title}
								</h3>
								<p className="m-0 text-sm leading-6 text-text-secondary">{agent.copy}</p>
								<span className="mt-auto inline-flex w-fit items-center gap-1 rounded-full bg-accent-subtle px-3 py-1 text-[0.78rem] font-bold text-accent">
									{agent.stat}
								</span>
							</article>
						))}
					</div>
					<div className="mt-8 flex justify-center">
						<Link href="/solutions" className={sectionButtonSecondaryClass}>
							View solutions
						</Link>
					</div>
				</section>
			</div>

			<div className={shellClass}>
				<section className={sectionClass} id="how-it-works">
					<div className={sectionHeadingCenterClass}>
						<p className="mb-2 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-accent">
							How it works
						</p>
						<h2 className={sectionTitleClass}>Connect. Set rules. Let agents run.</h2>
						<p className={sectionCopyClass}>No engineering required. You keep the final say.</p>
					</div>
					<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
						{howItWorks.map((step) => (
							<article key={step.step} className="rounded-lg border border-border bg-surface p-6">
								<div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-text text-sm font-extrabold text-bg">
									{step.step}
								</div>
								<h3 className="m-0 font-display text-[1.15rem] font-bold tracking-[-0.02em]">
									{step.title}
								</h3>
								<p className="m-0 mt-2 text-sm leading-6 text-text-secondary">{step.copy}</p>
							</article>
						))}
					</div>
				</section>
			</div>

			<div className={shellClass}>
				<section className={sectionClass}>
					<div className={sectionHeadingCenterClass}>
						<p className="mb-2 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-accent">
							Integrations
						</p>
						<h2 className={sectionTitleClass}>Works with the tools you already use.</h2>
						<p className={sectionCopyClass}>
							Email, finance, HR, and calendar tools without middleware.
						</p>
					</div>
					<div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
						{integrationPartners.slice(0, 15).map((partner) => (
							<div
								key={partner.name}
								className="flex flex-col gap-1 rounded-sm border border-border bg-surface px-4 py-4 transition-colors hover:border-accent hover:bg-accent-subtle"
							>
								<span className="text-sm font-bold text-text">{partner.name}</span>
								<span className="text-xs font-semibold text-text-secondary">
									{partner.category}
								</span>
							</div>
						))}
						<div className="flex flex-col gap-1 rounded-sm border border-dashed border-border bg-surface-hover px-4 py-4">
							<span className="text-sm font-bold text-text">
								+{integrationPartners.length - 15} more
							</span>
							<span className="text-xs font-semibold text-text-secondary">Coming soon</span>
						</div>
					</div>
				</section>
			</div>

			<div className={shellClass}>
				<section className={sectionClass}>
					<div className={sectionHeadingCenterClass}>
						<p className="mb-2 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-accent">
							Use cases
						</p>
						<h2 className={sectionTitleClass}>Built for the teams doing the heavy lifting.</h2>
						<p className={sectionCopyClass}>
							Finance, people ops, and executive teams save hours on the workflows that never stop.
						</p>
					</div>
					<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
						{useCases.map((useCase) => (
							<article
								key={useCase.title}
								className="flex flex-col gap-4 rounded-lg border border-border bg-surface p-8"
							>
								<h3 className="m-0 font-display text-[1.3rem] font-bold tracking-[-0.02em]">
									{useCase.title}
								</h3>
								<p className="m-0 text-sm leading-6 text-text-secondary">{useCase.copy}</p>
								<div className="mt-auto flex gap-6 border-t border-border pt-4">
									{useCase.stats.map((stat) => (
										<div key={stat.label}>
											<span className="block font-display text-[1.8rem] font-extrabold tracking-[-0.04em] text-accent">
												{stat.value}
											</span>
											<span className="block text-xs font-semibold text-text-secondary">
												{stat.label}
											</span>
										</div>
									))}
								</div>
							</article>
						))}
					</div>
					<div className="mt-8 flex justify-center">
						<Link href="/solutions" className={sectionButtonSecondaryClass}>
							Explore all solutions
						</Link>
					</div>
				</section>
			</div>

			<div className={shellClass}>
				<section className={sectionClass}>
					<div className={sectionHeadingCenterClass}>
						<p className="mb-2 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-accent">
							Security
						</p>
						<h2 className={sectionTitleClass}>Trust built in.</h2>
						<p className={sectionCopyClass}>
							Every action is logged, permissioned, and easy to review.
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
					<div className="mt-8 flex justify-center">
						<Link href="/security" className={sectionButtonSecondaryClass}>
							View security
						</Link>
					</div>
				</section>
			</div>

			<div className={shellClass}>
				<div className="mt-20 rounded-xl bg-bg-dark px-6 py-16 text-center text-text-dark shadow-lg sm:px-12">
					<p className="mb-2 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-accent">
						Ready to automate?
					</p>
					<h2 className="font-display text-[clamp(1.8rem,3vw,2.8rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-text-dark">
						Put your agents to work.
					</h2>
					<p className="mx-auto mt-3 max-w-[36rem] text-base leading-7 text-text-dark-secondary">
						Join teams already cutting manual work. Start your free 14-day trial, no credit card
						required.
					</p>
					<div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
						<Link href="/signup" className={heroButtonPrimaryClass}>
							Start free trial
						</Link>
						<Link href="/book-demo" className={heroButtonGhostClass}>
							Book a demo
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}
