import Head from "next/head";
import { Inter } from "next/font/google";
import Hero from "@/src/components/Hero/Hero";
import PageSection from "../src/components/PageSection/PageSection";
import GradientCard from "@/src/components/Showcase/GradientCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ projData }) {
	const proj = projData.projects;
	return (
		<>
			<Head>
				<title>Dhruv K</title>
				<meta
					name="description"
					content="Dhruv K's Developer Portfolio"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<PageSection>
				<Hero />
			</PageSection>
			<PageSection id="about" color="dark">
				<About />
			</PageSection>
			<PageSection>
				<Typography
					variant="h2"
					sx={{
						fontSize: { xs: "1.5rem", sm: "1.6rem" },
						fontWeight: 400,
						py: 2,
						textAlign: "center",
					}}
				>
					Featured Projects
				</Typography>
				{proj.map((project) => (
					<GradientCard key={project.id} project={project} />
				))}
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Button
						variant="outlined"
						color="button"
						sx={{ my: 2, fontSize: { xs: "1rem", sm: "initial" } }}
					>
						Show More
					</Button>
				</Box>
			</PageSection>
			<PageSection color="dark">
				<Contact />
			</PageSection>
		</>
	);
}

import path from "path";
import { promises as fs } from "fs";
import { Box, Button, Typography } from "@mui/material";
import Contact from "@/src/components/Contact/Contact";
import About from "@/src/components/About/About";
export async function getStaticProps() {
	const jsonDirectory = path.join(process.cwd(), "data");
	const fileContents = await fs.readFile(
		jsonDirectory + "/FeaturedProjects.json",
		"utf8"
	);
	const projData = JSON.parse(fileContents);
	return {
		props: { projData },
	};
}
