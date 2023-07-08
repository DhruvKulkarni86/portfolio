import { Box, IconButton, Stack, Typography, Drawer } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoIosCloseCircle } from "react-icons/io";
import NavResLink from "./NavResLink";
import NavLink from "./NavLink";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { useTheme } from "@mui/material/styles";
import icon from "../../../public/dk2w.svg";
import iconD from "../../../public/dk2d.svg";
import Image from "next/image";

const overlayMenuVariants = {
	open: { x: 0 },
	closed: { x: "-100%" },
};

export default function Navbar({}) {
	const [open, setOpen] = React.useState(false);
	const theme = useTheme();
	const mode = theme.palette.mode;
	return (
		<Stack
			direction="row"
			component={motion.nav}
			sx={{
				alignItems: "center",
				justifyContent: "space-around",
				gap: { xs: 6, sm: 0 },
				borderRadius: "600px",
				margin: "3vh auto 0",
				backdropFilter: "blur( 6.5px )",
				"-webkit-backdrop-filter": "blur( 6.5px )",
				border: "0.5px solid ",
				borderColor: "borderCol.main",
				width: { md: "80vw", sm: "90vw", xs: "90vw", xl: "50vw" },
				height: "3vw",
				color: "#202146",
				padding: { md: "2vw", sm: "4vw", xs: "7vw", xl: "1vw" },
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
						color: "text.primary",
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
					{mode === "light" ? (
						<Image
							priority={true}
							src={icon}
							style={{
								maxWidth: "100%",
								height: "auto",
							}}
							alt="Dhruv Kulkarni"
						/>
					) : (
						<Image
							priority={true}
							src={iconD}
							style={{
								maxWidth: "100%",
								height: "auto",
							}}
							alt="Dhruv Kulkarni"
						/>
					)}
				</Box>
			)}
			<Stack
				direction="row"
				sx={{
					display: { sm: "flex", xs: "none" },
					width: { md: "40%", sm: "50%" },
					justifyContent: "space-evenly",
					alignItems: "center",
					color: "text.primary",
				}}
			>
				<NavLink name="home" />
				<NavLink name="projects" />
				<NavLink name="contact" path="#contact" />
				<ThemeSwitch />
			</Stack>
			{/* {!open ? <HiMenuAlt2 /> : <IoIosCloseCircle />} */}
			{!open ? (
				<Stack
					direction="row"
					gap={1}
					sx={{
						display: { xs: "flex", sm: "none" },
						alignItems: "center",
					}}
				>
					<IconButton
						aria-label="menu"
						sx={{
							display: { sm: "none", xs: "flex" },
							color: "text.primary",
						}}
						onClick={() => {
							setOpen(!open);
						}}
					>
						<HiMenuAlt2 />
					</IconButton>
					<ThemeSwitch />
				</Stack>
			) : (
				<IconButton
					aria-label="menu"
					sx={{
						display: { sm: "none", xs: "flex" },
						color: "text.primary",
						ml: -20,
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
							paddingY: "30vh",
							minHeight: "80vh",
							justifyContent: "center",
						}}
					>
						<NavResLink name="Home" />
						<NavResLink name="Projects" />
						<NavResLink name="Contact" last={true} />
					</Stack>
				</Box>
			</Drawer>
		</Stack>
	);
}
