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
		detail: "Across invoice processing, onboarding, and scheduling tasks",
	},
	{
		value: "12x",
		label: "faster approvals",
		detail: "Agents pre-check policies and route to the right approver",
	},
	{
		value: "$240k",
		label: "saved per year",
		detail: "Average enterprise savings in the first 12 months",
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
		copy: "Reads invoices from email, extracts line items, checks against purchase orders, and routes for approval — without human intervention.",
		icon: "receipt",
		stat: "4.2s avg processing",
	},
	{
		title: "Payments Agent",
		copy: "Prepares payment batches, validates against approval policies, and stages disbursements with full audit trails.",
		icon: "banknotes",
		stat: "Zero manual entry",
	},
	{
		title: "HR Onboarding Agent",
		copy: "Creates checklists, provisions accounts, assigns equipment, and tracks every step from offer acceptance to Day 1.",
		icon: "user-plus",
		stat: "3hr → 8min onboarding",
	},
	{
		title: "Recruiting Agent",
		copy: "Screens resumes, drafts candidate summaries, schedules interviews, and keeps hiring managers in sync automatically.",
		icon: "briefcase",
		stat: "500+ resumes/day",
	},
	{
		title: "Scheduling Agent",
		copy: "Coordinates across calendars, respects constraints, sends confirmations, and handles reschedules without back-and-forth.",
		icon: "calendar",
		stat: "92% first-try booking",
	},
	{
		title: "Expense Agent",
		copy: "Captures receipts, categorizes spend, flags policy violations, and prepares reimbursements for one-click approval.",
		icon: "credit-card",
		stat: "$0 in missed receipts",
	},
];

export const howItWorks = [
	{
		step: "01",
		title: "Connect your tools",
		copy: "Link Gmail, Slack, QuickBooks, your HRIS, and 30+ other systems. Agents start learning your workflows immediately.",
	},
	{
		step: "02",
		title: "Set your policies",
		copy: "Define approval thresholds, routing rules, and escalation paths in plain English. No code required.",
	},
	{
		step: "03",
		title: "Agents go to work",
		copy: "Tasks flow in automatically. Agents read, extract, validate, and route — surfacing only what needs human judgment.",
	},
	{
		step: "04",
		title: "Approve with confidence",
		copy: "Every action includes full context: source documents, policy checks, extracted data, and a recommended decision.",
	},
];

export const useCases = [
	{
		title: "Finance teams",
		copy: "Automate invoice processing, payment approvals, expense reports, and vendor management. Your agents handle the volume; your team handles the judgment calls.",
		stats: [
			{ value: "94%", label: "touchless invoices" },
			{ value: "2.1 days", label: "faster close" },
		],
	},
	{
		title: "People operations",
		copy: "From offer letters to offboarding checklists, agents manage the operational load so your team can focus on culture and strategy.",
		stats: [
			{ value: "67%", label: "less admin time" },
			{ value: "100%", label: "compliance rate" },
		],
	},
	{
		title: "Executive assistants",
		copy: "Scheduling, travel coordination, meeting prep, and follow-ups. Agents handle the logistics while EAs handle relationships.",
		stats: [
			{ value: "8hrs", label: "saved weekly" },
			{ value: "0", label: "scheduling conflicts" },
		],
	},
];

export const trustSignals = [
	{
		title: "SOC 2 Type II",
		copy: "Annual independent audits verify our security controls meet enterprise standards.",
	},
	{
		title: "End-to-end encryption",
		copy: "Data is encrypted in transit and at rest. Agent actions never expose raw credentials.",
	},
	{
		title: "Full audit trail",
		copy: "Every agent action is logged with source input, decision reasoning, and outcome.",
	},
	{
		title: "Role-based access",
		copy: "Operators, approvers, and admins see only what they need. Granular permissions at every level.",
	},
	{
		title: "Human-in-the-loop",
		copy: "Agents recommend. Humans decide. Sensitive actions always require explicit approval.",
	},
	{
		title: "Data residency",
		copy: "Choose where your data lives. US, EU, and custom deployment regions for enterprise.",
	},
];

