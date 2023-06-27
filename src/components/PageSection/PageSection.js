import { Box } from "@mui/material";

export default function PageSection({ children, color }) {
	return (
		<Box
			component="section"
			sx={{
				// margin: "auto",
				maxWidth: "100vw",
				backgroundColor:
					color === "dark" ? "secondary.main" : "primary.main",
				paddingX: "5vw",
				paddingY: 2,
			}}
		>
			<Box
				sx={{
					margin: "auto",
					maxWidth: { xs: "100%", md: "80vw", xl: "50vw" },
				}}
			>
				{children}
			</Box>
		</Box>
	);
}
