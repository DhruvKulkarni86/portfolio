import { Stack } from "@mui/material";

export default function CardDiv({ children }) {
	return (
		<Stack
			direction={{ sm: "row", xs: "column" }}
			sx={{
				alignItems: "center",
				justifyContent: "center",
				// height: { xs: "80vh", sm: "30vh", md: "60vh" },
				width: "100%",
				my: 3,
			}}
		>
			{children}
		</Stack>
	);
}
