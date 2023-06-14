import { useContext } from "react";
import ColorModeContext from "../../styles/colorModeContext";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
// import Brightness4Icon from "@mui/icons-material/Brightness4";
// import Brightness7Icon from "@mui/icons-material/Brightness7";

const toggleButton = () => {
	const theme = useTheme();
	const { darkMode, setDarkMode } = useContext(ColorModeContext);
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "end",
			}}
		>
			<IconButton onClick={() => setDarkMode(!darkMode)} color="inherit">
				{theme.palette.mode === "dark" ? <p>dark</p> : <p>light</p>}
			</IconButton>
		</Box>
	);
};

export default toggleButton;
