import Link from "next/link";
import type { ReactNode } from "react";

export default function AuthLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<main className="mx-auto grid min-h-screen max-w-[1200px] gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
			<section className="flex flex-col justify-center rounded-xl bg-bg-dark p-8 text-text-dark shadow-lg lg:p-12">
				<Link
					href="/"
					className="inline-flex items-center gap-3 font-display text-[1.05rem] font-bold tracking-[-0.03em] text-text-dark"
				>
					<span className="flex h-8 w-8 items-center justify-center rounded-xs bg-accent text-[0.7rem] font-extrabold text-white">
						MP
					</span>
					<span>MyAuraPal</span>
				</Link>
				<p className="mt-6 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-accent">
					AI Agents for Office Workflows
				</p>
				<h1 className="mt-3 max-w-[14ch] font-display text-[clamp(2.2rem,4vw,3.5rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-text-dark">
					Put your repetitive tasks on autopilot.
				</h1>
				<p className="mt-4 max-w-[42rem] text-lg leading-7 text-text-dark-secondary">
					Deploy AI agents that handle invoicing, HR onboarding, recruiting, scheduling, and expense
					management — so your team focuses on work that actually matters.
				</p>
				<ul className="mt-6 grid gap-3 text-sm leading-6 text-text-dark-secondary">
					<li className="relative pl-5 before:absolute before:left-0 before:top-0 before:font-extrabold before:text-success before:content-['✓']">
						6 purpose-built AI agents for finance, HR, and operations
					</li>
					<li className="relative pl-5 before:absolute before:left-0 before:top-0 before:font-extrabold before:text-success before:content-['✓']">
						30+ integrations with the tools you already use
					</li>
					<li className="relative pl-5 before:absolute before:left-0 before:top-0 before:font-extrabold before:text-success before:content-['✓']">
						Full audit trails and human-in-the-loop approvals
					</li>
					<li className="relative pl-5 before:absolute before:left-0 before:top-0 before:font-extrabold before:text-success before:content-['✓']">
						14-day free trial, no credit card required
					</li>
				</ul>
			</section>
			<section className="flex items-center justify-center">{children}</section>
		</main>
	);
}
