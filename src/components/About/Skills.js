import { Divider, Stack, Typography } from "@mui/material";
import TooltipImage from "../TooltipImage/TooltipImage";

export default function Skills() {
	return (
		<Stack gap={2} sx={{ maxWidth: { xs: "100%", sm: "50%" } }}>
			<Typography
				variant="h2"
				fontWeight="500"
				sx={{
					fontSize: { xs: "1.5rem", sm: "2rem" },
					textAlign: {
						xs: "center",
						sm: "initial",
						// sm: dir === "r" ? "center" : "initial",
					},
				}}
			>
				Skills
			</Typography>
			<Stack gap={2}>
				<Stack>
					<Typography
						component="p"
						variant="subtitle1"
						fontWeight="500"
						sx={{
							px: 2,
							pl: 0,
						}}
					>
						Languages
					</Typography>
					<Divider />
					<Stack
						direction="row"
						gap={{ sm: 2, md: 4 }}
						sx={{
							flexFlow: "wrap",
							pt: 2,
							justifyContent: { xs: "center", sm: "flex-start" },
							alignItems: { xs: "center", sm: "flex-start" },
						}}
					>
						<TooltipImage name="html" />
						<TooltipImage name="css" />
						<TooltipImage name="javascript" />
						<TooltipImage name="java" />
						<TooltipImage name="python" />
						<TooltipImage name="php" />
						<TooltipImage name="nodejs" />
						<TooltipImage name="mongodb" />
						<TooltipImage name="postgresql" />
						<TooltipImage name="git" />
					</Stack>
				</Stack>
				<Stack>
					<Typography
						component="p"
						variant="subtitle1"
						fontWeight="500"
						sx={{
							px: 2,
							pl: 0,
						}}
					>
						Frameworks and Tools
					</Typography>
					<Divider />
					<Stack
						direction="row"
						gap={{ sm: 2, md: 4 }}
						sx={{
							flexFlow: "wrap",
							pt: 2,
							justifyContent: { xs: "center", sm: "flex-start" },
							alignItems: { xs: "center", sm: "flex-start" },
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
						<TooltipImage name="postman" />
						<TooltipImage name="figma" />
						<TooltipImage name="vsc" />
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	);
}
