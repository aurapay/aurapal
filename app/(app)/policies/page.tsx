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
		<section className="pt-12">
			<div className="max-w-[44rem]">
				<p className="mb-2 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-accent">
					Policies
				</p>
				<h2 className="font-display text-[clamp(1.8rem,3vw,2.8rem)] font-extrabold leading-[1.05] tracking-[-0.035em]">
					Approval rules, routing rules, and exceptions stay human-readable.
				</h2>
				<p className="mt-3 text-base leading-6 text-text-secondary">
					The policy surface mirrors the checklist: thresholds, approvers, fallbacks, and exceptions
					all stay visible.
				</p>
			</div>
			<div className="mt-10 grid gap-6 md:grid-cols-3">
				{rules.map((rule) => (
					<article
						key={rule.name}
						className="rounded-lg border border-border bg-surface p-6 shadow-sm"
					>
						<p className="mb-2 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-accent">
							Rule
						</p>
						<h3 className="m-0 font-display text-base font-bold tracking-[-0.01em]">{rule.name}</h3>
						<p className="m-0 mt-3 text-sm leading-6 text-text-secondary">{rule.detail}</p>
					</article>
				))}
			</div>
			<div className="mt-10 overflow-hidden rounded-lg border border-border bg-surface shadow-sm">
				<div className="flex flex-col gap-4 border-b border-border px-6 py-5 md:flex-row md:items-center md:justify-between">
					<div>
						<p className="mb-2 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-accent">
							Routing preview
						</p>
						<h3 className="m-0 font-display text-base font-bold tracking-[-0.01em]">
							Policy templates by lane
						</h3>
					</div>
					<Link
						href="/workspace"
						className="inline-flex min-h-10 items-center justify-center rounded-xs border border-border bg-transparent px-5 py-2.5 text-sm font-bold text-text transition duration-150 hover:-translate-y-px hover:bg-black/5 hover:shadow-md focus-visible:outline-none"
					>
						View record flow
					</Link>
				</div>
				<table className="min-w-full border-collapse">
					<thead>
						<tr className="border-b border-border bg-surface-hover">
							<th className="px-6 py-4 text-left text-xs font-extrabold uppercase tracking-[0.08em] text-text-secondary">
								Lane
							</th>
							<th className="px-6 py-4 text-left text-xs font-extrabold uppercase tracking-[0.08em] text-text-secondary">
								Route
							</th>
							<th className="px-6 py-4 text-left text-xs font-extrabold uppercase tracking-[0.08em] text-text-secondary">
								Status
							</th>
						</tr>
					</thead>
					<tbody>
						{policyRows.map((row) => (
							<tr key={row.lane} className="border-b border-border last:border-b-0">
								<td className="px-6 py-4 text-sm text-text">{row.lane}</td>
								<td className="px-6 py-4 text-sm text-text-secondary">{row.route}</td>
								<td className="px-6 py-4 text-sm text-text-secondary">{row.state}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
}
