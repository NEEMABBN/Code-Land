import React from "react";
import ContainerBox from "../../components/Container Box/ContainerBox";
import WebDesignLandingComponent from "./_component/WebDesignLandingComponent";
import WebDesignServiceComponent from "./_component/WebDesignServiceComponent";
import RoadMapComponent from "./_component/RoadMapComponent";
import WebDesignDescriptionComponent from "./_component/WebDesignDescriptionComponent";
import PelanSectionComponent from "../../components/Pelan Section/PelanSectionComponent";
import FAQBoxComponent from "../../components/FAQ Box/FAQBoxComponent";
import ConsultationSectionComponent from "../../components/Consultation Section/ConsultationSectionComponent";
import FAQItemComponent from "../../components/FAQ Item/FAQItemComponent";

export default function WebDesignPage() {
	return (
		<>
			<ContainerBox>
				<WebDesignLandingComponent />
				<WebDesignServiceComponent />
				<RoadMapComponent />
			</ContainerBox>
			<WebDesignDescriptionComponent />
			<ContainerBox>
				<PelanSectionComponent />
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
				<ConsultationSectionComponent
					DarkBg={true}
					booly={true}
					margin="mt-24"
				/>
			</ContainerBox>
		</>
	);
}
