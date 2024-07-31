import React from "react";
import GroupImg from "../../../assets/Images/Group-1.png";
import MiniStar from "../../../assets/Images/Mask group.svg";
import ConsultationRequestComponent from "../../../components/Consultation Request/ConsultationRequestComponent";

export default function LandingStatisticsComponent() {
	return (
		<div className="flex flex-col items-center md:w-[40%] w-full xl:gap-6 2xl:gap-14 xl:justify-normal lg:justify-around lg:px-9 md:px-5 md:pt-8">
			<div className="flex flex-col items-center 2xl:gap-7 xl:gap-10 lg:gap-5 md:gap-12 md:my-4 sm:gap-10 gap-4 md:pb-0 pb-3">
				<div className="Statistics-Box flex flex-row items-center justify-center xl:gap-10 lg:gap-5 md:gap-4 py-4 md:px-11 px-12 sm:gap-10 gap-4 border-solid border border-[#1D7BFF] rounded-[40px] relative">
					<img
						src={MiniStar}
						alt="Little Star Like Your Eyes"
						className="absolute lg:right-[-20px] lg:top-[-30px] lg:w-fit w-[50px] md:right-[-8px] md:top-[-25px] right-[-8px] top-[-22px]"
					/>
					<img
						src={GroupImg}
						alt="User's Profile"
						className="lg:w-fit sm:w-[110px] w-[100px]"
					/>
					<div className="flex flex-col items-center">
						<span className="xl:text-4xl text-3xl font-bold font-Plasma text-[#1D5EFF]">
							۴۰+
						</span>
						<span className="font-semibold text-white 2xl:text-[16px] xl:text-[14px] text-[12px]">
							مشتری
						</span>
					</div>
					<div className="flex flex-col items-center">
						<span className="xl:text-4xl text-3xl font-bold font-Plasma text-[#1D5EFF]">
							۵ +
						</span>
						<span className="font-semibold text-white 2xl:text-[16px] xl:text-[14px] text-[12px] text-nowrap">
							سال خدمت
						</span>
					</div>
				</div>
				<p className="text-white 2xl:text-[16px] 2xl:leading-7 xl:text-[14px] xl:leading-[25px] text-[13px] lg:leading-[23px] leading-[26px] md:p-0 sm:px-24 px-4 md:text-right text-center">
					لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
					با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
					و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
					تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
					کاربردی می باشد
				</p>
			</div>
			<ConsultationRequestComponent />
		</div>
	);
}
