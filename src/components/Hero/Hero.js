import { Box, Button, Slide, Stack, Typography } from "@mui/material";
import Image from "next/image";
import WavingHand from "../Animations/WavingHand";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Social from "../Social/Social";
import person from "../../../public/personL.webp";
import personRes from "../../../public/person.webp";
import { FiDownload } from "react-icons/fi";

export default function Hero() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	return (
		<Stack
			direction="row"
			sx={{
				justifyContent: "space-between",
				alignItems: "center",
				minHeight: {
					xs: "100vh",
					sm: "100vh",
					md: "100vh",
					xl: "50vh",
				},
				mt: { xs: 10, sm: 0 },
			}}
		>
			<Stack
				sx={{
					width: { md: "60%", xs: "100%" },
					gap: { xs: 2, sm: 2 },
					alignItems: { xs: "center", sm: "initial" },
				}}
			>
				<Box ref={ref} sx={{ overflow: "hidden" }}>
					<Slide
						direction="up"
						timeout={1800}
						in={isInView}
						container={ref.current}
					>
						<Typography
							variant="h1"
							sx={{
								fontWeight: 500,
								fontSize: {
									md: "3.5rem",
									sm: "3rem",
									xs: "3rem",
								},
								textAlign: { xs: "center", sm: "initial" },
							}}
						>
							Hi, I&apos;m Dhruv Kulkarni <WavingHand />
						</Typography>
					</Slide>
				</Box>

				<Box
					sx={{
						display: { xs: "flex", sm: "none" },
						flexDirection: "column",
					}}
				>
					<Image priority src={personRes} alt="Dhruv K" />
				</Box>
				<Typography
					variant="body1"
					sx={{
						textAlign: { xs: "justify", sm: "initial" },
						fontSize: { md: "1.5rem", sm: "1rem" },
						fontWeight: 300,
					}}
				>
					A Frontend Web-Dev transitioning to Full-Stack. I love all
					things web and crafting beautiful web experiences.
				</Typography>
				<Stack
					direction="row"
					gap={3}
					sx={{
						justifyContent: { xs: "space-around", sm: "initial" },
						width: "100%",
						mt: { xs: 1, sm: 0 },
					}}
				>
					<Button
						disableElevation
						variant="contained"
						color="info"
						endIcon={<FiDownload />}
						href="/resume.pdf"
						target="_blank"
						sx={{
							fontSize: { xs: "0.9rem", sm: "initial" },
							// backgroundColor: "#168aff",
							width: { xs: "40%", sm: "30%", lg: "20%" },
							textTransform: "none",
						}}
					>
						Resume
					</Button>
					<Button
						disableElevation
						variant="outlined"
						color="button"
						href="#featured"
						sx={{
							fontSize: { xs: "0.9rem", sm: "initial" },

							textTransform: "none",
						}}
					>
						Featured Work
					</Button>
				</Stack>
			</Stack>
			<Box
				sx={{
					display: { xs: "none", sm: "flex" },
					flexDirection: "column",
				}}
			>
				<Image priority src={person} alt="Dhruv K" />
				<Social />
			</Box>
		</Stack>
	);
}
