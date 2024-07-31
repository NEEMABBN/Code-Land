import React from "react";
import BigBackgroundComponent from "../../../components/Big Background/BigBackgroundComponent";
import SectionNameComponent from "../../../components/Section Name/SectionNameComponent";
import WeblogItemComponent from "../../../components/Weblog Item/WeblogItemComponent";
import rectIcon1 from "../../../assets/Images/Cone2828.svg";
import starIcon from "../../../assets/Images/Mask group2727.svg";
import pinkStarIcon from "../../../assets/Images/Mask group2.svg";
import personalProfile from "../../../assets/Images/34862 1.png";
import memberProfile from "../../../assets/Images/Frame 106.png";
import WeblogSliderComponent from "../../../components/Weblog Slider/WeblogSliderComponent";
import ConsultationSectionComponent from "../../../components/Consultation Section/ConsultationSectionComponent";

export default function WeblogComponent() {
	return (
		<BigBackgroundComponent>
			<div className="container mx-auto flex flex-col items-center gap-20 py-20 relative">
				<img
					src={rectIcon1}
					alt="Icon's"
					className="absolute xl:right-[24em] md:right-[10em] right-[3em] top-[3em]"
				/>
				<img
					src={starIcon}
					alt="Icon's"
					className="absolute left-[5em] top-[7em]"
				/>
				<div className="Weblog-Section w-full flex flex-col items-center gap-8">
					<SectionNameComponent
						isWhite={true}
						className={"text-center"}
						title={"وبلاگ ما"}
					/>
					<div className="w-full xl:flex hidden flex-row items-center gap-4">
						<WeblogItemComponent
							address={"/"}
							image={personalProfile}
							title={"چرا نیاز به وبسایت داریم"}
							description={
								"مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"
							}
							profile={memberProfile}
							name={"Mostafa Abedini"}
						/>
						<WeblogItemComponent
							address={"/"}
							image={personalProfile}
							title={"چرا نیاز به وبسایت داریم"}
							description={
								"مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"
							}
							profile={memberProfile}
							name={"Amir Khazaeli"}
						/>
						<WeblogItemComponent
							address={"/"}
							image={personalProfile}
							title={"چرا نیاز به وبسایت داریم"}
							description={
								"مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"
							}
							profile={memberProfile}
							name={"Parsa Mahmoudi"}
						/>
						<WeblogItemComponent
							address={"/"}
							image={personalProfile}
							title={"چرا نیاز به وبسایت داریم"}
							description={
								"مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"
							}
							profile={memberProfile}
							name={"Aqa Neema"}
						/>
					</div>
					<WeblogSliderComponent />
				</div>
				<ConsultationSectionComponent DarkBg={false} booly={false} />
				<img
					src={rectIcon1}
					alt="Icon's"
					className="absolute 2xl:bottom-[15em] 2xl:right-[-3em] xl:bottom-[27em] lg:bottom-[24em] bottom-[40em] right-[5em]"
				/>
				<img
					src={pinkStarIcon}
					alt="Icon's"
					className="absolute 2xl:bottom-[2em] 2xl:left-[-2em] bottom-[2em] left-[1em]"
				/>
			</div>
		</BigBackgroundComponent>
	);
}
