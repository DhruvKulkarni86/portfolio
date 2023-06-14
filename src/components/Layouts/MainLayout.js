import { Box } from "@mui/material";
import Navbar from "../Navbar/Navbar";

export default function MainLayout({ children }) {
	return (
		<>
			<Box
				component="header"
				sx={{
					backgroundColor: "transparent",
					position: "fixed",
					width: "100%",
					zIndex: 1000,
					top: 0,
					display: "block",
				}}
			>
				<Navbar />
			</Box>
			<Box
				component="main"
				sx={{
					paddingX: "5vw",
					paddingY: { md: "10vw", sm: "15vw", xs: "25vw" },
				}}
			>
				{children}
			</Box>
		</>
	);
}