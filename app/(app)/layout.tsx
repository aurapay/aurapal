import Link from "next/link";
import type { ReactNode } from "react";
import { appNavLinks } from "@/lib/site-data";

export default function AppLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<div className="app-shell">
			<aside className="app-sidebar">
				<Link href="/workspace" className="site-brand">
					<span className="brand-mark">MP</span>
					<span>MyAuraPal</span>
				</Link>
				<div>
					<p className="app-sidebar__section">Workspace</p>
					<p className="helper-text">
						One shell for queue work, approvals, billing, and policy-aware execution.
					</p>
				</div>
				<nav aria-label="Workspace navigation">
					{appNavLinks.map((link) => (
						<Link key={link.href} href={link.href} className="app-sidebar__link">
							{link.label}
						</Link>
					))}
				</nav>
				<div className="panel panel--hero">
					<p className="eyebrow">Workspace state</p>
					<p className="metric-value">Controlled</p>
					<p className="metric-label">
						2 approvals pending, 14 items queued, 3 items ready to reconcile.
					</p>
				</div>
			</aside>
			<div className="app-main">
				<header className="app-topbar">
					<div>
						<p className="eyebrow">Product shell</p>
						<h1 className="app-topbar__title">Operations console for office workflows</h1>
						<p className="helper-text">Dense, traceable, and built to scan quickly.</p>
					</div>
					<div className="app-topbar__actions">
						<span className="chip chip--success">Audit on</span>
						<Link href="/book-demo" className="button button--ghost">
							Book demo
						</Link>
					</div>
				</header>
				<main className="app-content">{children}</main>
			</div>
		</div>
	);
}
