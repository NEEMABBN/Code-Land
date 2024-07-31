import React, { useRef } from "react";
import SectionsTitleComponent from "../../../components/Sections Title/SectionsTitleComponent";
import SectionBgComponent from "../../../components/Section Background/SectionBgComponent";
import SectionNameComponent from "../../../components/Section Name/SectionNameComponent";
import userProfile from "../../../assets/Images/Frame 57.png";
import { Swiper, SwiperSlide } from "swiper/react";
import StrIcon from "../../../assets/Images/Mask group2.svg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import SliderBtnComponent from "../../../components/Slider Button Group/SliderBtnComponent";
import CommentBoxComponent from "../../../components/Comment Box/CommentBoxComponent";

export default function CommentsComponent() {
	const swiperRef = useRef();
	return (
		<div className="w-full flex flex-col items-center mt-16">
			<SectionsTitleComponent
				title={"COMMENTS"}
				className={"xl:tracking-[0.2em]"}
			/>
			<SectionBgComponent
				column={true}
				isSVG1={false}
				isSVG2={false}
				className={"lg:px-16 lg:py-9 py-2 lg:gap-5 gap-1"}
			>
				<div className="w-full flex lg:flex-row flex-col md:justify-normal justify-center items-center relative">
					<div className="lg:w-[45%] flex flex-row items-center lg:pr-8">
						<SectionNameComponent
							isWhite={true}
							className={""}
							title={"نظرات کاربران"}
						/>
					</div>
					<SliderBtnComponent swiperRef={swiperRef} />
					<img
						src={StrIcon}
						alt="Star Icon:)"
						className="absolute top-10 left-10"
					/>
				</div>
				<Swiper
					slidesPerView={1}
					spaceBetween={45}
					loop={true}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
					className="mySwiper w-full px-7 py-9"
					onSwiper={(swiper) => {
						swiperRef.current = swiper;
					}}
				>
					<SwiperSlide>
						<CommentBoxComponent
							profile={userProfile}
							name={"امیر خزائیلی"}
							comment={`طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
								کرد، در این صورت می توان امید داشت که تمام و
								دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ
								به پایان رسد و زمان مورد نیاز شامل حروفچینی
								دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
								دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.`}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<CommentBoxComponent
							profile={userProfile}
							name={"امیر خزائیلی"}
							comment={`طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
								کرد، در این صورت می توان امید داشت که تمام و
								دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ
								به پایان رسد و زمان مورد نیاز شامل حروفچینی
								دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
								دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.`}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<CommentBoxComponent
							profile={userProfile}
							name={"امیر خزائیلی"}
							comment={`طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
								کرد، در این صورت می توان امید داشت که تمام و
								دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ
								به پایان رسد و زمان مورد نیاز شامل حروفچینی
								دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
								دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.`}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<CommentBoxComponent
							profile={userProfile}
							name={"امیر خزائیلی"}
							comment={`طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
								کرد، در این صورت می توان امید داشت که تمام و
								دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ
								به پایان رسد و زمان مورد نیاز شامل حروفچینی
								دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
								دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.`}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<CommentBoxComponent
							profile={userProfile}
							name={"امیر خزائیلی"}
							comment={`طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
								کرد، در این صورت می توان امید داشت که تمام و
								دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ
								به پایان رسد و زمان مورد نیاز شامل حروفچینی
								دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
								دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.`}
						/>
					</SwiperSlide>
				</Swiper>
				<SliderBtnComponent
					swiperRef={swiperRef}
					className={"flex lg:hidden justify-center"}
				/>
			</SectionBgComponent>
		</div>
	);
}
