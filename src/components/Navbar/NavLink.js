import { Typography } from "@mui/material";

export default function NavLink({ name, path }) {
	return (
		<Typography
			variant="button"
			sx={{
				mx: 1,
				padding: 1,
				cursor: "pointer",
				fontSize: "1rem",
				"&:hover": {
					fontWeight: "bold",
					color: "text.secondary",
				},
			}}
		>
			{name}
		</Typography>
	);
}