export const pricingPlans = [
	{
		title: "Starter",
		price: "$49",
		period: "/seat/mo",
		copy: "For small teams automating their first workflows.",
		features: [
			"3 AI agents included",
			"1,000 agent runs/month",
			"5 team members",
			"Email + calendar integrations",
			"Basic approval workflows",
			"7-day audit history",
		],
		cta: "Start free trial",
		featured: false,
	},
	{
		title: "Business",
		price: "$149",
		period: "/seat/mo",
		copy: "For growing teams that need full operational coverage.",
		features: [
			"All 6 AI agents",
			"10,000 agent runs/month",
			"Unlimited team members",
			"All 30+ integrations",
			"Custom policies & rules",
			"90-day audit history",
			"Priority support",
		],
		cta: "Start free trial",
		featured: true,
	},
	{
		title: "Enterprise",
		price: "Custom",
		period: "",
		copy: "For organizations with complex compliance and scale needs.",
		features: [
			"Unlimited agents & runs",
			"Custom agent training",
			"SSO & SCIM provisioning",
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
		headline: "Close the books faster with agents that never sleep.",
		copy: "Invoice processing, payment approvals, expense reports, and vendor management — handled automatically with full audit trails and policy compliance.",
		agents: ["Invoice Agent", "Payments Agent", "Expense Agent"],
		stats: [
			{ value: "94%", label: "touchless invoices" },
			{ value: "2.1 days", label: "faster month-end close" },
			{ value: "$240k", label: "saved per year" },
		],
		workflows: [
			"3-way invoice matching against POs and receipts",
			"Automated payment batch preparation and approval routing",
			"Receipt capture, categorization, and policy violation flagging",
			"Vendor onboarding document collection and verification",
		],
	},
	{
		id: "people-ops",
		title: "People operations",
		headline: "From offer letter to Day 1, on autopilot.",
		copy: "Agents manage the operational load of onboarding, offboarding, and employee lifecycle events so your team can focus on culture and strategy.",
		agents: ["HR Onboarding Agent", "Recruiting Agent"],
		stats: [
			{ value: "67%", label: "less admin time" },
			{ value: "3hr → 8min", label: "onboarding setup" },
			{ value: "100%", label: "compliance rate" },
		],
		workflows: [
			"Automated onboarding checklists with account provisioning",
			"Resume screening with candidate summary generation",
			"Interview scheduling across multiple calendars",
			"Offboarding task tracking and access revocation",
		],
	},
	{
		id: "exec-assistants",
		title: "Executive assistants",
		headline: "Handle the logistics. Focus on the relationships.",
		copy: "Scheduling, travel coordination, meeting prep, and follow-ups. Agents handle the back-and-forth while EAs handle what matters.",
		agents: ["Scheduling Agent"],
		stats: [
			{ value: "8hrs", label: "saved weekly per EA" },
			{ value: "92%", label: "first-try booking rate" },
			{ value: "0", label: "scheduling conflicts" },
		],
		workflows: [
			"Cross-calendar scheduling with constraint awareness",
			"Meeting prep briefs with attendee context",
			"Automated follow-up and action item tracking",
			"Travel itinerary coordination and change management",
		],
	},
	{
		id: "it-procurement",
		title: "IT & procurement",
		headline: "Procurement workflows that enforce policy by default.",
		copy: "Purchase requests, vendor approvals, license management, and contract renewals — routed through the right approval chains automatically.",
		agents: ["Invoice Agent", "Payments Agent"],
		stats: [
			{ value: "75%", label: "faster procurement cycles" },
			{ value: "100%", label: "policy-compliant approvals" },
			{ value: "$180k", label: "in waste eliminated" },
		],
		workflows: [
			"Purchase request intake and budget validation",
			"Multi-level approval routing based on spend thresholds",
			"Contract renewal tracking with auto-reminders",
			"License usage monitoring and optimization recommendations",
		],
	},
];

export const customerStories = [
	{
		company: "Meridian Capital",
		industry: "Financial Services",
		size: "240 employees",
		quote:
			"We went from 6 people touching every invoice to zero. MyAuraPal's agents process 94% of our invoices without any human intervention.",
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
		quote:
			"Onboarding used to take our HR team 3 hours per new hire. Now the agent handles everything in under 8 minutes. We onboarded 47 people last quarter without adding headcount.",
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
		quote:
			"Our EA was spending half her day just coordinating schedules. The Scheduling Agent handles all of it now — zero conflicts in three months.",
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
		quote:
			"We process over 2,000 invoices a month. MyAuraPal caught $42k in duplicate payments in the first week alone. The ROI was immediate.",
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
