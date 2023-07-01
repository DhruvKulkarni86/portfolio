import { Box, Slide, Stack, Typography } from "@mui/material";
import Image from "next/image";
import WavingHand from "../Animations/WavingHand";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Social from "../Social/Social";
import person from "../../../public/personL.webp";
import personRes from "../../../public/person.webp";

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
			}}
		>
			<Stack
				sx={{
					width: { md: "60%", xs: "100%" },
					gap: { xs: 0, sm: 2 },
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
					<Image src={personRes} alt="Dhruv K" />
				</Box>
				<Typography
					variant="body1"
					sx={{
						textAlign: { xs: "justify", sm: "initial" },
					}}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
					voluptates harum eveniet sint. Perspiciatis sed placeat,
					corrupti labore iste eum? Culpa doloribus, quisquam
					necessitatibus exercitationem tempore voluptatum in
					voluptates magni.
				</Typography>
			</Stack>
			<Box
				sx={{
					display: { xs: "none", sm: "flex" },
					flexDirection: "column",
				}}
			>
				<Image src={person} alt="Dhruv K" />
				<Social />
			</Box>
		</Stack>
	);
}

//! Add social media icons here
