import { Fragment } from "react";
import Head from "next/head";
import { getDatabase, getPage, getBlocks } from "../../src/utils/notion";
import Link from "next/link";
import { databaseId } from "./index";
import styles from "./post.module.css";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

export const Text = ({ text }) => {
	if (!text) {
		return null;
	}
	return text.map((value) => {
		const {
			annotations: {
				bold,
				code,
				color,
				italic,
				strikethrough,
				underline,
			},
			text,
		} = value;
		return (
			<span
				className={[
					bold ? styles.bold : "",
					code ? styles.code : "",
					italic ? styles.italic : "",
					strikethrough ? styles.strikethrough : "",
					underline ? styles.underline : "",
				].join(" ")}
				style={color !== "default" ? { color } : {}}
				key={text.content}
			>
				{text.link ? (
					<a href={text.link.url}>{text.content}</a>
				) : (
					text.content
				)}
			</span>
		);
	});
};

const renderNestedList = (block) => {
	const { type } = block;
	const value = block[type];
	if (!value) return null;

	const isNumberedList = value.children[0].type === "numbered_list_item";

	if (isNumberedList) {
		return <ol>{value.children.map((block) => renderBlock(block))}</ol>;
	}
	return <ul>{value.children.map((block) => renderBlock(block))}</ul>;
};

const renderBlock = (block) => {
	const { type, id } = block;
	const value = block[type];

	switch (type) {
		case "paragraph":
			return (
				<Typography
					variant="body1"
					sx={{
						color: "text.light",
						mb: 2,
						maxWidth: "100%",
						fontWeight: 500,
						lineHeight: 1.5,
					}}
				>
					<Text text={value.rich_text} />
				</Typography>
			);
		case "heading_2":
			return (
				<Typography
					variant="h2"
					sx={{
						color: "text.primary",
						fontSize: "2rem",
						mt: 10,
						mb: 3,
						fontWeight: 500,
					}}
				>
					<Text text={value.rich_text} />
				</Typography>
			);
		case "heading_3":
			return (
				<h3>
					<Text text={value.rich_text} />
				</h3>
			);
		case "bulleted_list": {
			return <ul>{value.children.map((child) => renderBlock(child))}</ul>;
		}
		case "numbered_list": {
			return <ol>{value.children.map((child) => renderBlock(child))}</ol>;
		}
		case "bulleted_list_item":
		case "numbered_list_item":
			return (
				<Typography
					component="li"
					sx={{
						color: "text.light",
					}}
					key={block.id}
				>
					<Text text={value.rich_text} />
					{!!value.children && renderNestedList(block)}
				</Typography>
			);
		case "toggle":
			return (
				<details>
					<summary>
						<Text text={value.rich_text} />
					</summary>
					{block.children?.map((child) => (
						<Fragment key={child.id}>{renderBlock(child)}</Fragment>
					))}
				</details>
			);
		case "image":
			const src =
				value.type === "external" ? value.external.url : value.file.url;
			const caption = value.caption ? value.caption[0]?.plain_text : "";
			return (
				<Box
					// component="figure"
					sx={{
						width: "100%",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Image
						src={src}
						alt={caption}
						width={800}
						height={600}
						style={{
							maxWidth: "100%",
							height: "auto",
						}}
					/>
					{/* {caption && <figcaption>{caption}</figcaption>} */}
				</Box>
			);
		case "divider":
			return <hr key={id} />;
		case "quote":
			return (
				<blockquote key={id}>
					{value.rich_text[0].plain_text}
				</blockquote>
			);
		case "code":
			return (
				<Box
					component="pre"
					sx={{
						backgroundColor: "secondary.main",
						width: "fit-content",
						px: 0,
						lineHeight: 1.8,
						borderRadius: "0 15px 15px 0",
						borderColor: "borderCol.main",
						border: "1px solid",
						my: 5,
					}}
				>
					<Typography
						component="code"
						key={id}
						sx={{
							padding: 10,
							fontFamily: "monospace",
							display: "flex",
							flexWrap: "wrap",
							color: "text.primary",
						}}
					>
						{value.rich_text[0].plain_text}
					</Typography>
				</Box>
			);

		case "bookmark":
			const href = value.url;
			return (
				<a href={href} target="_brank" className={styles.bookmark}>
					{href}
				</a>
			);
		case "column_list": {
			return (
				<div className={styles.row}>
					{block.children.map((block) => renderBlock(block))}
				</div>
			);
		}
		case "column": {
			return (
				<div>{block.children.map((child) => renderBlock(child))}</div>
			);
		}
		default:
			return `❌ Unsupported block (${
				type === "unsupported" ? "unsupported by Notion API" : type
			})`;
	}
};

export default function Post({ page, blocks }) {
	if (!page || !blocks) {
		return <div />;
	}
	console.log("PAGE", page);
	console.log("BLOCL", blocks);
	return (
		<>
			<Head>
				<title>
					Showcase : {page.properties.Name.title[0].plain_text}
				</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Box
				sx={{
					px: "5vw",
				}}
			>
				<Stack
					direction="column"
					component="article"
					gap={5}
					sx={{
						margin: "auto",
						alignItems: "flex-start",
						justifyContent: "center",
						minHeight: "100vh",
						pt: "20vh",
						maxWidth: { xs: "100%", md: "80vw", xl: "50vw" },
					}}
				>
					<Typography
						variant="h1"
						sx={{
							fontWeight: 500,
							fontSize: {
								md: "3rem",
								sm: "3rem",
								xs: "3rem",
							},
							textAlign: { xs: "center", sm: "initial" },
						}}
					>
						<Text text={page.properties.Name.title} />
					</Typography>
					<section>
						{blocks.map((block) => (
							<Fragment key={block.id}>
								{renderBlock(block)}
							</Fragment>
						))}
					</section>
				</Stack>
			</Box>
		</>
	);
}

export const getStaticPaths = async () => {
	const database = await getDatabase(databaseId);
	return {
		paths: database.map((page) => ({ params: { id: page.id } })),
		fallback: true,
	};
};

export const getStaticProps = async (context) => {
	const { id } = context.params;
	const page = await getPage(id);
	const blocks = await getBlocks(id);

	return {
		props: {
			page,
			blocks,
		},
		// revalidate: 1,
	};
};
