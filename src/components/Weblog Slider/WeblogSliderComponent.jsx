import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import WeblogItemComponent from "../Weblog Item/WeblogItemComponent";
import personalProfile from "../../assets/Images/34862 1.png";
import memberProfile from "../../assets/Images/Frame 106.png";

export default function WeblogSliderComponent() {
	return (
		<Swiper
			effect={"coverflow"}
			grabCursor={true}
			centeredSlides={true}
			slidesPerView={1}
			coverflowEffect={{
				rotate: 50,
				stretch: 0,
				depth: 0,
				modifier: 1,
				slideShadows: true,
			}}
			pagination={true}
			breakpoints={{
				640: {
					slidesPerView: 3,
				},
				400: {
					slidesPerView: 2,
				},
			}}
			modules={[EffectCoverflow, Pagination]}
			className="mySwiper xl:hidden flex flex-row items-center w-full py-8"
		>
			<SwiperSlide className="rounded-[32px] overflow-hidden">
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
			</SwiperSlide>
			<SwiperSlide className="rounded-[32px] overflow-hidden">
				<WeblogItemComponent
					address={"/"}
					image={personalProfile}
					title={"چرا نیاز به وبسایت داریم"}
					description={
						"مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"
					}
					profile={memberProfile}
					name={"Amir Khazaeli"}
				/>{" "}
			</SwiperSlide>
			<SwiperSlide className="rounded-[32px] overflow-hidden">
				<WeblogItemComponent
					address={"/"}
					image={personalProfile}
					title={"چرا نیاز به وبسایت داریم"}
					description={
						"مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"
					}
					profile={memberProfile}
					name={"Parsa Mahmoudi"}
				/>{" "}
			</SwiperSlide>
			<SwiperSlide className="rounded-[32px] overflow-hidden">
				<WeblogItemComponent
					address={"/"}
					image={personalProfile}
					title={"چرا نیاز به وبسایت داریم"}
					description={
						"مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"
					}
					profile={memberProfile}
					name={"Aqa Neema"}
				/>{" "}
			</SwiperSlide>
			<SwiperSlide className="rounded-[32px] overflow-hidden">
				<WeblogItemComponent
					address={"/"}
					image={personalProfile}
					title={"چرا نیاز به وبسایت داریم"}
					description={
						"مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"
					}
					profile={memberProfile}
					name={"Amir Khazaeli"}
				/>{" "}
			</SwiperSlide>
			<SwiperSlide className="rounded-[32px] overflow-hidden">
				<WeblogItemComponent
					address={"/"}
					image={personalProfile}
					title={"چرا نیاز به وبسایت داریم"}
					description={
						"مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"
					}
					profile={memberProfile}
					name={"Parsa Mahmoudi"}
				/>{" "}
			</SwiperSlide>
			<SwiperSlide className="rounded-[32px] overflow-hidden">
				<WeblogItemComponent
					address={"/"}
					image={personalProfile}
					title={"چرا نیاز به وبسایت داریم"}
					description={
						"مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"
					}
					profile={memberProfile}
					name={"Aqa Neema"}
				/>{" "}
			</SwiperSlide>
		</Swiper>
	);
}
