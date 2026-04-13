import Link from "next/link";

const settingsSections = [
	{
		title: "Profile",
		copy: "Update personal details, email, and name used across the workspace.",
	},
	{
		title: "Workspace",
		copy: "Control timezone, language, and the operating context for shared work.",
	},
	{
		title: "Security",
		copy: "Review sessions, trusted devices, and secure action preferences.",
	},
];

export default function SettingsPage() {
	return (
		<section className="section section--tight">
			<div className="section-heading">
				<p className="eyebrow">Settings</p>
				<h2 className="section-title">
					Account and workspace preferences stay close to the rest of the shell.
				</h2>
				<p className="section-copy">
					The settings view is a placeholder for the later account, security, and enterprise control
					flows.
				</p>
			</div>
			<div className="console-grid">
				{settingsSections.map((section) => (
					<article key={section.title} className="console-column">
						<div className="panel-header">
							<div>
								<p className="eyebrow">{section.title}</p>
								<h3 className="panel-title">{section.title}</h3>
							</div>
							<span className="chip">Ready</span>
						</div>
						<p className="console-item__copy">{section.copy}</p>
						<div className="stack">
							<div className="detail-chip">
								<p className="detail-chip__label">Status</p>
								<p className="detail-chip__value">Visible</p>
							</div>
							<div className="detail-chip">
								<p className="detail-chip__label">Next step</p>
								<p className="detail-chip__value">Wire in shared auth</p>
							</div>
						</div>
					</article>
				))}
			</div>
			<div className="section-band">
				<p className="section-band__copy">
					Need to switch surfaces? Jump back to the workspace or billing views.
				</p>
				<div className="workspace-actions">
					<Link href="/workspace" className="button button--primary">
						Open workspace
					</Link>
					<Link href="/billing" className="button button--secondary">
						Open billing
					</Link>
				</div>
			</div>
		</section>
	);
}
