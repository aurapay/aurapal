import Link from "next/link";
import type { ReactNode } from "react";
import { footerColumns } from "@/lib/site-data";
import Image from "next/image";

export default function MarketingLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<>
			{children}
			<footer className="footer">
				<div className="shell">
					<div className="footer-grid">
						<div className="footer-column footer-column--brand">
							<Link href="/" className="brand">
								<Image src="/logo.png" alt="AuraPal" width={40} height={40} />
								<span>AuraPal</span>
							</Link>
							<p className="footer-note">
								AI agents that automate your most repetitive corporate tasks — invoicing,
								onboarding, scheduling, and more.
							</p>
						</div>
						{footerColumns.map((column) => (
							<div key={column.title} className="footer-column">
								<p className="footer-column__title">{column.title}</p>
								{column.links.map((link) => (
									<Link key={link.href} href={link.href} className="footer-link">
										{link.label}
									</Link>
								))}
							</div>
						))}
					</div>
					<div className="footer-bottom">
						<p className="footer-legal">
							© {new Date().getFullYear()} MyAuraPal, Inc. All rights reserved.
						</p>
					</div>
				</div>
			</footer>
		</>
	);
}
