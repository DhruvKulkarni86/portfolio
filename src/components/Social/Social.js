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
					aria-label="github"
				>
					<FaGithub />
				</a>
			</IconButton>
			<IconButton aria-label="gmail" sx={{ color: "text.primary" }}>
				<a
					href="mailto:dhruvkulkarni96@gmail.com"
					rel="noreferrer"
					target="_blank"
					aria-label="gmail"
				>
					<SiGmail />
				</a>
			</IconButton>
			<IconButton aria-label="linkedin" sx={{ color: "text.primary" }}>
				<a
					href="https://www.linkedin.com/in/dhruvkulkarn1/"
					rel="noreferrer"
					target="_blank"
					aria-label="linkedin"
				>
					<FaLinkedin />
				</a>
			</IconButton>
		</Stack>
	);
}
