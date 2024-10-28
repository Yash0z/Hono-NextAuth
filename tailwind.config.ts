import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				Euclid: ["var(--font-EuclidRegular)"],
				ClashGrotex: ["var(--font-ClashGrotesk)"],
				Satoshi_B: ["var(--font-Satoshi_B)"],
			},
			colors: {
				primary: {
					DEFAULT: "hsl(var(--primary))", // Black
				},

				secondary: {
					DEFAULT: "hsl(var(--secondary))", // Dark Blue
				},

				accent1: "hsl(var(--accent1))", // Orange

				accent2: "hsl(var(--accent2))", // Light Gray

				accent3: "hsl(var(--accent3))", // White
				accent4: "hsl(var(--accent4))", // gray

				text: "hsl(var(--text))", // White
				skeleton: "hsl(var(--skeleton))", // White

				muted: "hsl(var(--muted))", // Gray

				destructive: {
					DEFAULT: "hsl(var(--destructive))", // Red
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
