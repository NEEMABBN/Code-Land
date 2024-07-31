/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			borderRadius: {
				Pro: "50% 10% 50% 10% / 10% 50% 10% 50%",
			},
			colors: {
				Primary: "#1D5EFF",
				Secondary: "#23242A",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
