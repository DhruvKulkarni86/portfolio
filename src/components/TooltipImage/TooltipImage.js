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
						width: "25%",
						alignItems: "center",
						justifyContent: "center",
						my: 1,
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
							width={40}
							height={40}
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
				}}
			>
				<Tooltip arrow TransitionComponent={Fade} title={name}>
					<Image src={path} width={50} height={50} alt="javascript" />
				</Tooltip>
			</Box>
		</>
	);
}
