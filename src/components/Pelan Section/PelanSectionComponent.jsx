import React from "react";
import SectionNameComponent from "../Section Name/SectionNameComponent";
import SectionBgComponent from "../Section Background/SectionBgComponent";
import PelanItemComponent from "./PelanItemComponent";
import StarIcon from "../../assets/Images/Mask group.svg";
import RectIcon from "../../assets/Images/Cone2828.svg";
import PinkStarIcon from "../../assets/Images/Mask group2.svg";

export default function PelanSectionComponent() {
	return (
		<div className="w-full flex flex-col items-center mt-24 gap-7">
			<SectionNameComponent
				isWhite={false}
				className={"text-center"}
				title={
					<>
						<span className="font-Plasma text-[#1d5eff]">پلن</span>{" "}
						خود را انتخاب کنید
					</>
				}
			/>
			<SectionBgComponent
				margin={""}
				isSVG1={true}
				isSVG2={false}
				column={true}
				className={"lg:p-12 py-16 px-8"}
			>
				<img
					src={StarIcon}
					alt="Star Icon"
					className="absolute top-[0.5rem] right-[1rem]"
				/>
				<img
					src={RectIcon}
					alt="RectAngel Icon"
					className="absolute 2xl:top-[3rem] sm:top-[0.4rem] top-[13rem] 2xl:left-[6rem] sm:left-[7rem] left-[3rem]"
				/>
				<img
					src={PinkStarIcon}
					alt="Pink Star Icon"
					className="absolute bottom-[10rem] left-[2rem]"
				/>
				<div className="w-full lg:flex flex-row grid md:grid-cols-2 grid-cols-subgrid lg:gap-0 gap-14">
					<PelanItemComponent
						image={
							"2xl:bg-[url('/src/assets/Images/Rectangle4453V3.png')] 2xl:bg-inherit bg-white"
						}
						price={
							<>
								<span className="font-Plasma text-[#1d5eff]">
									۶ میلیون
								</span>{" "}
								تومان
							</>
						}
						headerText={"مناسب کسب و کارهای متوسط"}
						title={"استارتر"}
						description={
							"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعل بهبود ابزارهای کاربردی می باشد"
						}
						button={"سفارش"}
					/>
					<div className="lg:block hidden w-[2px] my-auto 2xl:h-[35rem] xl:h-[30rem] h-[36rem] rounded-full bg-white"></div>
					<PelanItemComponent
						image={
							"2xl:bg-[url('/src/assets/Images/Rectangle4453V2.png')] 2xl:bg-inherit 2xl:shadow-none bg-[#77FF94] shadow-[0_0_30px_1px_rgba(119,255,148,100%)]"
						}
						price={
							<>
								<span className="font-Plasma text-purple-500">
									۱۵ میلیون
								</span>{" "}
								تومان
							</>
						}
						headerText={"مناسب کسب و کارهای خوب"}
						title={"پیشرفته"}
						description={
							"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و نیاز، و کاربردهای متنوع با هدف sadsasd ابزارهای کاربردی می باشد"
						}
						button={"سفارش"}
					/>
					<div className="lg:block hidden w-[2px] my-auto 2xl:h-[35rem] xl:h-[30rem] h-[36rem] rounded-full bg-white"></div>
					<PelanItemComponent
						image={
							"2xl:bg-[url('/src/assets/Images/Rectangle4453.png')] 2xl:bg-inherit 2xl:shadow-none bg-[#FDC455] shadow-[0_0_30px_1px_rgba(253,196,85,100%)]"
						}
						price={
							<>
								<span className="font-Plasma text-red-500">
									۴۰ میلیون
								</span>{" "}
								تومان
							</>
						}
						headerText={"مناسب کسب و کارهای حرفه‌ای"}
						title={"اختصاصی"}
						description={
							"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون  با هدف بهبود ابزارهای کاربردی می باشد"
						}
						button={"سفارش"}
					/>
				</div>
			</SectionBgComponent>
		</div>
	);
}
