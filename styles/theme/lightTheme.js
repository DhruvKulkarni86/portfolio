import { createTheme } from "@mui/material/styles";
import { Poppins } from "next/font/google";

export const poppins = Poppins({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
	fallback: ["Helvetica", "Arial", "sans-serif"],
});

const lightTheme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#FFF",
		},
		secondary: {
			main: "#71b280",
		},
		back: {
			main: "#EFF0F3",
			contrastText: "#fff",
		},
		text: {
			primary: "#102948",
			secondary: "#2A2A2A",
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
