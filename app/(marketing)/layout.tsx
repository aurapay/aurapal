import Link from "next/link";
import type { ReactNode } from "react";
import Image from "next/image";
import { footerColumns } from "@/lib/site-data";

const shellClass = "mx-auto max-w-[1200px] px-4 sm:px-6";

const legalLinks = [
	{ label: "Privacy policy", href: "#" },
	{ label: "Terms of service", href: "#" },
	{ label: "Cookie policy", href: "#" },
];

export default function MarketingLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<>
			{children}
			<footer className="mt-20 border-t border-border py-12">
				<div className={shellClass}>
					<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
						<div className="flex flex-col gap-4 lg:col-span-2 lg:pr-4">
							<Link
								href="/"
								className="inline-flex items-center gap-3 font-display text-[1.05rem] font-bold tracking-[-0.03em]"
							>
								<Image src="/logo.png" alt="AuraPal" width={40} height={40} className="h-10 w-10" />
								<span>AuraPal</span>
							</Link>
							<p className="max-w-sm text-sm leading-6 text-text-secondary">
								AI agents that automate your most repetitive corporate tasks — invoicing,
								onboarding, scheduling, and more.
							</p>
						</div>
						{footerColumns.map((column) => (
							<div key={column.title} className="flex flex-col gap-2">
								<p className="text-xs font-extrabold uppercase tracking-[0.1em] text-text">
									{column.title}
								</p>
								{column.links.map((link) => (
									<Link
										key={link.href}
										href={link.href}
										className="text-sm text-text-secondary transition-colors hover:text-text"
									>
										{link.label}
									</Link>
								))}
							</div>
						))}
					</div>
					<div className="flex items-center justify-between mt-8 border-t border-border pt-6">
						<p className="text-sm text-text-secondary">
							© {new Date().getFullYear()} AuraPal by AuraPay Inc. All rights reserved.
						</p>
						<div className="flex items-center gap-4">
							{legalLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className="text-sm text-text-secondary transition-colors hover:text-text"
								>
									{link.label}
								</Link>
							))}
						</div>

					</div>
				</div>
			</footer>
		</>
	);
}
