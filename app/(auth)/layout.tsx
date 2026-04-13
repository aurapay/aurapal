import Link from "next/link";
import type { ReactNode } from "react";

export default function AuthLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<main className="auth-shell shell">
			<section className="auth-copy panel panel--hero">
				<Link href="/" className="brand">
					<span className="brand-mark">MP</span>
					<span>MyAuraPal</span>
				</Link>
				<p className="eyebrow">AI Agents for Office Workflows</p>
				<h1 className="headline">Put your repetitive tasks on autopilot.</h1>
				<p className="lede">
					Deploy AI agents that handle invoicing, HR onboarding, recruiting, scheduling, and expense
					management — so your team focuses on work that actually matters.
				</p>
				<ul className="auth-list">
					<li>6 purpose-built AI agents for finance, HR, and operations</li>
					<li>30+ integrations with the tools you already use</li>
					<li>Full audit trails and human-in-the-loop approvals</li>
					<li>14-day free trial, no credit card required</li>
				</ul>
			</section>
			<section className="auth-card">{children}</section>
		</main>
	);
}
