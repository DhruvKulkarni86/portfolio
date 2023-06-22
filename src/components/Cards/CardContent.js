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
				height: "310px",
				width: { sm: "50%", xs: "100%" },
			}}
		>
			<Stack sx={{ padding: 5, width: "100%", alignItems: "center" }}>
				{type === "lang" && (
					<Stack
						direction="row"
						gap={{ sm: 2, md: 4 }}
						sx={{ flexFlow: "wrap" }}
					>
						<TooltipImage name="html" />
						<TooltipImage name="css" />
						<TooltipImage name="javascript" />
						<TooltipImage name="java" />
						<TooltipImage name="python" />
						<TooltipImage name="php" />
						<TooltipImage name="c" />
					</Stack>
				)}
				{type === "tech" && (
					<Stack
						direction="row"
						gap={{ sm: 2, md: 4 }}
						sx={{ flexFlow: "wrap" }}
					>
						<TooltipImage name="nextjs" />
						<TooltipImage name="react" />
						<TooltipImage name="mui" />
						<TooltipImage name="nodejs" />
						<TooltipImage name="express" />
						<TooltipImage name="mongodb" />
						<TooltipImage name="postgresql" />
						<TooltipImage name="firebase" />
						<TooltipImage name="supabase" />
						<TooltipImage name="vercel" />
						<TooltipImage name="netlify" />
					</Stack>
				)}
				{type === "tools" && (
					<Stack
						direction="row"
						gap={{ sm: 2, md: 4 }}
						sx={{ flexFlow: "wrap" }}
					>
						<TooltipImage name="git" />
						<TooltipImage name="github" />
						<TooltipImage name="postman" />
						<TooltipImage name="figma" />
						<TooltipImage name="vsc" />
						<TooltipImage name="notion" />
					</Stack>
				)}
			</Stack>
		</Box>
	);
}
