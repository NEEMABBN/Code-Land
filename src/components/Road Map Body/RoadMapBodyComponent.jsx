import React from "react";
import SectionNameComponent from "../Section Name/SectionNameComponent";
import ItemsIcon from "../../assets/Images/Frame 226.svg";
import WebDesignServiceMiniBox from "../WebDesign Service MiniBox/WebDesignServiceMiniBox";
import ServiceItemBoxComponent from "../Service Item Box/ServiceItemBoxComponent";
import ServiceItemOptionComponent from "../Service Item Option Box/ServiceItemOptionComponent";

export default function RoadMapBodyComponent() {
	return (
		<div className="w-full flex flex-col items-center xl:bg-[url('../assets/Images/Line-73.svg')] xl:bg-no-repeat xl:bg-cover xl:px-10 2xl:pb-36 xl:pb-28">
			<ServiceItemBoxComponent
				margin="xl:mt-28 mt-3"
				direction={"lg:flex-row-reverse flex-col"}
			>
				<SectionNameComponent
					size="xl:text-[3rem] sm:text-[2.5rem] text-[1.7rem]"
					isWhite={false}
					Warper="text-wrap"
					width="lg:w-[30%] w-full"
					className={"lg:text-start text-center"}
					title={
						<>
							مزایای داشتن{" "}
							<span className="font-Plasma text-[#1d5eff]">
								وبسایت
							</span>{" "}
							برای کسب و کارها
						</>
					}
				/>
				<ServiceItemOptionComponent>
					<WebDesignServiceMiniBox
						title={"طراحی سایت"}
						icon={ItemsIcon}
					/>
					<WebDesignServiceMiniBox
						title={"طراحی سایت"}
						icon={ItemsIcon}
					/>
					<WebDesignServiceMiniBox
						title={"طراحی سایت"}
						icon={ItemsIcon}
					/>
					<WebDesignServiceMiniBox
						title={"طراحی سایت"}
						icon={ItemsIcon}
					/>
				</ServiceItemOptionComponent>
			</ServiceItemBoxComponent>
			<ServiceItemBoxComponent
				margin="2xl:mt-28 xl:mt-16 mt-7"
				direction={"lg:flex-row flex-col"}
			>
				<SectionNameComponent
					size="xl:text-[3rem] sm:text-[2.5rem] text-[1.7rem]"
					isWhite={false}
					Warper="text-wrap"
					width="lg:w-[30%] w-full"
					className={"lg:text-start text-center"}
					title={
						<>
							اصلی ترین ویژگی های{" "}
							<span className="font-Plasma text-[#1d5eff]">
								وبسایت
							</span>{" "}
							خوب
						</>
					}
				/>
				<ServiceItemOptionComponent>
					<WebDesignServiceMiniBox
						title={"طراحی سایت"}
						icon={ItemsIcon}
					/>
					<WebDesignServiceMiniBox
						title={"طراحی سایت"}
						icon={ItemsIcon}
					/>
					<WebDesignServiceMiniBox
						title={"طراحی سایت"}
						icon={ItemsIcon}
					/>
					<WebDesignServiceMiniBox
						title={"طراحی سایت"}
						icon={ItemsIcon}
					/>
				</ServiceItemOptionComponent>
			</ServiceItemBoxComponent>
			<ServiceItemBoxComponent
				margin="2xl:mt-28 xl:mt-14 mt-7"
				direction={"lg:flex-row-reverse flex-col"}
			>
				<SectionNameComponent
					size="xl:text-[3rem] sm:text-[2.5rem] text-[1.7rem]"
					isWhite={false}
					Warper="text-wrap"
					width="lg:w-[30%] w-full"
					className={"lg:text-start text-center"}
					title={
						<>
							مراحل طراحی یک{" "}
							<span className="font-Plasma text-[#1d5eff]">
								سایت
							</span>
						</>
					}
				/>
				<ServiceItemOptionComponent>
					<WebDesignServiceMiniBox
						title={"طراحی سایت"}
						icon={ItemsIcon}
					/>
					<WebDesignServiceMiniBox
						title={"طراحی سایت"}
						icon={ItemsIcon}
					/>
					<WebDesignServiceMiniBox
						title={"طراحی سایت"}
						icon={ItemsIcon}
					/>
					<WebDesignServiceMiniBox
						title={"طراحی سایت"}
						icon={ItemsIcon}
					/>
				</ServiceItemOptionComponent>
			</ServiceItemBoxComponent>
		</div>
	);
}
