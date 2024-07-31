import React from "react";
import SectionNameComponent from "../Section Name/SectionNameComponent";
import { Button } from "@mui/material";

export default function PelanItemComponent({
	image,
	headerText,
	price,
	title,
	description,
	button,
	className,
}) {
	return (
		<div
			className={`w-full flex flex-col items-center px-7 gap-8 ${className}`}
		>
			<div
				className={`w-full flex flex-col md:items-start items-center ${image} 2xl:bg-no-repeat 2xl:bg-cover 2xl:rounded-none rounded-Pro 2xl:py-20 2xl:px-16 lg:p-10 p-7`}
			>
				<span className="2xl:text-[17px] lg:text-[16px] text-[13px] font-extrabold">
					شروع از
				</span>
				<SectionNameComponent
					width=""
					size="xl:text-[3rem] lg:text-[2.2rem] md:text-[2rem] text-[1.7rem]"
					isWhite={false}
					title={price}
				/>
				<span className="2xl:text-[17px] lg:text-[16px] text-[13px] font-extrabold">
					{headerText}
				</span>
			</div>
			<div className="w-full flex flex-col items-center h-full px-5 gap-6">
				<SectionNameComponent
					isWhite={true}
					title={title}
					className={"lg:text-start text-center"}
				/>
				<div className="w-full flex flex-col h-full gap-6 justify-between">
					<p className="text-white sm:text-[16px] text-[14px] leading-8 lg:text-start text-center">
						{description}
					</p>
					<Button
						variant="contained"
						className="!bg-[#1d5eff] !text-[17px] !font-extrabold !w-full !py-4 !rounded-[32px] !mt-3"
					>
						{button}
					</Button>
				</div>
			</div>
		</div>
	);
}
