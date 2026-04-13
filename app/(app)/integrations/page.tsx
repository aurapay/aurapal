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
		<section className="section section--tight">
			<div className="section-heading">
				<p className="eyebrow">Integrations</p>
				<h2 className="section-title">Connect the systems that feed and receive workflow state.</h2>
				<p className="section-copy">
					The hub is organized by operational impact so the most important systems show up first.
				</p>
			</div>
			<div className="feature-grid">
				{connectors.map((connector) => (
					<article key={connector.name} className="feature-card">
						<div className="panel-header">
							<h3 className="feature-card__title">{connector.name}</h3>
							<span
								className={`status ${
									connector.state === "Connected"
										? "status--success"
										: connector.state === "Pending"
											? "status--warning"
											: "status--danger"
								}`}
							>
								{connector.state}
							</span>
						</div>
						<p className="feature-card__copy">{connector.detail}</p>
					</article>
				))}
			</div>
			<div className="section-band">
				<p className="section-band__copy">
					The MVP connector set centers on email, docs, calendar, finance, HR, and recruiting first.
				</p>
				<div className="workspace-actions">
					<Link href="/policies" className="button button--secondary">
						Check policy mapping
					</Link>
					<Link href="/security" className="button button--primary">
						Review controls
					</Link>
				</div>
			</div>
		</section>
	);
}
