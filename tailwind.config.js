// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/app/**/*.{js,jsx,ts,tsx}",
		"./src/components/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#1e3a8a",
				secondary: "#2563eb",
			},
		},
	},
	plugins: [],
};
