import Head from "next/head";
import { getDatabase, getPage } from "@/src/utils/notion";
import PageSection from "../../src/components/PageSection/PageSection";
import ProjectCard from "../../src/components/Showcase/ProjectCard";
import { Box, Typography } from "@mui/material";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Projects({ posts }) {
	// console.log("POSTS", posts);
	return (
		<>
			<Head>
				<title>Projects</title>
				<meta
					name="description"
					content="Dhruv K's Featured Projects"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Box
				sx={{
					minHeight: "100vh",
				}}
			>
				<PageSection>
					<Box
						sx={{
							mt: 15,
						}}
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
							Project Showcase
						</Typography>
						{posts.map((proj) => (
							<ProjectCard
								key={proj.id}
								{...proj.properties}
								id={proj.id}
							/>
						))}
					</Box>
				</PageSection>
			</Box>
		</>
	);
}

export const getStaticProps = async () => {
	// try {
	// 	const { data, errors } = await getDatabase(databaseId);
	// 	if (errors || !data) {
	// 		return { notFound: true };
	// 	}
	// 	return { props: { posts: data } };
	// } catch (error) {
	// 	return { notFound: true };
	// }

	const database = await getDatabase(databaseId);
	return {
		props: {
			posts: database,
		},
		//   revalidate: 1,
	};
};
