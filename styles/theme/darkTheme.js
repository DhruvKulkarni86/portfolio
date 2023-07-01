import { createTheme } from "@mui/material/styles";
import { Poppins } from "next/font/google";

export const poppins = Poppins({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
	fallback: ["Helvetica", "Arial", "sans-serif"],
});

const darkTheme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 2000,
		},
	},
	palette: {
		mode: "dark",
		primary: {
			// main: "#16181d",
			main: "#1d2433",
			// main: "#0a192f",
		},
		secondary: {
			// main: "#1d2433",
			main: "#16181d",
		},
		text: {
			primary: "#e8e8fd",
			secondary: "#0e52f1",
			light: "#858c9b",
		},
		button: {
			main: "#e8e8fd",
			contrastText: "#fff",
		},
		buttonText: {
			main: "#232946",
		},
		borderCol: {
			main: "#2a2c36",
		},
	},
	typography: {
		button: {
			fontSize: "1rem",
			"@media (max-width: 900px)": {
				fontSize: "0.8rem",
			},
			"@media (max-width: 600px)": {
				fontSize: "0.5rem",
			},
		},
		fontFamily: poppins.style.fontFamily,
	},
	// typography: {
	// 	fontFamily: ["Inter", "Poppins"],
	// 	fontWeightLight: 300,
	// 	fontWeightRegular: 400,
	// 	fontWeightMedium: 500,
	// 	fontWeightSemiBold: 600,
	// 	fontWeightBold: 700,
	// },
});

export default darkTheme;
