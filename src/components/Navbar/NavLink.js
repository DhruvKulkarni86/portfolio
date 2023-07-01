import { Typography } from "@mui/material";

export default function NavLink({ name, path }) {
	return (
		<Typography
			variant="button"
			sx={{
				mx: 1,
				padding: 1,
				cursor: "pointer",
				fontSize: { xs: "1rem", xl: "1.5rem" },
				transition: "0.1s",
				"&:hover": {
					fontWeight: "bold",
					transform: "scale(1.1)",
					// color: "text.secondary",
				},
			}}
		>
			<a href={path}>{name}</a>
		</Typography>
	);
}
