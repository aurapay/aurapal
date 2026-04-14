import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const bodyFont = Manrope({
	subsets: ["latin"],
	variable: "--font-body",
});

const displayFont = Sora({
	subsets: ["latin"],
	variable: "--font-display",
});

export const metadata: Metadata = {
	title: "MyAuraPal | AI Agents for Office Workflows",
	description:
		"AI agents that automate finance, HR, and operations workflows with faster approvals and full audit trails.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en" className={`${bodyFont.variable} ${displayFont.variable} scroll-smooth`}>
			<body className="min-h-screen bg-bg text-text font-body antialiased selection:bg-accent/20 selection:text-text">
				{children}
			</body>
		</html>
	);
}
