import React from "react";
import MainLandingComponent from "../../../components/Main Landing/MainLandingComponent";
import LandingImage from "../../../assets/Images/Frame-103.png";
import ConstImage from "../../../helpers/Const/ConstImage";

export default function WebDesignLandingComponent() {
	return (
		<MainLandingComponent
			title={"طراحی سایت"}
			description={
				"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"
			}
			button={"مشاوره رایگان طراحی سایت"}
			image={LandingImage}
			imageSize={"w-[500px]"}
			margin={"sm:m-0 ml-9"}
			icon1={ConstImage.PinkBigStar}
			style1={"right-0 lg:top-0 top-20"}
			icon2={ConstImage.PurpleIcon}
			style2={"bottom-10 left-4"}
			icon3={ConstImage.RectIcon}
			style3={"lg:top-[-4rem] top-[4rem]"}
			icon4={ConstImage.YellowBigStar}
			style4={"lg:bottom-20 bottom-1 2xl:right-6 right-0 "}
			icon5={ConstImage.YellowMiniStar}
			style5={"lg:top-12 top-32 left-0"}
		/>
	);
}
