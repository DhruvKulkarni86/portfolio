import Head from "next/head";
import Hero from "@/src/components/Hero/Hero";
import PageSection from "../src/components/PageSection/PageSection";
import GradientCard from "@/src/components/Showcase/GradientCard";

export default function Home({ projData }) {
	const proj = projData.projects;
	return (
		<>
			<Head>
				<title>Dhruv Kulkarni&apos;s Portfolio</title>
				<meta
					name="description"
					content="Dhruv K's Developer Portfolio"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<meta
					property="og:title"
					content="Dhruv Kulkarni's Portfolio"
				/>
				<meta
					property="og:description"
					content="Hi, I'm Dhruv Kulkarni - Welcome to my portfolio website"
				/>
				<meta
					property="og:image"
					content="https://og-image.xyz/og/Dhruv Kulkarni/Web Developer/dhruvkulkarni.vercel.app/https/atkinson/cheerfulorange/black/data.pngL"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<PageSection>
				<Hero />
			</PageSection>
			<PageSection id="about" color="dark">
				<About />
			</PageSection>
			<PageSection id="featured">
				<Typography
					variant="h2"
					fontWeight="500"
					sx={{
						fontSize: { xs: "1.5rem", sm: "2rem" },
						mt: { xs: 10, sm: 5 },

						textAlign: {
							xs: "center",
							sm: "initial",
							// sm: dir === "r" ? "center" : "initial",
						},
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
					<Link href={"/projects"}>
						<Button
							variant="outlined"
							color="button"
							sx={{
								my: 2,
								fontSize: { xs: "0.9rem", sm: "initial" },
							}}
						>
							Show More
						</Button>
					</Link>
				</Box>
			</PageSection>
			<PageSection id="contact" color="dark">
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
import Link from "next/link";
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
