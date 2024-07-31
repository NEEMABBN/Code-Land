import React from "react";

export default function SectionNameComponent({
	title,
	isWhite,
	className,
	size = "lg:text-[3.4rem] md:text-[3rem] text-[2rem]",
	width = "w-full",
	Warper = "text-nowrap",
}) {
	return (
		<h2
			className={`font-Plasma ${width} ${className} ${Warper} ${size} ${
				isWhite ? "text-white" : "text-[#23242A]"
			}`}
		>
			{title}
		</h2>
	);
}
