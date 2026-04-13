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
		<section className="pt-12">
			<div className="max-w-[44rem]">
				<p className="mb-2 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-accent">
					Workspace
				</p>
				<h2 className="font-display text-[clamp(1.8rem,3vw,2.8rem)] font-extrabold leading-[1.05] tracking-[-0.035em]">
					Daily work is a queue, a record, and an audit trail.
				</h2>
				<p className="mt-3 text-base leading-6 text-text-secondary">
					This shell makes the operating model obvious: items arrive, get checked, move to approval,
					and close out with a visible result.
				</p>
			</div>

			<div className="mt-10 grid gap-6 xl:grid-cols-3">
				<div className="rounded-lg border border-border bg-surface p-5 shadow-sm">
					<div className="flex items-start justify-between gap-4">
						<div>
							<p className="mb-2 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-accent">
								Queue
							</p>
							<h3 className="m-0 font-display text-base font-bold tracking-[-0.01em]">
								Active items
							</h3>
						</div>
						<span className="inline-flex items-center gap-1 rounded-full border border-transparent bg-yellow-subtle px-3 py-1 text-xs font-bold text-amber-700">
							2 blockers
						</span>
					</div>
					<div className="mt-4 grid gap-3">
						{queueItems.map((item) => {
							const statusClass =
								item.status === "Pending"
									? "bg-yellow-subtle text-amber-700"
									: item.status === "Blocked"
										? "bg-red-subtle text-red"
										: "bg-accent-subtle text-accent";

							return (
								<article
									key={item.title}
									className="rounded-sm border border-border bg-surface p-4 shadow-sm"
								>
									<div className="flex items-start justify-between gap-3">
										<h4 className="m-0 text-sm font-bold text-text">{item.title}</h4>
										<span
											className={`inline-flex items-center gap-1 rounded-full border border-transparent px-3 py-1 text-xs font-bold ${statusClass}`}
										>
											{item.status}
										</span>
									</div>
									<p className="m-0 mt-2 text-sm leading-6 text-text-secondary">{item.copy}</p>
								</article>
							);
						})}
					</div>
				</div>

				<div className="rounded-lg border border-border bg-surface p-5 shadow-sm">
					<div className="flex items-start justify-between gap-4">
						<div>
							<p className="mb-2 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-accent">
								Selected record
							</p>
							<h3 className="m-0 font-display text-base font-bold tracking-[-0.01em]">
								Invoice 2418
							</h3>
						</div>
						<span className="inline-flex items-center gap-1 rounded-full border border-transparent bg-accent-subtle px-3 py-1 text-xs font-bold text-accent">
							Ready to approve
						</span>
					</div>
					<p className="mt-4 text-sm leading-6 text-text-secondary">
						The record view keeps the source, extracted data, policy decision, and final action
						together on one page.
					</p>
					<div className="mt-4 grid gap-3">
						{recordSteps.map((step, index) => (
							<div
								key={step.title}
								className="rounded-sm border border-border bg-surface p-4 shadow-sm"
							>
								<div className="flex items-start justify-between gap-3">
									<p className="m-0 text-sm font-bold text-text">{step.title}</p>
									<span className="inline-flex items-center gap-1 rounded-full border border-border bg-surface-hover px-3 py-1 text-xs font-bold text-text-secondary">
										0{index + 1}
									</span>
								</div>
								<p className="m-0 mt-2 text-sm leading-6 text-text-secondary">{step.copy}</p>
							</div>
						))}
					</div>
					<div className="mt-5 flex flex-wrap gap-3">
						<Link
							href="/policies"
							className="inline-flex min-h-10 items-center justify-center rounded-xs border border-transparent bg-text px-5 py-2.5 text-sm font-bold text-bg transition duration-150 hover:-translate-y-px hover:opacity-90 hover:shadow-md focus-visible:outline-none"
						>
							Review policy
						</Link>
						<button
							type="button"
							className="inline-flex min-h-10 items-center justify-center rounded-xs border border-transparent bg-accent px-5 py-2.5 text-sm font-bold text-white transition duration-150 hover:-translate-y-px hover:bg-accent-hover hover:shadow-md focus-visible:outline-none"
						>
							Approve
						</button>
					</div>
				</div>

				<div className="rounded-lg border border-border bg-surface p-5 shadow-sm">
					<div className="flex items-start justify-between gap-4">
						<div>
							<p className="mb-2 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-accent">
								Audit
							</p>
							<h3 className="m-0 font-display text-base font-bold tracking-[-0.01em]">
								Record trail
							</h3>
						</div>
						<span className="inline-flex items-center gap-1 rounded-full border border-transparent bg-blue-subtle px-3 py-1 text-xs font-bold text-blue">
							Visible
						</span>
					</div>
					<div className="mt-4 grid gap-3">
						{auditTrail.map((line) => (
							<div key={line} className="rounded-sm border border-border bg-surface p-4 shadow-sm">
								<p className="m-0 text-sm leading-6 text-text-secondary">{line}</p>
							</div>
						))}
					</div>
					<div className="mt-5 rounded-lg border border-border bg-bg-dark p-5 text-text-dark">
						<p className="mb-2 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-accent">
							Completion
						</p>
						<p className="m-0 font-display text-[2rem] font-extrabold tracking-[-0.04em]">72%</p>
						<p className="m-0 mt-1 text-sm leading-6 text-text-dark-secondary">
							One approval and one reconciliation step remain.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
