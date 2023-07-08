import {
	Box,
	Chip,
	Divider,
	IconButton,
	Stack,
	Typography,
} from "@mui/material";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const gr1 =
	"linear-gradient(90deg, rgb(255, 226, 210) 0%, rgb(255, 189, 205) 100%)";

const gr2 =
	"linear-gradient(90deg, rgba(219,213,236,1) 0%, rgba(233,221,225,1) 46%, rgba(242,231,230,1) 100%)";

export default function ProjectCard({
	Description,
	Name,
	Status,
	Technologies,
	URL,
	Hero,
}) {
	// const dir = project.id;
	console.log("PASS", {
		des: Description.rich_text[0].plain_text,
		name: Name.title[0].plain_text,
		status: Status,
		tech: Technologies,
		URL: URL.url,
		hero: Hero.files[0].file.url,
	});

	return (
		<>
			<Stack
				gap={{ sm: 4, xs: 0 }}
				sx={{
					flexDirection: {
						sm: "row",
						xs: "column-reverse",
					},
					alignItems: "center",
					justifyContent: "center",
					my: 4,
					px: { xs: 0, md: 5 },
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
						<a href={URL.url} rel="noreferrer" target="_blank">
							{Name.title[0].plain_text}
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
							<a href={URL.url} rel="noreferrer" target="_blank">
								<FaGithub />
							</a>
						</IconButton>
						<IconButton
							aria-label="github"
							sx={{ color: "text.primary" }}
						>
							<a href={URL.url} rel="noreferrer" target="_blank">
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
						{Description.rich_text[0].plain_text}
					</Typography>
					<Stack
						direction="row"
						gap={1}
						sx={{
							flexWrap: "wrap",
							justifyContent: { xs: "center", sm: "flex-start" },
						}}
					>
						{Technologies.multi_select.map((t) => (
							<Chip
								key={t.name}
								label={t.name}
								sx={{
									transition: "0.2s",
									"&:hover": {
										transform: {
											xs: "none",
											md: "scale(1.1)",
										},
									},
								}}
							/>
						))}
					</Stack>
				</Stack>
				<Box
					sx={{
						background: gr1,
						width: { xs: "100%", md: "40%" },
						height: "300px",
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
							transform: "scale(0.8)",
						}}
					>
						<a href={URL.url} rel="noreferrer" target="_blank">
							<Image
								src={Hero.files[0].file.url}
								alt="project image"
								width={800}
								height={600}
								style={{
									maxWidth: "100%",
									height: "auto",
								}}
							/>
						</a>
					</Box>
					<a href={URL.url} rel="noreferrer" target="_blank">
						<Box
							sx={{
								display: { xs: "none", sm: "flex" },
								alignItems: "center",
								justifyContent: "center",
								transform: "scale(0.7)",
							}}
						>
							<Image
								src={Hero.files[0].file.url}
								width={800}
								height={600}
								alt="project image"
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
