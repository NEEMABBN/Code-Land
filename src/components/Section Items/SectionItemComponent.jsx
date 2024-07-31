import React from "react";
import { Link } from "react-router-dom";

export default function SectionItemComponent({ title, icon, address }) {
	return (
		<Link
			to={address}
			className="flex flex-col items-center bg-white xl:p-5 lg:p-2 lg:w-fit w-full md:py-4 py-2 md:rounded-[50px] rounded-[30px] serviceItem-BoxShadow font-bold text-nowrap lg:text-base md:text-sm sm:text-[13px] text-xs"
		>
			<img
				src={icon}
				alt="Service Item Icon"
				className="lg:w-fit md:w-[120px] sm:w-[100px] w-[80px]"
			/>
			{title}
		</Link>
	);
}
