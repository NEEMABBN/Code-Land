import React from "react";

export default function OptionItemComponent({
	title,
	description,
	image,
	size,
	isImage,
	column,
}) {
	return (
		<div
			className={`flex ${
				column ? "lg:flex-col-reverse" : "lg:flex-row"
			} flex-row items-center bg-[#23242A] md:rounded-[32px] sm:rounded-[20px] py-4 px-8 gap-8`}
		>
			<div className="flex flex-col lg:items-start gap-6">
				<h2 className="text-white font-bold md:text-xl sm:text-base text-sm">
					{title}
				</h2>
				<p className="text-white md:text-[15px] text-[12px] leading-7 over-text-flow">
					{description}
				</p>
			</div>
			<img
				src={image}
				alt="Option Profile"
				className={`${
					isImage ? "block" : "hidden"
				} rounded-[32px] image-BoxShadow xl:w-[330px] ${
					size ? "xl:w-[300px] 2xl:w-[310px]" : "xl:w-[330px]"
				} lg:w-[295px] md:w-[200px] w-[170px]`}
			/>
		</div>
	);
}
