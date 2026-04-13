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
		<section className="pt-12">
			<div className="max-w-[44rem]">
				<p className="mb-2 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-accent">
					Settings
				</p>
				<h2 className="font-display text-[clamp(1.8rem,3vw,2.8rem)] font-extrabold leading-[1.05] tracking-[-0.035em]">
					Account and workspace preferences stay close to the rest of the shell.
				</h2>
				<p className="mt-3 text-base leading-6 text-text-secondary">
					The settings view is a placeholder for the later account, security, and enterprise control
					flows.
				</p>
			</div>
			<div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
				{settingsSections.map((section) => (
					<article
						key={section.title}
						className="rounded-lg border border-border bg-surface p-6 shadow-sm"
					>
						<div className="flex items-start justify-between gap-4">
							<div>
								<p className="mb-2 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-accent">
									{section.title}
								</p>
								<h3 className="m-0 font-display text-base font-bold tracking-[-0.01em]">
									{section.title}
								</h3>
							</div>
							<span className="inline-flex items-center gap-1 rounded-full border border-transparent bg-accent-subtle px-3 py-1 text-xs font-bold text-accent">
								Ready
							</span>
						</div>
						<p className="mt-4 text-sm leading-6 text-text-secondary">{section.copy}</p>
						<div className="mt-5 grid gap-3">
							<div className="rounded-sm border border-border bg-surface-hover p-4">
								<p className="m-0 text-[0.72rem] font-extrabold uppercase tracking-[0.1em] text-text-secondary">
									Status
								</p>
								<p className="m-0 mt-1 text-sm font-bold text-text">Visible</p>
							</div>
							<div className="rounded-sm border border-border bg-surface-hover p-4">
								<p className="m-0 text-[0.72rem] font-extrabold uppercase tracking-[0.1em] text-text-secondary">
									Next step
								</p>
								<p className="m-0 mt-1 text-sm font-bold text-text">Wire in shared auth</p>
							</div>
						</div>
					</article>
				))}
			</div>
			<div className="mt-8 flex flex-col items-start gap-4 rounded-lg border border-border bg-surface-hover p-5 md:flex-row md:items-center md:justify-between">
				<p className="m-0 max-w-[42rem] text-sm leading-6 text-text-secondary">
					Need to switch surfaces? Jump back to the workspace or billing views.
				</p>
				<div className="flex flex-wrap gap-3">
					<Link
						href="/workspace"
						className="inline-flex min-h-10 items-center justify-center rounded-xs border border-transparent bg-accent px-5 py-2.5 text-sm font-bold text-white transition duration-150 hover:-translate-y-px hover:bg-accent-hover hover:shadow-md focus-visible:outline-none"
					>
						Open workspace
					</Link>
					<Link
						href="/billing"
						className="inline-flex min-h-10 items-center justify-center rounded-xs border border-transparent bg-text px-5 py-2.5 text-sm font-bold text-bg transition duration-150 hover:-translate-y-px hover:opacity-90 hover:shadow-md focus-visible:outline-none"
					>
						Open billing
					</Link>
				</div>
			</div>
		</section>
	);
}
