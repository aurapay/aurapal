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
				</div>
				<nav aria-label="Workspace navigation">
					{appNavLinks.map((link) => (
						<Link key={link.href} href={link.href} className="app-sidebar__link">
							{link.label}
						</Link>
					))}
				</nav>
				<div className="sidebar-status">
					<p className="sidebar-status__label">Agent status</p>
					<div className="sidebar-status__row">
						<span className="status status--success">Active</span>
						<span className="sidebar-status__detail">3 agents running</span>
					</div>
					<div className="sidebar-status__row">
						<span className="status status--warning">2 pending</span>
						<span className="sidebar-status__detail">Awaiting approval</span>
					</div>
				</div>
			</aside>
			<div className="app-main">
				<header className="app-topbar">
					<div>
						<h1 className="app-topbar__title">Dashboard</h1>
					</div>
					<div className="app-topbar__actions">
						<span className="chip chip--success">All systems normal</span>
						<Link href="/settings" className="button button--ghost">
							Settings
						</Link>
					</div>
				</header>
				<main className="app-content">{children}</main>
			</div>
		</div>
	);
}
