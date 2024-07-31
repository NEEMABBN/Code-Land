import React from "react";
import AnyIcon from "../../../assets/Images/Group 36.svg";
import SectionsTitleComponent from "../../../components/Sections Title/SectionsTitleComponent";
import SectionBgComponent from "../../../components/Section Background/SectionBgComponent";
import SectionItemComponent from "../../../components/Section Items/SectionItemComponent";
import SectionNameComponent from "../../../components/Section Name/SectionNameComponent";

export default function ServiceComponent() {
	return (
		<div className="w-full flex flex-col items-center sm:mt-20 mt-12">
			<SectionsTitleComponent
				title={"SERVICES"}
				className={"xl:tracking-[0.4em] tracking-[0.2em]"}
			/>
			<SectionBgComponent
				column={false}
				isSVG1={true}
				isSVG2={true}
				className={"px-14 xl:py-20 lg:py-16 md:py-12 sm:py-8"}
			>
				<SectionNameComponent
					isWhite={true}
					className={"xl:text-start text-center"}
					title={
						<>
							خدمات{" "}
							<span className="font-Plasma text-[#1d5eff]">
								کدلند
							</span>
						</>
					}
				/>
			</SectionBgComponent>
			<div className="w-full lg:flex grid grid-cols-2 lg:flex-row items-center xl:justify-end 2xl:gap-10 xl:gap-6 lg:gap-8 md:gap-4 sm:gap-4 gap-2 lg:justify-center xl:ml-24 xl:mt-[-7rem] lg:mt-[-5rem] md:mt-[-2rem] sm:mt-[-1rem] z-10">
				<SectionItemComponent
					title={"طراحی سایت"}
					icon={AnyIcon}
					address={"/WebDesign"}
				/>
				<SectionItemComponent
					title={"طراحی اپلیکیشن"}
					icon={AnyIcon}
					address={"/AppDesign"}
				/>
				<SectionItemComponent
					title={"سئو"}
					icon={AnyIcon}
					address={"/SEO"}
				/>
				<SectionItemComponent
					title={"پشتیبانی سایت"}
					icon={AnyIcon}
					address={"/Support"}
				/>
			</div>
		</div>
	);
}
