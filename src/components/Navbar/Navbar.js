import { Box, IconButton, Stack, Typography, Drawer } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoIosCloseCircle } from "react-icons/io";
import NavResLink from "./NavResLink";

const overlayMenuVariants = {
	open: { x: 0 },
	closed: { x: "-100%" },
};

export default function Navbar({}) {
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
			{open ? (
				<Typography
					component={motion.div}
					initial="closed"
					animate={open ? "open" : "closed"}
					variants={overlayMenuVariants}
					transition={{
						duration: 0.3,
					}}
					variant="h3"
					sx={{
						fontSize: {
							md: "0",
							sm: "0",
							xs: "1.2rem",
						},
					}}
				>
					Dhruv Kulkarni
				</Typography>
			) : (
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
			)}
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
			{/* {!open ? <HiMenuAlt2 /> : <IoIosCloseCircle />} */}
			{!open ? (
				<IconButton
					aria-label="menu"
					sx={{ display: { sm: "none", xs: "flex" }, color: "white" }}
					onClick={() => {
						setOpen(!open);
					}}
				>
					<HiMenuAlt2 />
				</IconButton>
			) : (
				<IconButton
					aria-label="menu"
					sx={{
						display: { sm: "none", xs: "flex" },
						color: "#FEED01",
						ml: -9,
					}}
					onClick={() => {
						setOpen(!open);
					}}
				>
					<IoIosCloseCircle />
				</IconButton>
			)}
			<Drawer
				anchor="left"
				open={open}
				onClose={() => {
					setOpen(!open);
				}}
				ModalProps={{
					keepMounted: true,
					style: {
						position: "absolute",
						zIndex: 100,
						height: "100vh",
						width: "100vw",
					},
				}}
			>
				<Box
					component={motion.div}
					initial="closed"
					animate={open ? "open" : "closed"}
					variants={overlayMenuVariants}
					transition={{ duration: 0.1 }}
					sx={{
						width: "100vw",
						height: "100vh",
						backgroundColor: "black",
						color: "#fff",
					}}
				>
					<Stack
						sx={{
							paddingX: "5vw",
							paddingY: { md: "10vw", sm: "15vw", xs: "25vw" },
							minHeight: "80vh",
							justifyContent: "flex-start",
						}}
					>
						<NavResLink name="Home" />
						<NavResLink name="Projects" />
						<NavResLink name="Blog" />
						<NavResLink name="Contact" last={true} />
					</Stack>
				</Box>
			</Drawer>
		</Stack>
	);
}
