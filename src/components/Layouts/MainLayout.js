import { Box } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

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
					// paddingX: { xs: "5vw", sm: 0 },
					// paddingY: { md: "10vw", sm: "15vw", xs: "25vw" },
					minHeight: { xs: "100vh", xl: "50vh" },
					overflowY: "hidden",
					backgroundColor: "primary.main",
				}}
			>
				{children}
			</Box>
			<Box
				component="footer"
				sx={{
					backgroundColor: "primary.main",
					width: "100%",
					display: "block",
				}}
			>
				<Footer />
			</Box>
		</>
	);
}
