import { Box, Stack, Typography } from "@mui/material";

export default function CardTitle({ dir, title, desc }) {
	return (
		<Box
			sx={{
				display: "flex",
				width: "100%",
				alignItems: "center",
				justifyContent: dir === "l" ? "flex-start" : "flex-end",
				// border: "1px solid white",
				borderRadius: dir === "l" ? "50px 0 0 50px " : "0 50px 50px 0",
				py: 2,
				backgroundColor: "primary.main",
				height: "310px",
				width: { sm: "50%", xs: "100%" },
			}}
		>
			<Stack
				gap={2}
				sx={{ padding: 5, width: { xs: "100%", md: "80%" } }}
			>
				<Typography
					variant="h2"
					fontWeight="600"
					textAlign={dir === "l" ? "left" : "right"}
					sx={{
						fontSize: { md: "3.5rem", sm: "2rem" },
					}}
				>
					{title}
				</Typography>
				<Typography
					textAlign={dir === "l" ? "left" : "right"}
					variant="body1"
					sx={{ color: "text.light" }}
				>
					{desc}
				</Typography>
			</Stack>
		</Box>
	);
}
