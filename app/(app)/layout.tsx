import Link from "next/link";
import type { ReactNode } from "react";
import { appNavLinks } from "@/lib/site-data";

export default function AppLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<div className="grid min-h-screen lg:grid-cols-[16rem_minmax(0,1fr)]">
			<aside className="flex flex-col gap-6 border-b border-border bg-surface p-5 lg:sticky lg:top-0 lg:h-screen lg:border-b-0 lg:border-r">
				<Link
					href="/workspace"
					className="inline-flex items-center gap-3 font-display text-[1.05rem] font-bold tracking-[-0.03em]"
				>
					<span className="flex h-8 w-8 items-center justify-center rounded-xs bg-accent text-[0.7rem] font-extrabold text-white">
						MP
					</span>
					<span>MyAuraPal</span>
				</Link>
				<div>
					<p className="text-[0.72rem] font-extrabold uppercase tracking-[0.12em] text-text-secondary">
						Workspace
					</p>
				</div>
				<nav aria-label="Workspace navigation" className="flex flex-col gap-1">
					{appNavLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="flex items-center justify-between rounded-xs border border-transparent px-3.5 py-2 text-sm font-semibold text-text-secondary transition-colors hover:border-border hover:bg-black/5 hover:text-text"
						>
							{link.label}
						</Link>
					))}
				</nav>
				<div className="mt-auto rounded-sm border border-border bg-surface-hover p-4">
					<p className="text-[0.72rem] font-extrabold uppercase tracking-[0.1em] text-text-secondary">
						Agent status
					</p>
					<div className="mt-3 flex items-center gap-2">
						<span className="inline-flex items-center gap-1 rounded-full border border-transparent bg-accent-subtle px-3 py-1 text-xs font-bold text-accent">
							Active
						</span>
						<span className="text-sm text-text-secondary">3 agents running</span>
					</div>
					<div className="mt-2 flex items-center gap-2">
						<span className="inline-flex items-center gap-1 rounded-full border border-transparent bg-yellow-subtle px-3 py-1 text-xs font-bold text-amber-700">
							2 pending
						</span>
						<span className="text-sm text-text-secondary">Awaiting approval</span>
					</div>
				</div>
			</aside>
			<div className="flex min-w-0 flex-col">
				<header className="flex flex-col gap-4 border-b border-border px-6 py-4 md:flex-row md:items-center md:justify-between">
					<div>
						<h1 className="m-0 font-display text-[1.2rem] font-extrabold tracking-[-0.02em]">
							Dashboard
						</h1>
					</div>
					<div className="flex flex-wrap items-center gap-3">
						<span className="inline-flex items-center gap-1 rounded-full border border-transparent bg-accent-subtle px-3 py-1 text-xs font-bold text-accent">
							All systems normal
						</span>
						<Link
							href="/settings"
							className="inline-flex min-h-10 items-center justify-center gap-1 rounded-xs border border-border bg-transparent px-5 py-2.5 text-sm font-bold text-text transition duration-150 hover:-translate-y-px hover:bg-black/5 hover:shadow-md focus-visible:outline-none"
						>
							Settings
						</Link>
					</div>
				</header>
				<main className="min-w-0 p-6">{children}</main>
			</div>
		</div>
	);
}
