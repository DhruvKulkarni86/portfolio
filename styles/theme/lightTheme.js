import { createTheme } from "@mui/material/styles";
import { Poppins } from "next/font/google";

export const poppins = Poppins({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
	fallback: ["Helvetica", "Arial", "sans-serif"],
});

const lightTheme = createTheme({
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
		mode: "light",
		primary: {
			main: "#f9fafb",
		},
		secondary: {
			main: "#ecf1fb",
		},
		text: {
			primary: "#202146",
			secondary: "#0e52f1",
			light: "#858c9b",
		},
		button: {
			main: "#FFCC30",
			contrastText: "#fff",
		},
		buttonText: {
			main: "#0D0D0D",
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

export default lightTheme;
