/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Open Sans", "sans-serif"],
		},
		extend: {},
	},
	// eslint-disable-next-line no-undef
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["pastel", "dracula", "dark", "night"],
		darkTheme: "dracula",
		base: true,
		styled: true,
		utils: true,
		// prefix: "daisy-",
		logs: true,
		themeRoot: ":root",
	},
};
