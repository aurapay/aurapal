import Link from "next/link";
import Image from "next/image";
import { customerStories, heroMetrics, publicNavLinks } from "@/lib/site-data";

const shellClass = "mx-auto max-w-[1200px] px-4 sm:px-6";
const heroButtonPrimaryClass =
	"inline-flex min-h-12 items-center justify-center rounded-sm border border-transparent bg-accent px-8 py-3.5 text-base font-bold text-white transition duration-150 hover:-translate-y-px hover:bg-accent-hover hover:shadow-md focus-visible:outline-none";
const heroButtonGhostClass =
	"inline-flex min-h-12 items-center justify-center rounded-sm border border-border-dark bg-transparent px-8 py-3.5 text-base font-bold text-text-dark-secondary transition duration-150 hover:-translate-y-px hover:bg-white/5 hover:text-text-dark hover:shadow-md focus-visible:outline-none";

export default function CustomersPage() {
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
								Customer stories
							</p>
							<h1 className="mx-auto mt-6 max-w-[18ch] font-display text-[clamp(3rem,6vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.04em]">
								Teams saving thousands of hours with AI agents.
							</h1>
							<p className="mx-auto mt-6 max-w-[42rem] text-[1.15rem] leading-7 text-text-dark-secondary">
								From 85-person startups to 1,200-employee enterprises, these teams replaced manual
								busywork with intelligent automation — and never looked back.
							</p>
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
				<section className="pt-20">
					<div className="grid gap-6 md:grid-cols-2">
						{customerStories.map((story) => (
							<article
								key={story.company}
								className="flex flex-col gap-5 rounded-lg border border-border bg-surface p-8 shadow-sm"
							>
								<div className="flex items-start justify-between gap-4">
									<div>
										<h3 className="m-0 font-display text-[1.2rem] font-bold tracking-[-0.02em]">
											{story.company}
										</h3>
										<p className="m-0 mt-1 text-sm font-semibold text-text-secondary">
											{story.industry} &middot; {story.size}
										</p>
									</div>
								</div>
								<blockquote className="m-0 text-base leading-7 italic text-text">
									&ldquo;{story.quote}&rdquo;
								</blockquote>
								<div className="flex flex-col gap-1">
									<span className="text-sm font-bold text-text">{story.author}</span>
									<span className="text-sm text-text-secondary">
										{story.role}, {story.company}
									</span>
								</div>
								<div className="mt-auto flex gap-6 border-t border-border pt-4">
									{story.stats.map((stat) => (
										<div key={stat.label}>
											<span className="block font-display text-[1.4rem] font-extrabold tracking-[-0.03em] text-accent">
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
				</section>
			</div>

			<div className={shellClass}>
				<div className="mt-20 rounded-xl bg-bg-dark px-6 py-16 text-center text-text-dark shadow-lg sm:px-12">
					<p className="mb-2 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-accent">
						Join them
					</p>
					<h2 className="font-display text-[clamp(1.8rem,3vw,2.8rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-text-dark">
						Ready to see what agents can do for your team?
					</h2>
					<p className="mx-auto mt-3 max-w-[36rem] text-base leading-7 text-text-dark-secondary">
						Start your free 14-day trial or book a demo to see MyAuraPal in action with your
						specific workflows.
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
