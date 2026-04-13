import Link from "next/link";

const invoices = [
	{ id: "INV-2418", plan: "Subscription", amount: "Workspace base", status: "Paid" },
	{ id: "INV-2421", plan: "Usage-based", amount: "Throughput billing", status: "Due soon" },
	{ id: "INV-2427", plan: "Module add-on", amount: "Recruiting lane", status: "Pending" },
];

export default function BillingPage() {
	return (
		<section className="pt-12">
			<div className="max-w-[44rem]">
				<p className="mb-2 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-accent">
					Billing
				</p>
				<h2 className="font-display text-[clamp(1.8rem,3vw,2.8rem)] font-extrabold leading-[1.05] tracking-[-0.035em]">
					Plans, usage, renewal state, and invoices share one view.
				</h2>
				<p className="mt-3 text-base leading-6 text-text-secondary">
					The billing shell makes the commercial model explicit without leaving the operations
					workspace.
				</p>
			</div>
			<div className="mt-10 grid gap-6 xl:grid-cols-3">
				<article className="rounded-lg border border-accent bg-surface p-6 shadow-md">
					<p className="mb-2 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-accent">
						Current plan
					</p>
					<h3 className="m-0 font-display text-[1.2rem] font-bold tracking-[-0.01em]">
						Operations workspace
					</h3>
					<p className="m-0 mt-2 font-display text-[2rem] font-extrabold tracking-[-0.04em]">
						Predictable base
					</p>
					<p className="m-0 mt-2 text-sm leading-6 text-text-secondary">
						Shared approvals, audit trail, and workflow modules.
					</p>
				</article>
				<article className="rounded-lg border border-border bg-surface p-6 shadow-sm">
					<p className="mb-2 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-accent">
						Renewal
					</p>
					<h3 className="m-0 font-display text-[1.2rem] font-bold tracking-[-0.01em]">
						Next cycle
					</h3>
					<p className="m-0 mt-2 font-display text-[2rem] font-extrabold tracking-[-0.04em]">
						30 days
					</p>
					<p className="m-0 mt-2 text-sm leading-6 text-text-secondary">
						Renewal date, payment status, and limits are visible together.
					</p>
				</article>
				<article className="rounded-lg border border-border bg-surface p-6 shadow-sm">
					<p className="mb-2 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-accent">
						Usage
					</p>
					<h3 className="m-0 font-display text-[1.2rem] font-bold tracking-[-0.01em]">
						Current throughput
					</h3>
					<p className="m-0 mt-2 font-display text-[2rem] font-extrabold tracking-[-0.04em]">
						124 actions
					</p>
					<p className="m-0 mt-2 text-sm leading-6 text-text-secondary">
						Billing can later map to workflow volume and module usage.
					</p>
				</article>
			</div>
			<div className="mt-10 overflow-hidden rounded-lg border border-border bg-surface shadow-sm">
				<div className="flex flex-col gap-4 border-b border-border px-6 py-5 md:flex-row md:items-center md:justify-between">
					<div>
						<p className="mb-2 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-accent">
							Invoices
						</p>
						<h3 className="m-0 font-display text-base font-bold tracking-[-0.01em]">
							Recent activity
						</h3>
					</div>
					<Link
						href="/pricing"
						className="inline-flex min-h-10 items-center justify-center rounded-xs border border-border bg-transparent px-5 py-2.5 text-sm font-bold text-text transition duration-150 hover:-translate-y-px hover:bg-black/5 hover:shadow-md focus-visible:outline-none"
					>
						Review packaging
					</Link>
				</div>
				<table className="min-w-full border-collapse">
					<thead>
						<tr className="border-b border-border bg-surface-hover">
							<th className="px-6 py-4 text-left text-xs font-extrabold uppercase tracking-[0.08em] text-text-secondary">
								Invoice
							</th>
							<th className="px-6 py-4 text-left text-xs font-extrabold uppercase tracking-[0.08em] text-text-secondary">
								Plan
							</th>
							<th className="px-6 py-4 text-left text-xs font-extrabold uppercase tracking-[0.08em] text-text-secondary">
								Amount
							</th>
							<th className="px-6 py-4 text-left text-xs font-extrabold uppercase tracking-[0.08em] text-text-secondary">
								Status
							</th>
						</tr>
					</thead>
					<tbody>
						{invoices.map((invoice) => (
							<tr key={invoice.id} className="border-b border-border last:border-b-0">
								<td className="px-6 py-4 text-sm text-text">{invoice.id}</td>
								<td className="px-6 py-4 text-sm text-text-secondary">{invoice.plan}</td>
								<td className="px-6 py-4 text-sm text-text-secondary">{invoice.amount}</td>
								<td className="px-6 py-4 text-sm text-text-secondary">{invoice.status}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
}
