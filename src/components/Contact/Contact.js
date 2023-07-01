import { Box, Stack, Typography } from "@mui/material";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
	return (
		<Stack
			id="contact"
			gap={1}
			sx={{
				// minHeight: "40vh",
				alignItems: { sm: "flex-start", xs: "center" },
				justifyContent: { sm: "flex-start", xs: "center" },
			}}
		>
			<Typography
				variant="h2"
				// fontWeight={500}
				sx={{
					fontSize: { xs: "1.3rem", sm: "1.3rem" },
					textAlign: {
						xs: "center",
						sm: "initial",
					},
				}}
			>
				Want to get in touch?
			</Typography>
			<Typography
				variant="h2"
				sx={{
					// color: "text.light",
					textAlign: { xs: "center", sm: "left" },
					fontSize: { sm: "1.3rem", xs: "1.3rem" },
				}}
			>
				Write to me
				<Box
					component="span"
					sx={{
						fontWeight: 500,
						color: "text.primary",
					}}
				>
					<a
						href="mailto:email@gmail.com"
						rel="noreferrer"
						target="_blank"
					>
						{" "}
						email@gmail.com{" "}
					</a>
				</Box>
				or{" "}
				<a
					href="mailto:email@gmail.com"
					rel="noreferrer"
					target="_blank"
				>
					<Stack
						direction="row"
						alignItems="center"
						gap={1}
						sx={{
							display: "inline-flex",
							color: "text.primary",
						}}
					>
						<Typography
							variant="body1"
							sx={{
								fontSize: { sm: "1.3rem", xs: "1.3rem" },

								fontWeight: 500,
							}}
						>
							connect with me on{" "}
						</Typography>
						<FaLinkedin />
					</Stack>
				</a>
			</Typography>
		</Stack>
	);
}
