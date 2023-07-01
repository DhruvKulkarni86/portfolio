import { Stack, Typography } from "@mui/material";
import Skills from "./Skills";

export default function About() {
	return (
		<Stack
			id="about"
			direction={{ xs: "column", sm: "row" }}
			gap={{ sm: 4, xs: 4 }}
			sx={{
				justifyContent: { xs: "center", sm: "space-between" },
				alignItems: "baseline",
			}}
		>
			<Stack
				gap={{ xs: 2, sm: 5 }}
				sx={{
					maxWidth: { xs: "100%", sm: "40%" },
					// justifyContent: { xs: "center", sm: "space-between" },
				}}
			>
				<Typography
					variant="h2"
					fontWeight="500"
					sx={{
						fontSize: { xs: "1.5rem", sm: "2rem" },
						py: { xs: 2, sm: 0 },
						textAlign: {
							xs: "center",
							sm: "initial",
							// sm: dir === "r" ? "center" : "initial",
						},
					}}
				>
					About Me
				</Typography>
				<Typography
					variant="body1"
					sx={{
						color: "text.light",
						textAlign: { xs: "justify", sm: "left" },
					}}
				>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Nihil, perspiciatis repudiandae? Ipsam quaerat ipsum minima
					ut saepe voluptate, pariatur tempora amet commodi officia
					corporis iure eaque ratione error ad veniam, a accusantium
					illum aliquid nam quos vel rerum. Quis possimus vero
					repellendus ab iste earum mollitia magnam exercitationem
					eveniet magni.
				</Typography>
			</Stack>
			<Skills />
		</Stack>
	);
}
