import { IconButton, Stack } from "@mui/material";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Social() {
	return (
		<Stack
			direction="row"
			gap={2}
			sx={{
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<IconButton aria-label="github" sx={{ color: "text.primary" }}>
				<a
					href="https://github.com/DhruvKulkarni86/"
					rel="noreferrer"
					target="_blank"
				>
					<FaGithub />
				</a>
			</IconButton>
			<IconButton aria-label="github" sx={{ color: "text.primary" }}>
				<a
					href="https://github.com/DhruvKulkarni86/"
					rel="noreferrer"
					target="_blank"
				>
					<SiGmail />
				</a>
			</IconButton>
			<IconButton aria-label="github" sx={{ color: "text.primary" }}>
				<a
					href="https://github.com/DhruvKulkarni86/"
					rel="noreferrer"
					target="_blank"
				>
					<FaLinkedin />
				</a>
			</IconButton>
		</Stack>
	);
}
