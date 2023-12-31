import { Stack, Typography, Button } from "@mui/material";
import Skills from "./Skills";
import { FiDownload } from "react-icons/fi";

export default function About() {
	return (
		<Stack
			// id="about"
			direction={{ xs: "column", sm: "row" }}
			gap={{ sm: 4, xs: 4 }}
			sx={{
				justifyContent: { xs: "center", sm: "space-between" },
				alignItems: "baseline",
				my: { xs: 10, sm: 0 },
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
						pt: { xs: 2, sm: 0 },
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
						textAlign: { xs: "left", sm: "left" },
					}}
				>
					I create dynamic and performant Web Applications using the
					<strong> MERN</strong> stack and <strong>NextJS</strong>.
					Passionate about UIs, I&apos;m on a journey to constantly
					refine and optimize the visual and interactive aspects of my
					projects. I love to experiment and integrate the latest web
					dev trends in my projects. Curerently exploring the domain
					of cloud computing.
				</Typography>
			</Stack>
			<Skills />
		</Stack>
	);
}
