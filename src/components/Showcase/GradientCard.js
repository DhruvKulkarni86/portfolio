import {
	Box,
	Chip,
	Divider,
	IconButton,
	Stack,
	Typography,
} from "@mui/material";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
// import ecom2 from "../../../public/ecom2.png";
// import ecom3 from "../../../public/ecom3.png";

const gr1 =
	"linear-gradient(90deg, rgb(255, 226, 210) 0%, rgb(255, 189, 205) 100%)";

const gr2 =
	"linear-gradient(90deg, rgba(219,213,236,1) 0%, rgba(233,221,225,1) 46%, rgba(242,231,230,1) 100%)";

export default function GradientCard({ project }) {
	const dir = project.id;
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<>
			<Stack
				ref={ref}
				style={{
					transform: isInView ? "none" : "translateY(0px)",
					opacity: isInView ? 1 : 0,
					transition:
						"all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
				}}
				gap={{ sm: 4, xs: 0 }}
				sx={{
					flexDirection: {
						sm: dir === 2 ? "row-reverse" : "row",
						xs: "column-reverse",
					},
					alignItems: "center",
					justifyContent: "center",
					my: 4,
				}}
			>
				<Stack
					gap={{ sm: 2, xs: 2 }}
					sx={{
						maxWidth: { xs: "100%", sm: "50%" },
						py: { xs: 2, sm: 0 },
					}}
				>
					<Typography
						variant="h2"
						fontWeight="500"
						sx={{
							fontSize: { xs: "2rem", md: "2rem" },
							textAlign: {
								xs: "center",
								sm: "initial",
								// sm: dir === "r" ? "center" : "initial",
							},
						}}
					>
						<a
							href={project.demoLink}
							rel="noreferrer"
							target="_blank"
						>
							{project.projectTitle}
						</a>
					</Typography>
					<Stack
						direction="row"
						sx={{ alignSelf: { xs: "center", sm: "flex-start" } }}
					>
						<IconButton
							aria-label="github"
							sx={{ color: "text.primary" }}
						>
							<a
								href={project.githubLink}
								rel="noreferrer"
								target="_blank"
							>
								<FaGithub />
							</a>
						</IconButton>
						<IconButton
							aria-label="github"
							sx={{ color: "text.primary" }}
						>
							<a
								href={project.demoLink}
								rel="noreferrer"
								target="_blank"
							>
								<FaExternalLinkAlt />
							</a>
						</IconButton>
						{/* <IconButton
							aria-label="github"
							sx={{ color: "text.primary" }}
						>
							<a
								href={project.blogLink}
								rel="noreferrer"
								target="_blank"
							>
								<IoReaderOutline />
							</a>
						</IconButton> */}
					</Stack>
					<Typography
						variant="body1"
						sx={{
							color: "text.light",
							textAlign: { xs: "justify", sm: "left" },
						}}
					>
						{project.description}
					</Typography>
					<Stack
						direction="row"
						gap={1}
						sx={{
							flexWrap: "wrap",
							justifyContent: { xs: "center", sm: "flex-start" },
						}}
					>
						{project.tech.map((t) => (
							<Chip key={t} label={t} />
						))}
					</Stack>
				</Stack>
				<Box
					sx={{
						background: dir === 2 ? gr2 : gr1,
						width: { xs: "100%", md: "50%" },
						margin: "auto",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						borderRadius: 5,
						overflow: "hidden",
						transition: "0.2s",
						"&:hover": {
							boxShadow:
								"0 8px 32px 0 rgba(249, 173, 187, 0.933)",
						},
					}}
				>
					<Box
						sx={{
							display: { xs: "flex", sm: "none" },
							alignItems: "center",
							justifyContent: "center",
							transform: "scale(0.9)",
						}}
					>
						<a
							href={project.demoLink}
							rel="noreferrer"
							target="_blank"
						>
							<Image
								src={project.image[1]}
								alt="fullstack ecommerce project"
								width={800}
								height={600}
								style={{
									maxWidth: "100%",
									height: "auto",
								}}
							/>
						</a>
					</Box>
					<a href={project.demoLink} rel="noreferrer" target="_blank">
						<Box
							sx={{
								display: { xs: "none", sm: "flex" },
								alignItems: "center",
								justifyContent: "center",
								transform: "scale(0.9)",
							}}
						>
							<Image
								src={project.image[0]}
								width={800}
								height={600}
								alt="fullstack ecommerce project"
								style={{
									maxWidth: "100%",
									height: "auto",
								}}
							/>
						</Box>
					</a>
				</Box>
			</Stack>
			<Divider />
			{/* {project.id !== 2 && <Divider />} */}
		</>
	);
}
