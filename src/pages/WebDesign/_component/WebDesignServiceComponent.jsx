import React from "react";
import SectionNameComponent from "../../../components/Section Name/SectionNameComponent";
import SectionBgComponent from "../../../components/Section Background/SectionBgComponent";
import WebDesignServiceItemComponent from "../../../components/WebDesign Service Item/WebDesignServiceItemComponent";
import pinkyStar from "../../../assets/Images/MaskGroupPinkyStar.svg";
import yellowStar from "../../../assets/Images/Mask group.svg";

export default function WebDesignServiceComponent() {
	return (
		<div className="w-full flex flex-col gap-24 mt-24">
			<SectionNameComponent
				isWhite={false}
				className={"text-center"}
				title={
					<>
						خدمات طراحی{" "}
						<span className="font-Plasma text-[#1d5eff]">سایت</span>
					</>
				}
			/>
			<SectionBgComponent
				isSVG1={true}
				isSVG2={true}
				column={true}
				className={"px-12 py-20"}
			>
				<img
					src={pinkyStar}
					alt=""
					className="w-[50px] absolute top-[1rem] right-[10rem]"
				/>
				<div className="w-full grid xl:grid-cols-3 md:grid-cols-2 gap-4">
					<WebDesignServiceItemComponent />
					<WebDesignServiceItemComponent />
					<WebDesignServiceItemComponent />
					<WebDesignServiceItemComponent />
					<WebDesignServiceItemComponent />
					<WebDesignServiceItemComponent />
					<WebDesignServiceItemComponent />
					<WebDesignServiceItemComponent />
					<WebDesignServiceItemComponent />
					<WebDesignServiceItemComponent />
					<WebDesignServiceItemComponent />
					<WebDesignServiceItemComponent />
				</div>
				<img
					src={yellowStar}
					alt="Yellow Star Icon"
					className="w-[45px] absolute bottom-[1rem] left-[4rem]"
				/>
			</SectionBgComponent>
		</div>
	);
}
