import { motion } from "framer-motion";

export default function WavingHand() {
	return (
		<motion.div
			style={{
				marginBottom: "-20px",
				marginRight: "-45px",
				paddingBottom: "20px",
				paddingRight: "45px",
				display: "inline-block",
			}}
			animate={{ rotate: [-10, 20, -10] }}
			transition={{
				duration: 1,
				ease: "easeInOut",
				repeat: Infinity,
				repeatDelay: 0,
			}}
		>
			👋
		</motion.div>
	);
}
