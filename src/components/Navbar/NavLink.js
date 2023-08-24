import { Typography } from "@mui/material";
import Link from "next/link";

export default function NavLink({ name, path }) {
	return (
		<Link aria-label={name} href={path}>
			<Typography
				variant="body1"
				sx={{
					mx: 1,
					padding: 1,
					cursor: "pointer",
					fontSize: { xs: "1rem", xl: "1.5rem" },
					transition: "0.2s",
					textTransform: "uppercase",
					"&:hover": {
						transform: "scale(1.05)",
					},
				}}
			>
				{name}
			</Typography>
		</Link>
	);
}
