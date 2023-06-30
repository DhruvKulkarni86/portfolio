import { Box, Stack } from "@mui/material";
import TooltipImage from "../TooltipImage/TooltipImage";

export default function CardContent({ dir, type }) {
	return (
		<Box
			sx={{
				display: "flex",
				width: "100%",
				alignItems: "center",
				justifyContent: "center",
				borderRadius: dir === "l" ? "50px 0 0 50px " : "0 50px 50px 0",
				backgroundColor: "primary.main",
				height: "300px",
				width: { sm: "50%", xs: "100%" },
				padding: { xs: 0, xl: 2 },
			}}
		>
			<Stack sx={{ padding: 5, width: "100%", alignItems: "center" }}>
				{type === "lang" && (
					<Stack
						direction="row"
						gap={{ sm: 2, md: 4 }}
						sx={{ flexFlow: "wrap" }}
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
						gap={{ sm: 2, md: 4 }}
						sx={{ flexFlow: "wrap" }}
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
						gap={{ sm: 2, md: 4 }}
						sx={{ flexFlow: "wrap" }}
					>
						<TooltipImage name="github" />
						<TooltipImage name="vsc" />
						<TooltipImage name="notion" />
					</Stack>
				)} */}
			</Stack>
		</Box>
	);
}
