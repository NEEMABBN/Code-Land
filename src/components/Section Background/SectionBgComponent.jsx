import React from "react";
import VectorIcon from "../../assets/Images/Vector.svg";
import VectorIcon2 from "../../assets/Images/Vector2.svg";
import IconSvg from "../../assets/Images/Vector35.svg";
import IconSvg2 from "../../assets/Images/Vector44.svg";

export default function SectionBgComponent({
	children,
	className,
	column,
	isSVG1,
	isSVG2,
	margin = "md:mt-[-4.5rem] sm:mt-[-3.5rem] mt-[-1.7rem]",
}) {
	return (
		<div
			className={`w-full bg-[#23242A] relative flex ${
				column ? "flex-col items-center" : "flex-row"
			} justify-center ${margin} sm:rounded-[32px] overflow-hidden ${className}`}
		>
			{isSVG2 ? (
				<img
					src={VectorIcon}
					alt="Vector image, dosent matter:)"
					className="absolute top-0 left-0"
				/>
			) : (
				<img
					src={IconSvg2}
					alt=""
					className="absolute bottom-0 left-0"
				/>
			)}
			{isSVG1 ? (
				<img
					src={VectorIcon2}
					alt="umm... another Vector!"
					className="absolute right-0 bottom-0"
				/>
			) : (
				<img
					src={IconSvg}
					alt=""
					className="absolute right-10 bottom-5"
				/>
			)}
			{children}
		</div>
	);
}
