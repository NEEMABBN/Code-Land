import React from "react";
import Icon1 from "../../assets/Images/restaurant-Dark-material.svg";
import { Button } from "@mui/material";

export default function WebDesignServiceItemComponent() {
	return (
		<Button
			variant="contained"
			className="!bg-white cursor-pointer group hover:!bg-[#1d5eff] hover:text-white transition-all flex flex-row items-center justify-center sm:!gap-9 !gap-4 !py-5 !rounded-[32px]"
		>
			<img src={Icon1} alt="" className="text-white group-hover:invert" />
			<span className="font-extrabold text-black group-hover:invert transition-all">
				طراحی سایت رستوران
			</span>
		</Button>
	);
}
