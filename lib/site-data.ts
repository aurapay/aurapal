export type PublicNavLink = {
	label: string;
	href: string;
};

export type FooterColumn = {
	title: string;
	links: PublicNavLink[];
};

export const publicNavLinks: PublicNavLink[] = [
	{ label: "Product", href: "/#agents" },
	{ label: "Solutions", href: "/solutions" },
	{ label: "Customers", href: "/customers" },
	{ label: "Pricing", href: "/pricing" },
	{ label: "Security", href: "/security" },
];

export const appNavLinks: PublicNavLink[] = [
	{ label: "Workspace", href: "/workspace" },
	{ label: "Billing", href: "/billing" },
	{ label: "Integrations", href: "/integrations" },
	{ label: "Policies", href: "/policies" },
	{ label: "Settings", href: "/settings" },
];

export const heroMetrics = [
	{
		value: "85%",
		label: "less manual work",
		detail: "Invoice, onboarding, and scheduling tasks",
	},
	{
		value: "12x",
		label: "faster approvals",
		detail: "Policies route requests to the right approver",
	},
	{
		value: "$240k",
		label: "saved yearly",
		detail: "Typical enterprise savings in year one",
	},
];

export const logoNames = [
	"Notion",
	"Linear",
	"Ramp",
	"Gusto",
	"Mercury",
	"Brex",
	"Deel",
	"Rippling",
];

export const agents = [
	{
		title: "Invoice Agent",
		copy: "Reads invoices, checks POs, and routes approvals fast.",
		icon: "receipt",
		stat: "4.2s avg processing",
	},
	{
		title: "Payments Agent",
		copy: "Validates batches and stages payments with audit trails.",
		icon: "banknotes",
		stat: "Zero manual entry",
	},
	{
		title: "HR Onboarding Agent",
		copy: "Sets up new hires, accounts, and Day 1 checklists.",
		icon: "user-plus",
		stat: "3hr → 8min onboarding",
	},
	{
		title: "Recruiting Agent",
		copy: "Screens resumes, summarizes candidates, and schedules interviews.",
		icon: "briefcase",
		stat: "500+ resumes/day",
	},
	{
		title: "Scheduling Agent",
		copy: "Coordinates calendars, confirms meetings, and handles reschedules.",
		icon: "calendar",
		stat: "92% first-try booking",
	},
	{
		title: "Expense Agent",
		copy: "Captures receipts, flags issues, and prepares reimbursements.",
		icon: "credit-card",
		stat: "$0 in missed receipts",
	},
];

export const howItWorks = [
	{
		step: "01",
		title: "Connect your tools",
		copy: "Link email, HR, finance, and calendar tools in minutes.",
	},
	{
		step: "02",
		title: "Set your policies",
		copy: "Define approvals and routing in plain English.",
	},
	{
		step: "03",
		title: "Agents go to work",
		copy: "They process tasks, flag exceptions, and route decisions.",
	},
	{
		step: "04",
		title: "Approve with confidence",
		copy: "See the context, then approve with confidence.",
	},
];

export const useCases = [
	{
		title: "Finance teams",
		copy: "Automate invoices, payments, and expenses with policy checks.",
		stats: [
			{ value: "94%", label: "touchless invoices" },
			{ value: "2.1 days", label: "faster close" },
		],
	},
	{
		title: "People operations",
		copy: "Handle onboarding, offboarding, and lifecycle admin automatically.",
		stats: [
			{ value: "67%", label: "less admin time" },
			{ value: "100%", label: "compliance rate" },
		],
	},
	{
		title: "Executive assistants",
		copy: "Keep scheduling, travel, and follow-ups moving without back-and-forth.",
		stats: [
			{ value: "8hrs", label: "saved weekly" },
			{ value: "0", label: "scheduling conflicts" },
		],
	},
];

export const trustSignals = [
	{
		title: "SOC 2 Type II",
		copy: "Audited yearly against enterprise controls.",
	},
	{
		title: "End-to-end encryption",
		copy: "Data is encrypted in transit and at rest.",
	},
	{
		title: "Full audit trail",
		copy: "Every action is logged with source and outcome.",
	},
	{
		title: "Role-based access",
		copy: "Operators, approvers, and admins see only what they need.",
	},
	{
		title: "Human-in-the-loop",
		copy: "Sensitive actions stay behind explicit approval.",
	},
	{
		title: "Data residency",
		copy: "Choose US, EU, or custom deployment regions.",
	},
];

