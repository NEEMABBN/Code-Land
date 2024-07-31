import React from "react";
import RoadMapHeaderComponent from "../../../components/Road Map Header/RoadMapHeaderComponent";
import HeaderImage from "../../../assets/Images/Frame 225.png";
import RoadMapBodyComponent from "../../../components/Road Map Body/RoadMapBodyComponent";

export default function RoadMapComponent() {
	return (
		<div>
			<RoadMapHeaderComponent
				title={"چرا وبسایت؟"}
				description={
					"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"
				}
				image={HeaderImage}
			/>
			<RoadMapBodyComponent />
		</div>
	);
}
