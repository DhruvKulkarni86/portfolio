import { Stack } from "@mui/material";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function CardDiv({ children }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	return (
		<Stack
			ref={ref}
			style={{
				transform: isInView ? "none" : "translateY(0px)",
				opacity: isInView ? 1 : 0,
				transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
			}}
			direction={{ sm: "row", xs: "column" }}
			sx={{
				alignItems: "center",
				justifyContent: "center",
				width: "100%",
				my: 3,
			}}
		>
			{children}
		</Stack>
	);
}
