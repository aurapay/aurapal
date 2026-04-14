import Image from "next/image";
import Link from "next/link";
import { pricingPlans, publicNavLinks } from "@/lib/site-data";

const shellClass = "mx-auto max-w-[1200px] px-4 sm:px-6";
const sectionClass = "pt-20";
const sectionHeadingCenterClass = "mx-auto mb-10 max-w-[44rem] text-center";
const sectionTitleClass =
	"font-display text-[clamp(1.8rem,3vw,2.8rem)] font-extrabold leading-[1.05] tracking-[-0.035em]";
const sectionCopyClass = "mt-3 text-base leading-6 text-text-secondary";
const heroButtonPrimaryClass =
	"inline-flex min-h-12 items-center justify-center rounded-sm border border-transparent bg-accent px-8 py-3.5 text-base font-bold text-white transition duration-150 hover:-translate-y-px hover:bg-accent-hover hover:shadow-md focus-visible:outline-none";
const heroButtonGhostClass =
	"inline-flex min-h-12 items-center justify-center rounded-sm border border-border-dark bg-transparent px-8 py-3.5 text-base font-bold text-text-dark-secondary transition duration-150 hover:-translate-y-px hover:bg-white/5 hover:text-text-dark hover:shadow-md focus-visible:outline-none";
const sectionButtonGhostClass =
	"inline-flex min-h-10 items-center justify-center rounded-xs border border-border bg-transparent px-5 py-2.5 text-sm font-bold text-text transition duration-150 hover:-translate-y-px hover:bg-black/5 hover:shadow-md focus-visible:outline-none";
const sectionButtonPrimaryClass =
	"inline-flex min-h-10 items-center justify-center rounded-xs border border-transparent bg-accent px-5 py-2.5 text-sm font-bold text-white transition duration-150 hover:-translate-y-px hover:bg-accent-hover hover:shadow-md focus-visible:outline-none";

