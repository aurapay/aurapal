import Link from "next/link";

const rules = [
	{
		name: "Approval threshold",
		detail: "Amounts above the configured limit always require explicit approver review.",
	},
	{
		name: "Exception queue",
		detail: "Missing information, duplicates, and policy violations are routed for follow-up.",
	},
	{
		name: "Sensitive actions",
		detail: "Money-moving and account-changing actions stay behind secure confirmation.",
	},
];

const policyRows = [
	{ lane: "Invoicing", route: "Finance approver", state: "Active" },
	{ lane: "Payments", route: "Dual approval", state: "Active" },
	{ lane: "HR onboarding", route: "People ops", state: "Draft" },
	{ lane: "Recruiting", route: "Hiring manager", state: "Draft" },
];

export default function PoliciesPage() {
	return (
		<section className="section section--tight">
			<div className="section-heading">
				<p className="eyebrow">Policies</p>
				<h2 className="section-title">
					Approval rules, routing rules, and exceptions stay human-readable.
				</h2>
				<p className="section-copy">
					The policy surface mirrors the checklist: thresholds, approvers, fallbacks, and exceptions
					all stay visible.
				</p>
			</div>
			<div className="trust-grid">
				{rules.map((rule) => (
					<article key={rule.name} className="trust-card">
						<p className="trust-card__step">Rule</p>
						<h3 className="trust-card__title">{rule.name}</h3>
						<p className="trust-card__copy">{rule.detail}</p>
					</article>
				))}
			</div>
			<div className="table-shell table-shell--tight section section--no-top">
				<div className="panel-header">
					<div>
						<p className="eyebrow">Routing preview</p>
						<h3 className="panel-title">Policy templates by lane</h3>
					</div>
					<Link href="/workspace" className="button button--ghost">
						View record flow
					</Link>
				</div>
				<table className="data-table">
					<thead>
						<tr>
							<th>Lane</th>
							<th>Route</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{policyRows.map((row) => (
							<tr key={row.lane}>
								<td>{row.lane}</td>
								<td>{row.route}</td>
								<td>{row.state}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
}