export const pricingPlans = [
	{
		title: "Starter",
		price: "$49",
		period: "/seat/mo",
		copy: "For small teams automating first workflows.",
		features: [
			"3 agents",
			"1,000 runs/mo",
			"5 teammates",
			"Email and calendar",
			"Basic approvals",
			"7-day audit log",
		],
		cta: "Start free trial",
		featured: false,
	},
	{
		title: "Business",
		price: "$149",
		period: "/seat/mo",
		copy: "For growing teams that need full coverage.",
		features: [
			"All 6 agents",
			"10,000 runs/mo",
			"Unlimited teammates",
			"30+ integrations",
			"Custom rules",
			"90-day audit log",
			"Priority support",
		],
		cta: "Start free trial",
		featured: true,
	},
	{
		title: "Enterprise",
		price: "Custom",
		period: "",
		copy: "For teams with complex compliance and scale needs.",
		features: [
			"Unlimited agents and runs",
			"Custom training",
			"SSO and SCIM",
			"Dedicated success manager",
			"Custom data residency",
			"Unlimited audit history",
			"SLA & BAA available",
		],
		cta: "Talk to sales",
		featured: false,
	},
];

export const footerColumns: FooterColumn[] = [
	{
		title: "Product",
		links: [
			{ label: "AI Agents", href: "/#agents" },
			{ label: "How it works", href: "/#how-it-works" },
			{ label: "Integrations", href: "/integrations" },
			{ label: "Security", href: "/security" },
		],
	},
	{
		title: "Solutions",
		links: [
			{ label: "Finance teams", href: "/solutions#finance" },
			{ label: "People operations", href: "/solutions#people-ops" },
			{ label: "Executive assistants", href: "/solutions#exec-assistants" },
			{ label: "IT & procurement", href: "/solutions#it-procurement" },
		],
	},
	{
		title: "Company",
		links: [
			{ label: "Customers", href: "/customers" },
			{ label: "Pricing", href: "/pricing" },
			{ label: "Book a demo", href: "/book-demo" },
			{ label: "Blog", href: "#" },
			{ label: "Careers", href: "#" },
		],
	},
	{
		title: "Resources",
		links: [
			{ label: "Documentation", href: "#" },
			{ label: "API reference", href: "#" },
			{ label: "Changelog", href: "#" },
			{ label: "Status", href: "#" },
		],
	},
];

export const solutions = [
	{
		id: "finance",
		title: "Finance teams",
		headline: "Close the books faster.",
		copy: "Automate invoices, payments, and expenses with built-in policy checks.",
		agents: ["Invoice Agent", "Payments Agent", "Expense Agent"],
		stats: [
			{ value: "94%", label: "touchless invoices" },
			{ value: "2.1 days", label: "faster close" },
			{ value: "$240k", label: "saved yearly" },
		],
		workflows: [
			"Invoice matching and exception handling",
			"Payment batch prep and approval routing",
			"Receipt capture and policy checks",
		],
	},
	{
		id: "people-ops",
		title: "People operations",
		headline: "Onboard faster with less admin.",
		copy: "Handle onboarding, offboarding, and employee changes automatically.",
		agents: ["HR Onboarding Agent", "Recruiting Agent"],
		stats: [
			{ value: "67%", label: "less admin" },
			{ value: "3hr → 8min", label: "onboarding setup" },
			{ value: "100%", label: "compliance" },
		],
		workflows: [
			"Onboarding checklists and account setup",
			"Resume screening and candidate summaries",
			"Offboarding tasks and access removal",
		],
	},
	{
		id: "exec-assistants",
		title: "Executive assistants",
		headline: "Keep calendars moving.",
		copy: "Handle scheduling, travel, prep, and follow-up without back-and-forth.",
		agents: ["Scheduling Agent"],
		stats: [
			{ value: "8hrs", label: "saved weekly" },
			{ value: "92%", label: "first-try booking rate" },
			{ value: "0", label: "scheduling conflicts" },
		],
		workflows: [
			"Cross-calendar scheduling with constraints",
			"Meeting briefs and follow-up tracking",
			"Travel coordination and changes",
		],
	},
	{
		id: "it-procurement",
		title: "IT & procurement",
		headline: "Enforce policy on every request.",
		copy: "Route purchases, renewals, and approvals through the right chain.",
		agents: ["Invoice Agent", "Payments Agent"],
		stats: [
			{ value: "75%", label: "faster procurement" },
			{ value: "100%", label: "policy-compliant approvals" },
			{ value: "$180k", label: "waste removed" },
		],
		workflows: [
			"Purchase requests and budget checks",
			"Multi-level approval routing",
			"Renewal tracking and reminders",
		],
	},
];

