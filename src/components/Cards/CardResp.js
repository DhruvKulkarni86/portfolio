import { Box, Stack, Typography } from "@mui/material";
import TooltipImage from "../TooltipImage/TooltipImage";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function CardResp({ type, title, desc }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	return (
		<Stack
			ref={ref}
			style={{
				transform: isInView ? "none" : "translateY(0px)",
				opacity: isInView ? 1 : 0,
				transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
			}}
			sx={{
				alignItems: "center",
				justifyContent: "space-around",
				my: 2,
				border: "1px solid white",
				borderRadius: "50px",
				backgroundColor: "primary.main",
				height: "400px",
				width: "100%",
				padding: 2,
			}}
		>
			<Box
				sx={{
					display: "flex",
					width: "100%",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{type === "lang" && (
					<Stack
						direction="row"
						sx={{
							flexWrap: "wrap",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						{/* <TooltipImage name="html" />
						<TooltipImage name="css" /> */}
						<TooltipImage name="javascript" />
						<TooltipImage name="java" />
						<TooltipImage name="python" />
						<TooltipImage name="php" />
						{/* <TooltipImage name="c" /> */}
						<TooltipImage name="nodejs" />
						<TooltipImage name="mongodb" />
						<TooltipImage name="postgresql" />
						<TooltipImage name="git" />
					</Stack>
				)}
				{type === "tech" && (
					<Stack
						direction="row"
						sx={{
							flexWrap: "wrap",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<TooltipImage name="react" />
						<TooltipImage name="nextjs" />
						<TooltipImage name="mui" />
						<TooltipImage name="express" />
						<TooltipImage name="firebase" />
						<TooltipImage name="supabase" />
						<TooltipImage name="vercel" />
						<TooltipImage name="netlify" />
						{/* <TooltipImage name="postman" />
						<TooltipImage name="figma" />
						<TooltipImage name="vsc" /> */}
					</Stack>
				)}
				{/* {type === "tools" && (
					<Stack
						direction="row"
						sx={{
							flexWrap: "wrap",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<TooltipImage name="git" />
						<TooltipImage name="github" />
						<TooltipImage name="postman" />
						<TooltipImage name="figma" />
						<TooltipImage name="vsc" />
						<TooltipImage name="notion" />
					</Stack>
				)} */}
			</Box>
			<Stack gap={2} sx={{ padding: 2, width: "100%" }}>
				<Typography
					variant="h2"
					fontWeight="500"
					textAlign="center"
					sx={{
						fontSize: "2rem",
					}}
				>
					{title}
				</Typography>
				<Typography
					textAlign="center"
					variant="body1"
					sx={{ color: "text.light" }}
				>
					{desc}
				</Typography>
			</Stack>
		</Stack>
	);
}
