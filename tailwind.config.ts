import type { Config } from "tailwindcss";

const config = {
	content: ["./app/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				bg: {
					DEFAULT: "#fafaf9",
					dark: "#0c0c0c",
					"dark-soft": "#161616",
					"dark-muted": "#1e1e1e",
				},
				surface: {
					DEFAULT: "#ffffff",
					hover: "#f5f5f4",
					dark: "rgba(255, 255, 255, 0.06)",
					"dark-hover": "rgba(255, 255, 255, 0.1)",
				},
				border: {
					DEFAULT: "#e7e5e4",
					dark: "rgba(255, 255, 255, 0.1)",
				},
				text: {
					DEFAULT: "#1c1917",
					secondary: "#78716c",
					dark: "#fafaf9",
					"dark-secondary": "#a8a29e",
				},
				accent: {
					DEFAULT: "#16a34a",
					hover: "#15803d",
					subtle: "rgba(22, 163, 74, 0.1)",
				},
				yellow: {
					DEFAULT: "#eab308",
					subtle: "rgba(234, 179, 8, 0.12)",
				},
				blue: {
					DEFAULT: "#2563eb",
					subtle: "rgba(37, 99, 235, 0.1)",
				},
				red: {
					DEFAULT: "#dc2626",
					subtle: "rgba(220, 38, 38, 0.1)",
				},
			},
			boxShadow: {
				sm: "0 1px 2px rgba(0, 0, 0, 0.04)",
				md: "0 4px 16px rgba(0, 0, 0, 0.06)",
				lg: "0 12px 40px rgba(0, 0, 0, 0.08)",
			},
			borderRadius: {
				xs: "8px",
				sm: "12px",
				md: "16px",
				lg: "20px",
				xl: "24px",
			},
			fontFamily: {
				body: ["var(--font-body)", "Manrope", "Segoe UI", "sans-serif"],
				display: ["var(--font-display)", "Sora", "sans-serif"],
			},
		},
	},
} satisfies Config;

export default config;
