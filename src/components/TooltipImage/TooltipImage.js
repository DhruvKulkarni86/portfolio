import { Box, Fade, Tooltip } from "@mui/material";
import Image from "next/image";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import React from "react";

export default function TooltipImage({ name }) {
	const [open, setOpen] = React.useState(false);
	const handleTooltipClose = () => {
		setOpen(false);
	};

	const handleTooltipOpen = () => {
		setOpen(true);
	};
	const path = `/icons/${name}.svg`;
	return (
		<>
			<ClickAwayListener onClickAway={handleTooltipClose}>
				<Box
					sx={{
						display: { xs: "flex", sm: "none" },
						// width: "25%",
						alignItems: "center",
						justifyContent: "center",
						my: 1,
						mx: 1,
						padding: 2,
						border: "1px solid",
						// borderColor: "borderCol.main",
						borderColor: "transparent",
						borderRadius: "14px",
						backgroundColor: "primary.main",
					}}
				>
					<Tooltip
						PopperProps={{
							disablePortal: true,
						}}
						onClose={handleTooltipClose}
						open={open}
						disableFocusListener
						disableHoverListener
						disableTouchListener
						arrow
						TransitionComponent={Fade}
						title={name}
						placement="top"
					>
						<Image
							onClick={
								!open ? handleTooltipOpen : handleTooltipClose
							}
							src={path}
							width={30}
							height={30}
							alt="javascript"
						/>
					</Tooltip>
				</Box>
			</ClickAwayListener>
			<Box
				sx={{
					display: { xs: "none", sm: "flex" },
					alignItems: "center",
					justifyContent: "center",
					padding: 2,
					border: "1px solid",
					// borderColor: "borderCol.main",
					borderColor: "transparent",
					borderRadius: "14px",
					backgroundColor: "primary.main",
				}}
			>
				<Tooltip arrow TransitionComponent={Fade} title={name}>
					<Image src={path} width={30} height={30} alt="javascript" />
				</Tooltip>
			</Box>
		</>
	);
}
