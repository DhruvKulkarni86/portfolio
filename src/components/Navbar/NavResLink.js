import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function NavResLink({ name, path, last, setOpen }) {
	return (
		<Box
			sx={{
				borderTop: "2px solid",
				// borderColor: "primary.main",
				display: "flex",
				alignItems: "center",
				justifyContent: "flex-start",
				padding: 2,
				borderBottom: last ? "2px solid " : "0px solid ",
			}}
		>
			<Typography sx={{ fontSize: "2rem" }}>
				<Link
					onClick={() => {
						setOpen(false);
					}}
					href={path}
				>
					{name}
				</Link>
			</Typography>
		</Box>
	);
}
