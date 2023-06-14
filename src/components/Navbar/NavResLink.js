import { Box, Typography } from "@mui/material";

export default function NavResLink({ name, path, last }) {
	return (
		<Box
			sx={{
				borderTop: "2px solid white",
				display: "flex",
				alignItems: "center",
				justifyContent: "flex-start",
				padding: 2,
				borderBottom: last ? "2px solid white" : "0px solid white",
			}}
		>
			<Typography sx={{ fontSize: "2rem" }}>{name}</Typography>
		</Box>
	);
}
