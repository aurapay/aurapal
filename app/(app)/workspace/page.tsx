import Link from "next/link";

const queueItems = [
	{
		title: "AP exception",
		copy: "Invoice differs from the expected amount and needs review.",
		status: "Pending",
	},
	{
		title: "HR onboarding",
		copy: "Starter checklist is waiting for a laptop and account setup.",
		status: "Drafted",
	},
	{
		title: "Recruiting follow-up",
		copy: "Candidate summary is ready to route to the hiring manager.",
		status: "Ready",
	},
	{
		title: "Schedule change",
		copy: "Meeting update needs approval before it is sent downstream.",
		status: "Blocked",
	},
];

const recordSteps = [
	{
		title: "Source input",
		copy: "Email attachment, summary note, and extracted fields are in the same record.",
	},
	{
		title: "Policy result",
		copy: "Threshold, approver, and exception checks are visible before action.",
	},
	{
		title: "Execution",
		copy: "The request is ready to act or send back with a clear reason.",
	},
	{
		title: "Reconciliation",
		copy: "Completion state, audit trail, and downstream status stay in sync.",
	},
];

const auditTrail = [
	"09:12 - invoice intake logged",
	"09:14 - duplicate check passed",
	"09:16 - approver routing resolved",
	"09:22 - action drafted for review",
];

export default function WorkspacePage() {
	return (
		<section className="section section--tight">
			<div className="section-heading">
				<p className="eyebrow">Workspace</p>
				<h2 className="section-title">Daily work is a queue, a record, and an audit trail.</h2>
				<p className="section-copy">
					This shell makes the operating model obvious: items arrive, get checked, move to approval,
					and close out with a visible result.
				</p>
			</div>
			<div className="console-grid">
				<div className="console-column">
					<div className="panel-header">
						<div>
							<p className="eyebrow">Queue</p>
							<h3 className="panel-title">Active items</h3>
						</div>
						<span className="chip chip--warning">2 blockers</span>
					</div>
					{queueItems.map((item) => (
						<article key={item.title} className="console-item">
							<div className="panel-header">
								<h4 className="console-item__title">{item.title}</h4>
								<span
									className={`status ${item.status === "Pending" ? "status--warning" : item.status === "Blocked" ? "status--danger" : "status--success"}`}
								>
									{item.status}
								</span>
							</div>
							<p className="console-item__copy">{item.copy}</p>
						</article>
					))}
				</div>
				<div className="console-column">
					<div className="panel-header">
						<div>
							<p className="eyebrow">Selected record</p>
							<h3 className="panel-title">Invoice 2418</h3>
						</div>
						<span className="chip chip--success">Ready to approve</span>
					</div>
					<p className="app-copy">
						The record view keeps the source, extracted data, policy decision, and final action
						together on one page.
					</p>
					<div className="stack">
						{recordSteps.map((step, index) => (
							<div key={step.title} className="stack-item">
								<div className="panel-header">
									<p className="stack-item__title">{step.title}</p>
									<span className="chip">0{index + 1}</span>
								</div>
								<p className="stack-item__copy">{step.copy}</p>
							</div>
						))}
					</div>
					<div className="workspace-actions">
						<Link href="/policies" className="button button--secondary">
							Review policy
						</Link>
						<button type="button" className="button button--primary">
							Approve
						</button>
					</div>
				</div>
				<div className="console-column">
					<div className="panel-header">
						<div>
							<p className="eyebrow">Audit</p>
							<h3 className="panel-title">Record trail</h3>
						</div>
						<span className="chip chip--blue">Visible</span>
					</div>
					<div className="stack">
						{auditTrail.map((line) => (
							<div key={line} className="console-item">
								<p className="console-item__copy">{line}</p>
							</div>
						))}
					</div>
					<div className="panel panel--hero">
						<p className="eyebrow">Completion</p>
						<p className="metric-value">72%</p>
						<p className="metric-label">One approval and one reconciliation step remain.</p>
					</div>
				</div>
			</div>
		</section>
	);
}
