import React from "react";
import MainLandingComponent from "../../../components/Main Landing/MainLandingComponent";
import LandingImage from "../../../assets/Images/man-with-vr-glasses-technology1.png";
import ConstImage from "../../../helpers/Const/ConstImage";
import GoogleImage from "../../../assets/Images/360_F_445237294_R2Wne0H1dgPPjf4y2hbYOJwtXhFEtxwH1.png";

export default function SeoLandingBanerComponent() {
	return (
		<MainLandingComponent
			title={"سئو سایت"}
			description={
				"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"
			}
			button={"مشاوره رایگان طراحی سایت"}
			googleImage={GoogleImage}
			image={LandingImage}
			imageSize={
				"md:w-[500px] sm:w-[400px] w-[390px] max-[450px]:w-[340px]"
			}
			margin={
				"md:m-0 sm:mr-16 mr-10 max-[450px]:mr-9 md:px-0 sm:px-2 px-7 max-[450px]:px-14"
			}
			icon1={ConstImage.PinkMiniStar}
			style1={"lg:top-0 md:top-[2rem] top-[6rem] right-0"}
			icon2={ConstImage.PinkBigStar}
			style2={
				"lg:bottom-3 md:bottom-36 sm:bottom-7 bottom-[-1rem] lg:left-[-1rem] sm:left-[-2rem] left-0"
			}
			icon3={ConstImage.PurpleIcon}
			style3={
				"lg:top-[-8rem] md:top-[7rem] top-[2rem] md:right-[3rem] sm:right-[7rem] right-[3rem]"
			}
			icon4={ConstImage.YellowMiniStar}
			style4={"sm:bottom-20 bottom-1 right-0"}
			icon5={ConstImage.RectIcon}
			style5={"lg:top-12 top-5 left-0"}
		/>
	);
}
