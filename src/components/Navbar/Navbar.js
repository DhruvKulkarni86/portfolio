import { Stack, Typography } from "@mui/material";

export default function Navbar() {
	return (
		<Stack
			direction="row"
			sx={{
				alignItems: "center",
				justifyContent: "space-between",
				borderRadius: "600px",
				margin: "3vh auto 0",
				backgroundColor: "black",
				width: { md: "80vw", sm: "90vw", xs: "80vw" },
				height: "6vw",
				color: "#fff",
				padding: { md: "2vw", sm: "4vw", xs: "7vw" },
			}}
		>
			<Typography
				variant="h3"
				sx={{
					fontSize: {
						md: "2rem",
						sm: "1.8rem",
						xs: "1rem",
					},
				}}
			>
				Dhruv Kulkarni
			</Typography>
			<Stack
				direction="row"
				sx={{
					display: { sm: "flex", xs: "none" },
					width: { md: "40%", sm: "50%" },
					justifyContent: "space-evenly",
				}}
			>
				<Typography variant="button">Home</Typography>
				<Typography variant="button">Projects</Typography>
				<Typography variant="button">Blog</Typography>
				<Typography variant="button">Contact</Typography>
			</Stack>
		</Stack>
	);
}
