import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
// import Image from "next/image";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoIosCloseCircle } from "react-icons/io";
export default function Navbar() {
	const [open, setOpen] = React.useState(false);
	return (
		<Stack
			direction="row"
			sx={{
				alignItems: "center",
				justifyContent: "space-around",
				borderRadius: "600px",
				margin: "3vh auto 0",
				backgroundColor: "black",
				width: { md: "80vw", sm: "90vw", xs: "80vw" },
				height: "6vw",
				color: "#fff",
				padding: { md: "2vw", sm: "4vw", xs: "7vw" },
			}}
		>
			<Box
				sx={{
					width: { md: 70, sm: 55, xs: 40 },
					height: { md: 70, sm: 55, xs: 40 },
				}}
			>
				<svg
					style={{ width: "95%", height: "95%" }}
					viewBox="0 0 196 196"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M68.8931 56.38C85.3198 56.38 96.8931 61.42 103.613 71.5C110.333 81.58 113.693 93.6667 113.693 107.76C113.693 121.853 110.333 133.94 103.613 144.02C96.8931 154.007 85.3198 159 68.8931 159H23.1131V56.38H68.8931ZM64.6931 145.56C70.7598 145.56 76.1265 144.673 80.7931 142.9C85.4598 141.033 89.3331 137.347 92.4131 131.84C95.5865 126.24 97.1731 118.213 97.1731 107.76C97.1731 97.3067 95.5865 89.28 92.4131 83.68C89.3331 78.08 85.4598 74.3933 80.7931 72.62C76.1265 70.7533 70.7598 69.82 64.6931 69.82H38.3731V145.56H64.6931ZM185.372 159H167.452L132.872 111.26L113.972 131.28V159H98.712V56.38H113.972V111.26L165.352 56.38H184.532L143.092 100.48L185.372 159Z"
						fill="#FEED01"
					/>
				</svg>
			</Box>
			{/* <Box
				sx={{
					maxWidth: { md: 60, sm: 40, xs: 50 },
					"@media (max-width: 1140px)": {
						maxWidth: 50,
					},
					"@media (max-width: 1000px)": {
						maxWidth: 45,
					},
					"@media (max-width: 640px)": {
						maxWidth: 40,
					},
					"@media (max-width: 340px)": {
						maxWidth: 30,
					},
					"@media (max-width: 260px)": {
						maxWidth: 20,
					},
				}}
			>
				<Image
					src="/dk1.svg"
					alt="Dhruv Kulkarni"
					width={90}
					height={90}
					layout="responsive"
				/>
			</Box> */}
			{/* <Typography
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
			</Typography> */}

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
			<IconButton
				aria-label="menu"
				sx={{ display: { sm: "none", xs: "flex" }, color: "white" }}
				onClick={() => {
					setOpen(!open);
				}}
			>
				{!open ? <HiMenuAlt2 /> : <IoIosCloseCircle />}
			</IconButton>
		</Stack>
	);
}