export default function PricingPage() {
	return (
		<main className="pb-20">
			<div className={shellClass}>
				<header className="flex flex-col gap-3 border-b border-border py-4 lg:flex-row lg:items-center lg:justify-between">
					<Link
						href="/"
						className="inline-flex items-center gap-3 font-display text-[1.05rem] font-bold tracking-[-0.03em]"
						aria-label="MyAuraPal home"
					>
						<Image src="/logo.png" alt="MyAuraPal" width={40} height={40} className="h-10 w-10" />
						<span>MyAuraPal</span>
					</Link>
					<nav
						className="flex flex-wrap items-center gap-2 rounded-full border border-border bg-white/60 p-1"
						aria-label="Primary"
					>
						{publicNavLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="rounded-full px-3.5 py-1.5 text-sm font-semibold text-text-secondary transition-colors hover:bg-black/5 hover:text-text"
							>
								{link.label}
							</Link>
						))}
					</nav>
					<div className="flex flex-wrap items-center gap-3">
						<Link href="/login" className={sectionButtonGhostClass}>
							Sign in
						</Link>
						<Link href="/signup" className={sectionButtonPrimaryClass}>
							Start free trial
						</Link>
					</div>
				</header>
			</div>

			<div className={shellClass}>
				<section className={sectionClass}>
					<div className={sectionHeadingCenterClass}>
						<p className="mb-2 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-accent">
							Pricing
						</p>
						<h1 className="font-display text-[clamp(2.2rem,4vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.035em]">
							Pricing that grows with your team.
						</h1>
						<p className={sectionCopyClass}>
							Start free for 14 days. Upgrade when agents prove value.
						</p>
					</div>
					<div className="grid gap-6 xl:grid-cols-3">
						{pricingPlans.map((plan) => (
							<article
								key={plan.title}
								className={`relative flex flex-col gap-3 rounded-lg border bg-surface p-8 ${plan.featured ? "border-accent shadow-md" : "border-border"}`}
							>
								{plan.featured && (
									<span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-[0.7rem] font-extrabold uppercase tracking-[0.06em] text-white">
										Most popular
									</span>
								)}
								<p className="text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-text-secondary">
									{plan.title}
								</p>
								<p className="font-display text-[2.5rem] font-extrabold leading-none tracking-[-0.04em]">
									{plan.price}
									{plan.period && (
										<span className="text-base font-medium tracking-normal text-text-secondary">
											{plan.period}
										</span>
									)}
								</p>
								<p className="text-sm leading-6 text-text-secondary">{plan.copy}</p>
								<ul className="mt-2 grid gap-2">
									{plan.features.map((feature) => (
										<li
											key={feature}
											className="relative pl-5 text-sm leading-6 text-text-secondary before:absolute before:left-0 before:top-0 before:font-extrabold before:text-accent before:content-['✓']"
										>
											{feature}
										</li>
									))}
								</ul>
								<Link
									href={plan.title === "Enterprise" ? "/book-demo" : "/signup"}
									className={`mt-auto inline-flex min-h-11 items-center justify-center rounded-xs border px-5 py-3 text-sm font-bold transition duration-150 hover:-translate-y-px hover:shadow-md focus-visible:outline-none ${plan.featured ? "border-transparent bg-accent text-white hover:bg-accent-hover" : "border-transparent bg-text text-bg hover:opacity-90"}`}
								>
									{plan.cta}
								</Link>
							</article>
						))}
					</div>
				</section>
			</div>

			<div className={shellClass}>
				<section className={sectionClass}>
					<div className={sectionHeadingCenterClass}>
						<p className="mb-2 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-accent">
							FAQ
						</p>
						<h2 className={sectionTitleClass}>Quick answers</h2>
					</div>
					<div className="grid gap-6 md:grid-cols-2">
						<article className="rounded-lg border border-border bg-surface p-6">
							<h3 className="m-0 font-display text-base font-bold tracking-[-0.01em]">
								What counts as an agent run?
							</h3>
							<p className="m-0 mt-2 text-sm leading-6 text-text-secondary">
								One workflow from intake to outcome. Multi-step jobs still count as one run.
							</p>
						</article>
						<article className="rounded-lg border border-border bg-surface p-6">
							<h3 className="m-0 font-display text-base font-bold tracking-[-0.01em]">
								Can I change plans later?
							</h3>
							<p className="m-0 mt-2 text-sm leading-6 text-text-secondary">
								Yes. Upgrade or downgrade anytime. Changes start next billing cycle.
							</p>
						</article>
						<article className="rounded-lg border border-border bg-surface p-6">
							<h3 className="m-0 font-display text-base font-bold tracking-[-0.01em]">
								Is there a free trial?
							</h3>
							<p className="m-0 mt-2 text-sm leading-6 text-text-secondary">
								Yes. Starter and Business include a 14-day trial with no credit card.
							</p>
						</article>
						<article className="rounded-lg border border-border bg-surface p-6">
							<h3 className="m-0 font-display text-base font-bold tracking-[-0.01em]">
								Do agents make decisions without humans?
							</h3>
							<p className="m-0 mt-2 text-sm leading-6 text-text-secondary">
								Agents recommend. Humans decide. Every sensitive action requires explicit approval.
								You set the rules for what needs human judgment.
							</p>
						</article>
					</div>
				</section>
			</div>

			<div className={shellClass}>
				<div className="mt-20 rounded-xl bg-bg-dark px-6 py-16 text-center text-text-dark shadow-lg sm:px-12">
					<p className="mb-2 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-accent">
						Need a custom plan?
					</p>
					<h2 className={`${sectionTitleClass} text-text-dark`}>See the ROI before you scale.</h2>
					<p className="mx-auto mt-3 max-w-[36rem] text-base leading-7 text-text-dark-secondary">
						Start free or talk to sales if you need enterprise support.
					</p>
					<div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
						<Link href="/signup" className={heroButtonPrimaryClass}>
							Start free trial
						</Link>
						<Link href="/book-demo" className={heroButtonGhostClass}>
							Talk to sales
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}
