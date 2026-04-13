import Link from "next/link";

const invoices = [
	{ id: "INV-2418", plan: "Subscription", amount: "Workspace base", status: "Paid" },
	{ id: "INV-2421", plan: "Usage-based", amount: "Throughput billing", status: "Due soon" },
	{ id: "INV-2427", plan: "Module add-on", amount: "Recruiting lane", status: "Pending" },
];

export default function BillingPage() {
	return (
		<section className="section section--tight">
			<div className="section-heading">
				<p className="eyebrow">Billing</p>
				<h2 className="section-title">Plans, usage, renewal state, and invoices share one view.</h2>
				<p className="section-copy">
					The billing shell makes the commercial model explicit without leaving the operations
					workspace.
				</p>
			</div>
			<div className="pricing-grid">
				<article className="pricing-card pricing-card--featured">
					<p className="pricing-card__step">Current plan</p>
					<h3 className="pricing-card__title">Operations workspace</h3>
					<p className="pricing-card__price">Predictable base</p>
					<p className="pricing-card__tag">Shared approvals, audit trail, and workflow modules.</p>
				</article>
				<article className="pricing-card">
					<p className="pricing-card__step">Renewal</p>
					<h3 className="pricing-card__title">Next cycle</h3>
					<p className="pricing-card__price">30 days</p>
					<p className="pricing-card__tag">
						Renewal date, payment status, and limits are visible together.
					</p>
				</article>
				<article className="pricing-card">
					<p className="pricing-card__step">Usage</p>
					<h3 className="pricing-card__title">Current throughput</h3>
					<p className="pricing-card__price">124 actions</p>
					<p className="pricing-card__tag">
						Billing can later map to workflow volume and module usage.
					</p>
				</article>
			</div>
			<div className="table-shell table-shell--tight section section--no-top">
				<div className="panel-header">
					<div>
						<p className="eyebrow">Invoices</p>
						<h3 className="panel-title">Recent activity</h3>
					</div>
					<Link href="/pricing" className="button button--ghost">
						Review packaging
					</Link>
				</div>
				<table className="data-table">
					<thead>
						<tr>
							<th>Invoice</th>
							<th>Plan</th>
							<th>Amount</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{invoices.map((invoice) => (
							<tr key={invoice.id}>
								<td>{invoice.id}</td>
								<td>{invoice.plan}</td>
								<td>{invoice.amount}</td>
								<td>{invoice.status}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
}
