/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			fontFamily: {
				rubik: ["Rubik", "sans-serif"],
				inter: ["Inter Tight", "sans-serif"],
			},
			// ? google material 3 design typography
			fontSize: {
				base: "1rem", // 16px
				h1: "6rem", // 96px
				h2: "3.75rem", // 60px
				h3: "3rem", // 48px
				subtitle: "2.125rem", // 34px
				body: "1.5rem", // 24px
				bold: ["1.5rem", { fontWeight: "600" }], // 24px, semi-bold
				italic: ["1.5rem", { fontStyle: "italic" }], // 24px, italic
				bolditalic: ["1.5rem", { fontWeight: "600", fontStyle: "italic" }], // 24px, semi-bold, italic
				small: "1.25rem", // 20px
				tiny: "1rem", // 16px
				error: "1.5rem", // 24px
			},
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				sunglow: {
					DEFAULT: "hsl(var(--sunglow))",
					foreground: "hsl(var(--sunglow-foreground))",
				},
				ocean: {
					DEFAULT: "hsl(var(--ocean))",
					foreground: "hsl(var(--ocean-foreground))",
				},
				leafy: {
					DEFAULT: "hsl(var(--leafy))",
					foreground: "hsl(var(--leafy-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
