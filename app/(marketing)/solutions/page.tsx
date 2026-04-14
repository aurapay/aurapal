import Image from "next/image";
import Link from "next/link";
import { agents, publicNavLinks, solutions } from "@/lib/site-data";

const shellClass = "mx-auto max-w-[1200px] px-4 sm:px-6";
const heroButtonPrimaryClass =
	"inline-flex min-h-12 items-center justify-center rounded-sm border border-transparent bg-accent px-8 py-3.5 text-base font-bold text-white transition duration-150 hover:-translate-y-px hover:bg-accent-hover hover:shadow-md focus-visible:outline-none";
const heroButtonGhostClass =
	"inline-flex min-h-12 items-center justify-center rounded-sm border border-border-dark bg-transparent px-8 py-3.5 text-base font-bold text-text-dark-secondary transition duration-150 hover:-translate-y-px hover:bg-white/5 hover:text-text-dark hover:shadow-md focus-visible:outline-none";

export default function SolutionsPage() {
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
								Solutions by department
							</p>
							<h1 className="mx-auto mt-6 max-w-[18ch] font-display text-[clamp(3rem,6vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.04em]">
								AI agents for the work each team does every day.
							</h1>
							<p className="mx-auto mt-6 max-w-[42rem] text-[1.15rem] leading-7 text-text-dark-secondary">
								From invoices to onboarding to scheduling, MyAuraPal handles the repetitive work
								that slows each department down.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className={shellClass}>
				<section className="pt-20">
					<div className="mx-auto mb-10 max-w-[44rem] text-center">
						<p className="mb-2 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-accent">
							AI Agents
						</p>
						<h2 className="font-display text-[clamp(1.8rem,3vw,2.8rem)] font-extrabold leading-[1.05] tracking-[-0.035em]">
							Agents that power your operations.
						</h2>
						<p className="mt-3 text-base leading-6 text-text-secondary">
							Each one follows your rules, connects to your systems, and stays under human review.
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
				</section>
			</div>

			{solutions.map((solution, index) => (
				<div key={solution.id} className={shellClass} id={solution.id}>
					<section
						className={`pt-20 ${index % 2 === 1 ? "rounded-xl bg-surface-hover px-6 py-20" : ""}`}
					>
						<div className="max-w-[40rem]">
							<p className="mb-2 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-accent">
								{solution.title}
							</p>
							<h2 className="font-display text-[clamp(1.8rem,3vw,2.8rem)] font-extrabold leading-[1.05] tracking-[-0.035em]">
								{solution.headline}
							</h2>
							<p className="mt-3 text-base leading-6 text-text-secondary">{solution.copy}</p>
							<div className="mt-4 flex flex-wrap gap-2">
								{solution.agents.map((agentName) => (
									<span
										key={agentName}
										className="inline-flex items-center gap-1 rounded-full border border-transparent bg-accent-subtle px-3 py-1 text-xs font-bold text-accent"
									>
										{agentName}
									</span>
								))}
							</div>
						</div>
						<div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.5fr]">
							<div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border">
								{solution.stats.map((stat) => (
									<div key={stat.label} className="bg-surface p-5">
										<span className="block font-display text-[1.8rem] font-extrabold tracking-[-0.04em] text-accent">
											{stat.value}
										</span>
										<span className="block text-sm font-semibold text-text-secondary">
											{stat.label}
										</span>
									</div>
								))}
							</div>
							<div className="rounded-lg border border-border bg-surface p-6 shadow-sm">
								<h3 className="m-0 mb-4 font-display text-base font-bold tracking-[-0.01em]">
									Automated steps
								</h3>
								<ul className="grid gap-3">
									{solution.workflows.map((workflow) => (
										<li
											key={workflow}
											className="relative pl-5 text-sm leading-6 text-text-secondary before:absolute before:left-0 before:top-0 before:font-bold before:text-accent before:content-['→']"
										>
											{workflow}
										</li>
									))}
								</ul>
							</div>
						</div>
					</section>
				</div>
			))}

			<div className={shellClass}>
				<div className="mt-20 rounded-xl bg-bg-dark px-6 py-16 text-center text-text-dark shadow-lg sm:px-12">
					<p className="mb-2 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-accent">
						See it in action
					</p>
					<h2 className="font-display text-[clamp(1.8rem,3vw,2.8rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-text-dark">
						Which workflows should go first?
					</h2>
					<p className="mx-auto mt-3 max-w-[36rem] text-base leading-7 text-text-dark-secondary">
						Book a demo and we’ll show you where agents save the most time.
					</p>
					<div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
						<Link href="/book-demo" className={heroButtonPrimaryClass}>
							Book a demo
						</Link>
						<Link href="/pricing" className={heroButtonGhostClass}>
							View pricing
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}
