import { Box, Chip, Stack, Typography } from "@mui/material";
import Image from "next/image";
import ecom from "../../../public/ecom.png";
import ecom2 from "../../../public/ecom2.png";
import ecom3 from "../../../public/ecom3.png";
const gr1 =
	"linear-gradient(90deg, rgb(255, 226, 210) 0%, rgb(255, 189, 205) 100%)";

export default function GradientCard({
	title,
	desc,
	links,
	technologies,
	dir,
}) {
	return (
		<Stack
			sx={{
				flexDirection: {
					sm: dir === "r" ? "row-reverse" : "row",
					xs: "column-reverse",
				},
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Stack
				gap={3}
				sx={{
					maxWidth: { xs: "100%", sm: "50%" },
					py: { xs: 2, sm: 0 },
					px: { xs: 0, sm: 2 },
				}}
			>
				<Typography
					variant="h2"
					fontWeight="500"
					sx={{
						fontSize: { xs: "2rem", md: "2.5rem" },
						textAlign: { xs: "center", sm: "initial" },
					}}
				>
					Fullstack Ecommerce Web-App
				</Typography>
				<Typography
					variant="body1"
					sx={{
						color: "text.light",
						textAlign: { xs: "justify", sm: "justify" },
					}}
				>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Delectus eveniet, fugiat corrupti dolor doloribus eum, amet
					quod reprehenderit dignissimos non vel architecto
					perspiciatis veniam quo aspernatur magni quasi, facere
					tenetur.
				</Typography>
				<Stack
					direction="row"
					gap={1}
					sx={{
						flexWrap: "wrap",
						justifyContent: { xs: "center", sm: "flex-start" },
					}}
				>
					<Chip label="React" />
					<Chip label="MUI" />
					<Chip label="ExpressJS" />
					<Chip label="MongoDB" />
					<Chip label="Firebase" />
					<Chip label="Razorpay" />
				</Stack>
			</Stack>
			<Box
				sx={{
					background: gr1,
					width: { xs: "100%", md: "50%" },
					margin: "auto",
					// height: "380px",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					borderRadius: 5,
					overflow: "hidden",
					transition: "0.2s",
					"&:hover": {
						boxShadow: "0 8px 32px 0 rgba(249, 173, 187, 0.933)",
					},
				}}
			>
				<Box
					sx={{
						display: { xs: "flex", sm: "none" },
						alignItems: "center",
						justifyContent: "center",
						transform: "scale(0.9)",
					}}
				>
					<Image
						src={ecom3}
						alt="fullstack ecommerce project"
						style={{
							maxWidth: "100%",
							height: "auto",
						}}
					/>
				</Box>
				<Box
					sx={{
						display: { xs: "none", sm: "flex" },
						alignItems: "center",
						justifyContent: "center",
						transform: "scale(0.9)",
					}}
				>
					<Image
						src={ecom2}
						alt="fullstack ecommerce project"
						style={{
							maxWidth: "100%",
							height: "auto",
						}}
					/>
				</Box>
			</Box>
		</Stack>
	);
}
