import React from "react";
import ConsultationRequestComponent from "../Consultation Request/ConsultationRequestComponent";
import SectionNameComponent from "../Section Name/SectionNameComponent";
import LinlyIcon from "../../assets/Images/Highlight_05555.svg";

export default function ConsultationSectionComponent({
	DarkBg,
	booly,
	margin = "mt-8",
}) {
	return (
		<div
			className={`ConsultationRequest-Section w-full ${
				DarkBg
					? "xl:bg-[url(/src/assets/Images/Rectangle-69Dark.png)] bg-[#23242A]"
					: "xl:bg-[url('../assets/Images/Rectangle-69.png')] bg-[#1d5eff]"
			}  xl:bg-no-repeat 2xl:bg-cover xl:bg-inherit ${margin} flex lg:flex-row flex-col items-center 2xl:py-4 2xl:px-10 xl:py-6 xl:px-12 lg:py-6 md:py-9 lg:px-8 md:px-10 xl:gap-10 gap-5 p-8 xl:rounded-none sm:rounded-[32px]`}
		>
			<div className="flex flex-col sm:items-start items-center gap-5">
				<div className="relative lg:mt-0 mt-5">
					<SectionNameComponent
						isWhite={true}
						title={"درخواست مشاوره رایگان"}
						size={"sm:text-[2.6rem]"}
						className={"text-[2.2rem]"}
					/>
					<img
						src={LinlyIcon}
						alt=""
						className="absolute sm:top-[-30px] sm:left-[-35px] top-[-20px] left-[-30px] sm:w-[50px] w-[40px]"
					/>
				</div>
				<p className="text-white 2xl:leading-normal leading-7 xl:text-[16px] md:text-[14px] text-[13px] over-text-flow">
					لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
					با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
					و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
					تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
					کاربردی می باشد
				</p>
			</div>
			<ConsultationRequestComponent Display="flex" DarkBtn={booly} />
		</div>
	);
}
