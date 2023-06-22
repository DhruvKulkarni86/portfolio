import { Box, IconButton, Stack, Typography, Drawer } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoIosCloseCircle } from "react-icons/io";
import NavResLink from "./NavResLink";
import NavLink from "./NavLink";

const overlayMenuVariants = {
	open: { x: 0 },
	closed: { x: "-100%" },
};

const navVariants = {
	open: { x: 0 },
	closed: { x: "-100%" },
};

export default function Navbar({}) {
	const [open, setOpen] = React.useState(false);
	return (
		<Stack
			direction="row"
			component={motion.nav}
			sx={{
				alignItems: "center",
				justifyContent: "space-around",
				borderRadius: "600px",
				margin: "3vh auto 0",
				background: "rgba( 250, 250, 251, 0.2 )",
				backdropFilter: "blur( 6.5px )",
				"-webkit-backdrop-filter": "blur( 6.5px )",
				border: "1px solid #ecf1fb",
				width: { md: "80vw", sm: "90vw", xs: "80vw" },
				height: "3vw",
				color: "#202146",
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
						// color: "text.primary",
					}}
				>
					Dhruv Kulkarni
				</Typography>
			) : (
				<Box
					sx={{
						width: { md: 60, sm: 55, xs: 40 },
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
							d="M78.499 56.38C94.9257 56.38 106.499 61.42 113.219 71.5C119.939 81.58 123.299 93.6667 123.299 107.76C123.299 121.853 119.939 133.94 113.219 144.02C106.499 154.007 94.9257 159 78.499 159H32.719V56.38H78.499ZM74.299 145.56C80.3657 145.56 85.7323 144.673 90.399 142.9C95.0657 141.033 98.939 137.347 102.019 131.84C105.192 126.24 106.779 118.213 106.779 107.76C106.779 97.3067 105.192 89.28 102.019 83.68C98.939 78.08 95.0657 74.3933 90.399 72.62C85.7323 70.7533 80.3657 69.82 74.299 69.82H47.979V145.56H74.299ZM156.198 85.64H174.538L144.298 114.62L173.558 159H157.178L134.498 124L124.138 133.94V159H109.718V56.38H124.138V116.3L156.198 85.64Z"
							fill="#202146"
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
				<NavLink name="home" />
				<NavLink name="projects" />
				<NavLink name="blog" />
				<NavLink name="contact" />
			</Stack>
			{/* {!open ? <HiMenuAlt2 /> : <IoIosCloseCircle />} */}
			{!open ? (
				<IconButton
					aria-label="menu"
					sx={{
						display: { sm: "none", xs: "flex" },
						color: "text.secondary",
					}}
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
						color: "text.primary",
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
				PaperProps={{
					sx: {
						height: "100vh",
						width: "100vw",
						background: "rgba( 250, 250, 251, 0.2 )",
						backdropFilter: "blur( 30px )",
						"-webkit-backdrop-filter": "blur( 30px )",
					},
				}}
				ModalProps={{
					keepMounted: true,
					style: {
						position: "absolute",
						zIndex: 100,
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
						color: "text.primary",
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
