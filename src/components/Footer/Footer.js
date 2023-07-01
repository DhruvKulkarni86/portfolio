import { Box, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Social from "../Social/Social";

export default function Footer() {
	return (
		<Stack
			gap={1}
			sx={{
				alignItems: "center",
				justifyContent: "center",
				px: "3vh",
				pt: "3vh",
				pb: "2vh",
			}}
		>
			<Typography variant="body2">
				Developed by Dhruv Kulkarni 🇮🇳
			</Typography>
			<Box sx={{ transform: "scale(0.8)", minHeight: "2%" }}>
				<Social />
			</Box>
			<Stack direction="row" gap={1}>
				<Typography variant="body2">
					Created with <strong>NextJS</strong>
				</Typography>
				<Divider orientation="vertical" flexItem />
				<Typography variant="body2">
					Powered by <strong>Vercel</strong>
				</Typography>
			</Stack>
		</Stack>
	);
}
