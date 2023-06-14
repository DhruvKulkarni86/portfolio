import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#134E5E",
		},
		secondary: {
			main: "#71b280",
		},
		back: {
			main: "#232946",
			contrastText: "#fff",
		},
		text: {
			primary: "#FFFFFE",
			secondary: "#B8C1EC",
		},
		button: {
			main: "#EEBBC3",
			contrastText: "#fff",
		},
		buttonText: {
			main: "#232946",
		},
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
