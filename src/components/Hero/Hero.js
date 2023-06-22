import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import WavingHand from "../Animations/WavingHand";

export default function Hero() {
	return (
		<Stack
			direction="row"
			sx={{
				justifyContent: "space-around",
				alignItems: "center",
				mt: { sm: 5, xs: 2, md: 10 },
			}}
		>
			<Stack
				sx={{
					width: { md: "60%", xs: "100%" },
					gap: { xs: 0, sm: 2 },
					alignItems: { xs: "center", sm: "initial" },
				}}
			>
				<Typography
					variant="h1"
					sx={{
						fontSize: { md: "4rem", sm: "3rem", xs: "3rem" },
						textAlign: { xs: "center", sm: "initial" },
					}}
				>
					Hi, I&apos;m Dhruv Kulkarni <WavingHand /> !
				</Typography>
				<Box sx={{ display: { xs: "flex", sm: "none" } }}>
					<Image
						src="/Person.webp"
						alt="Dhruv K"
						width={288}
						height={389}
					/>
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
			<Box sx={{ display: { xs: "none", sm: "flex" } }}>
				<Image
					src="/PersonL.webp"
					alt="Dhruv K"
					width={288}
					height={389}
				/>
			</Box>
		</Stack>
	);
}

//! Add social media icons here
