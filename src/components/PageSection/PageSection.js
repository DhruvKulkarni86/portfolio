import { Box } from "@mui/material";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function PageSection({ children, color, id }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	return (
		<Box
			id={id}
			component="section"
			sx={{
				// margin: "auto",
				// maxWidth: "100vw",
				// minHeight: "80vh",
				backgroundColor:
					color === "dark" ? "secondary.main" : "primary.main",
				paddingX: "5vw",
				paddingY: { sm: id === "featured" ? 8 : 2, xs: 2 },
				// minHeight: { xs: "100vh", xl: "50vh" },
				// display: "flex",
				// alignItems: "center",
				// justifyContent: "center",
			}}
		>
			<Box
				ref={ref}
				style={{
					transform: isInView ? "none" : "translateY(0px)",
					opacity: isInView ? 1 : 0,
					transition:
						"all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
				}}
				sx={{
					// mt: "20vh",
					margin: "auto",
					maxWidth: { xs: "100%", md: "80vw", xl: "50vw" },
					minHeight: { xs: "100vh", xl: "50vh" },
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
				}}
			>
				{children}
			</Box>
		</Box>
	);
}
