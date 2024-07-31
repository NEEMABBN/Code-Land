import React from "react";

export default function SectionsTitleComponent({ title, className }) {
	return (
		<h2
			className={`text-[#EBEBEB] font-Barrio md:text-[7.5rem] sm:text-[6rem] text-[3rem] ${className}`}
		>
			{title}
		</h2>
	);
}
