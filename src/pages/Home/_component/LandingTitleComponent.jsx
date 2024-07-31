import React from "react";
import TextIcon from "../../../assets/Images/Highlight_05.svg";
import BanerPost from "../../../assets/Images/Frame 147.png";
import ConstImage from "../../../helpers/Const/ConstImage";

export default function LandingTitleComponent() {
	return (
		<div className="flex flex-col items-center justify-between md:w-[60%] w-full 2xl:gap-6 xl:gap-4 gap-12 relative">
			<div className="relative xl:mt-9 2xl:mt-16 lg:mt-14 md:mt-11 mt-10">
				<img
					src={TextIcon}
					alt="Anything You Can Imagine"
					className="absolute right-[-20px] top-[-10px]"
				/>
				<h1 className="font-Plasma lg:text-[60px] md:text-[45px] sm:text-[40px] text-[35px] text-white">
					حرفه‌ای انجامش بده :)
				</h1>
			</div>
			<img src={BanerPost} alt="A Man With A Phone In His Hand" />
			<img
				src={ConstImage.PurpleIcon}
				alt="icon's"
				className="absolute lg:bottom-[4rem] lg:left-[4rem] sm:bottom-[5rem] bottom-[1rem] sm:left-[2rem] left-[1rem]"
			/>
			<img
				src={ConstImage.YellowBigStar}
				alt="icon's"
				className="absolute xl:left-[9rem] left-0 sm:bottom-[15rem] bottom-[10rem]"
			/>
			<img
				src={ConstImage.PinkMiniStar}
				alt="icon's"
				className="absolute left-[6rem] lg:top-[10rem] top-[7rem]"
			/>
			<img
				src={ConstImage.RectIcon}
				alt="icon's"
				className="absolute xl:right-[14rem] lg:right-[10rem] md:right-[1rem] sm:right-[13rem] right-[6rem] lg:top-[10rem] top-[6rem]"
			/>
			<img
				src={ConstImage.YellowMiniStar}
				alt="icon's"
				className="absolute lg:right-[5rem] md:right-[3rem] sm:right-[5rem] right-[2rem] lg:top-[20rem] md:bottom-[20rem] top-[10rem]"
			/>
			<img
				src={ConstImage.PinkBigStar}
				alt="icon's"
				className="absolute lg:bottom-[1rem] sm:bottom-[8rem] bottom-[2rem] xl:right-[7rem] md:right-[-1rem] sm:right-[2rem] right-[0rem]"
			/>
		</div>
	);
}
