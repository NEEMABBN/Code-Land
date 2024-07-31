import React from "react";
import SectionNameComponent from "../Section Name/SectionNameComponent";

export default function RoadMapHeaderComponent({ title, description, image }) {
	return (
		<div className="w-full flex md:flex-row flex-col items-center justify-between mt-20 md:px-0 px-4">
			<div className="md:w-[60%] flex flex-col items-start gap-8">
				<SectionNameComponent
					isWhite={false}
					title={title}
					className={"md:text-start text-center"}
				/>
				<p className="leading-8 md:text-start text-center lg:text-[16px] sm:text-[14px] text-[12px]">
					{description}
				</p>
			</div>
			<img
				src={image}
				alt="RoadMap Header Image"
				className="md:w-[400px]"
			/>
		</div>
	);
}
