import React from "react";
import SectionsTitleComponent from "../Sections Title/SectionsTitleComponent";
import SectionBgComponent from "../Section Background/SectionBgComponent";
import SectionNameComponent from "../Section Name/SectionNameComponent";
import rectIcon1 from "../../assets/Images/Cone2828.svg";
import pinkStarIcon from "../../assets/Images/Mask group2.svg";

export default function FAQBoxComponent({ children }) {
	return (
		<div className="w-full flex flex-col items-center mt-16">
			<SectionsTitleComponent
				title={"FAQ"}
				className={"tracking-[1rem]"}
			/>
			<SectionBgComponent
				column={true}
				isSVG1={true}
				isSVG2={true}
				className={"py-16 sm:px-14 px-6 sm:gap-6 gap-3"}
			>
				<img
					src={rectIcon1}
					alt="Rect Icon"
					className="absolute top-[4em] right-[4em]"
				/>
				<SectionNameComponent
					isWhite={true}
					className={"text-center mb-4"}
					title={
						<>
							سوالات{" "}
							<span className="font-Plasma text-[#1d5eff]">
								متداول
							</span>
						</>
					}
				/>
				{children}
				<img
					src={pinkStarIcon}
					alt="Pink Star Icon"
					className="absolute bottom-[1em] left-[3em]"
				/>
			</SectionBgComponent>
		</div>
	);
}
