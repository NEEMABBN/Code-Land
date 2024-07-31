import React from "react";
import LandingStatisticsComponent from "./_component/LandingStatisticsComponent";
import LandingTitleComponent from "./_component/LandingTitleComponent";
import ServiceComponent from "./_component/ServiceComponent";
import ChoosingComponent from "./_component/ChoosingComponent";
import WorkSampleComponent from "./_component/WorkSampleComponent";
import CommentsComponent from "./_component/CommentsComponent";
import WeblogComponent from "./_component/WeblogComponent";
import ContainerBox from "../../components/Container Box/ContainerBox";
import FAQItemComponent from "../../components/FAQ Item/FAQItemComponent";
import FAQBoxComponent from "../../components/FAQ Box/FAQBoxComponent";

export default function HomePage() {
	return (
		<>
			<ContainerBox>
				<div className="w-full xl:bg-[url('../assets/Images/Rectangle-66.png')] xl:bg-no-repeat 2xl:bg-cover xl:bg-inherit bg-none bg-[#23242A] 2xl:rounded-none sm:rounded-[70px] rounded-none flex md:flex-row flex-col-reverse md:justify-between justify-center items-center md:mt-14 sm:mt-8 relative">
					<LandingStatisticsComponent />
					<LandingTitleComponent />
				</div>
				<ServiceComponent />
				<ChoosingComponent />
				<WorkSampleComponent />
				<CommentsComponent />
			</ContainerBox>
			<WeblogComponent />
			<ContainerBox>
				<FAQBoxComponent>
					<FAQItemComponent
						question={"قیمت طراحی سایت چگونه مشخص میشود؟"}
						answer={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
				استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
				در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
				نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد`}
					/>
					<FAQItemComponent
						question={"قیمت طراحی سایت چگونه مشخص میشود؟"}
						answer={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
				استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
				در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
				نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد`}
					/>
				</FAQBoxComponent>
			</ContainerBox>
		</>
	);
}
