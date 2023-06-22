import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useMediaQuery } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../src/utils/createEmotionCache";
import ColorModeContext from "@/styles/colorModeContext";
import lightTheme from "@/styles/theme/lightTheme";
import darkTheme from "@/styles/theme/darkTheme";
import MainLayout from "../src/components/Layouts/MainLayout";
import "../styles/globals.css";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
	const {
		Component,
		emotionCache = clientSideEmotionCache,
		pageProps,
	} = props;

	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
	const [darkMode, setDarkMode] = useState(prefersDarkMode);

	useEffect(() => {
		const mode = localStorage.getItem("mode") === "true";
		setDarkMode(mode);
	}, []);

	const _setDarkMode = (newmode) => {
		localStorage.setItem("mode", newmode);
		setDarkMode(newmode);
	};

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta
					name="viewport"
					content="initial-scale=1, width=device-width"
				/>
			</Head>
			<ColorModeContext.Provider
				value={{ darkMode, setDarkMode: _setDarkMode }}
			>
				<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
					<CssBaseline />
					{/* wrap a layout here */}
					<MainLayout>
						<Component {...pageProps} />
					</MainLayout>
					{/* wrap a layout here */}
				</ThemeProvider>
			</ColorModeContext.Provider>
		</CacheProvider>
	);
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	emotionCache: PropTypes.object,
	pageProps: PropTypes.object.isRequired,
};
