import CardTitle from "../Cards/CardTitle";
import CardDiv from "../Cards/CardDiv";
import CardContent from "../Cards/CardContent";
import { Box } from "@mui/material";
import CardResp from "../Cards/CardResp";

export default function ScrollCard() {
	return (
		<>
			<Box
				sx={{
					display: { xs: "none", sm: "block" },
				}}
			>
				<CardDiv>
					<CardTitle
						dir="l"
						title="Languages I speak"
						desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, eligendi."
					/>
					<CardContent dir="r" type="lang" />
				</CardDiv>
				<CardDiv>
					<CardContent dir="l" type="tech" />
					<CardTitle
						dir="r"
						title="My Full-Stack tech stack"
						desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, eligendi."
					/>
				</CardDiv>
				{/* <CardDiv>
					<CardTitle
						dir="l"
						title="Tools I frequently use"
						desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, eligendi."
					/>
					<CardContent dir="r" type="tools" />
				</CardDiv> */}
			</Box>
			<Box sx={{ display: { xs: "block", sm: "none" } }}>
				<CardResp
					type="lang"
					title="Languages I speak"
					desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, eligendi."
				/>
				<CardResp
					type="tech"
					title="My Full-Stack tech stack"
					desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, eligendi."
				/>
				{/* <CardResp
					type="tools"
					title="Tools I frequently use"
					desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, eligendi."
				/> */}
			</Box>
		</>
	);
}
