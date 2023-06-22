import { Box } from "@mui/material";

export default function PageSection({ children }) {
	return (
		<Box
			component="section"
			sx={{
				backgroundColor: "secondary.main",
				paddingX: "5vw",
				paddingY: 2,
			}}
		>
			{children}
		</Box>
	);
}
