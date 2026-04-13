import Link from "next/link";

const connectors = [
	{ name: "Gmail", state: "Connected", detail: "Email intake is active." },
	{ name: "Google Drive", state: "Connected", detail: "Document reads are available." },
	{ name: "Google Calendar", state: "Pending", detail: "Scheduling permissions need approval." },
	{ name: "QuickBooks", state: "Needs reauth", detail: "Refresh the accounting token." },
	{ name: "Greenhouse", state: "Connected", detail: "Recruiting workflow lane is live." },
];

export default function IntegrationsPage() {
	return (
		<section className="pt-12">
			<div className="max-w-[44rem]">
				<p className="mb-2 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-accent">
					Integrations
				</p>
				<h2 className="font-display text-[clamp(1.8rem,3vw,2.8rem)] font-extrabold leading-[1.05] tracking-[-0.035em]">
					Connect the systems that feed and receive workflow state.
				</h2>
				<p className="mt-3 text-base leading-6 text-text-secondary">
					The hub is organized by operational impact so the most important systems show up first.
				</p>
			</div>
			<div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
				{connectors.map((connector) => {
					const stateClass =
						connector.state === "Connected"
							? "bg-accent-subtle text-accent"
							: connector.state === "Pending"
								? "bg-yellow-subtle text-amber-700"
								: "bg-red-subtle text-red";

					return (
						<article
							key={connector.name}
							className="rounded-lg border border-border bg-surface p-6 shadow-sm"
						>
							<div className="flex items-start justify-between gap-4">
								<h3 className="m-0 font-display text-base font-bold tracking-[-0.01em]">
									{connector.name}
								</h3>
								<span
									className={`inline-flex items-center gap-1 rounded-full border border-transparent px-3 py-1 text-xs font-bold ${stateClass}`}
								>
									{connector.state}
								</span>
							</div>
							<p className="m-0 mt-3 text-sm leading-6 text-text-secondary">{connector.detail}</p>
						</article>
					);
				})}
			</div>
			<div className="mt-8 flex flex-col items-start gap-4 rounded-lg border border-border bg-surface-hover p-5 md:flex-row md:items-center md:justify-between">
				<p className="m-0 max-w-[42rem] text-sm leading-6 text-text-secondary">
					The MVP connector set centers on email, docs, calendar, finance, HR, and recruiting first.
				</p>
				<div className="flex flex-wrap gap-3">
					<Link
						href="/policies"
						className="inline-flex min-h-10 items-center justify-center rounded-xs border border-transparent bg-text px-5 py-2.5 text-sm font-bold text-bg transition duration-150 hover:-translate-y-px hover:opacity-90 hover:shadow-md focus-visible:outline-none"
					>
						Check policy mapping
					</Link>
					<Link
						href="/security"
						className="inline-flex min-h-10 items-center justify-center rounded-xs border border-transparent bg-accent px-5 py-2.5 text-sm font-bold text-white transition duration-150 hover:-translate-y-px hover:bg-accent-hover hover:shadow-md focus-visible:outline-none"
					>
						Review controls
					</Link>
				</div>
			</div>
		</section>
	);
}