export const customerStories = [
	{
		company: "Meridian Capital",
		industry: "Financial Services",
		size: "240 employees",
		quote:
			"We went from six people touching invoices to zero. MyAuraPal now handles 94% automatically.",
		author: "Sarah Chen",
		role: "VP of Finance",
		stats: [
			{ value: "94%", label: "touchless rate" },
			{ value: "$312k", label: "saved annually" },
			{ value: "4.2s", label: "avg processing" },
		],
	},
	{
		company: "Vantage Health",
		industry: "Healthcare",
		size: "1,200 employees",
		quote: "Onboarding dropped from hours to minutes. We scaled without adding HR headcount.",
		author: "Marcus Williams",
		role: "Head of People",
		stats: [
			{ value: "47", label: "hires onboarded" },
			{ value: "8min", label: "avg onboarding" },
			{ value: "100%", label: "compliance" },
		],
	},
	{
		company: "Lattice Labs",
		industry: "Technology",
		size: "85 employees",
		quote: "Our EA stopped spending half the day on scheduling. Conflicts are gone.",
		author: "James Park",
		role: "CEO",
		stats: [
			{ value: "8hrs", label: "saved weekly" },
			{ value: "92%", label: "first-try booking" },
			{ value: "0", label: "conflicts" },
		],
	},
	{
		company: "Atlas Logistics",
		industry: "Supply Chain",
		size: "650 employees",
		quote: "MyAuraPal caught duplicate payments in week one. The ROI was immediate.",
		author: "Lisa Nakamura",
		role: "CFO",
		stats: [
			{ value: "2,000+", label: "invoices/mo" },
			{ value: "$42k", label: "saved in week 1" },
			{ value: "12x", label: "faster approvals" },
		],
	},
];

export const integrationPartners = [
	{ name: "Gmail", category: "Communication" },
	{ name: "Outlook", category: "Communication" },
	{ name: "Slack", category: "Communication" },
	{ name: "Google Calendar", category: "Scheduling" },
	{ name: "Outlook Calendar", category: "Scheduling" },
	{ name: "Google Drive", category: "Storage" },
	{ name: "Dropbox", category: "Storage" },
	{ name: "QuickBooks", category: "Finance" },
	{ name: "Xero", category: "Finance" },
	{ name: "NetSuite", category: "Finance" },
	{ name: "Ramp", category: "Finance" },
	{ name: "Bill.com", category: "Finance" },
	{ name: "Gusto", category: "HR" },
	{ name: "Rippling", category: "HR" },
	{ name: "BambooHR", category: "HR" },
	{ name: "Workday", category: "HR" },
	{ name: "Greenhouse", category: "Recruiting" },
	{ name: "Lever", category: "Recruiting" },
	{ name: "Ashby", category: "Recruiting" },
	{ name: "Jira", category: "Project Management" },
	{ name: "Linear", category: "Project Management" },
	{ name: "Asana", category: "Project Management" },
	{ name: "Notion", category: "Knowledge" },
	{ name: "Confluence", category: "Knowledge" },
	{ name: "Okta", category: "Identity" },
	{ name: "DocuSign", category: "E-Signature" },
	{ name: "Salesforce", category: "CRM" },
	{ name: "HubSpot", category: "CRM" },
	{ name: "Stripe", category: "Payments" },
	{ name: "Brex", category: "Finance" },
];
