import React from "react";
import SectionsTitleComponent from "../../../components/Sections Title/SectionsTitleComponent";
import SectionBgComponent from "../../../components/Section Background/SectionBgComponent";
import SectionNameComponent from "../../../components/Section Name/SectionNameComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import workSample1 from "../../../assets/Images/WorkSample/Group 8 3.png";
import workSample2 from "../../../assets/Images/WorkSample/hamt 1.png";
import workSample3 from "../../../assets/Images/WorkSample/Landing-page 2.png";
import RectIcon from "../../../assets/Images/Cone.svg";
import StrIcon from "../../../assets/Images/Mask group2.svg";

export default function WorkSampleComponent() {
	return (
		<div className="w-full flex flex-col items-center mt-20">
			<SectionsTitleComponent
				title={"WORKSAMPLE"}
				className={
					"xl:tracking-[0.2em] lg:tracking-[0.1em] tracking-normal"
				}
			/>
			<SectionBgComponent
				isSVG1={true}
				isSVG2={true}
				column={false}
				className={"py-2"}
			>
				<div className="sm:w-[25%] w-[40%] flex flex-col items-center justify-center relative 2xl:px-20 xl:px-16">
					<img
						src={RectIcon}
						alt="Icon SVG"
						className="absolute sm:top-16 lg:right-24 md:right-10 sm:right-3 top-7 right-7"
					/>
					<SectionNameComponent
						isWhite={true}
						title={"نمونه کارها"}
						className={"xl:text-start text-center"}
					/>
					<img
						src={StrIcon}
						alt="Icon SVG"
						className="absolute sm:bottom-16 lg:left-10 md:left-6 sm:left-4 bottom-10 left-6"
					/>
				</div>
				<div className="sm:w-[75%] w-[60%] flex flex-row">
					<Swiper
						slidesPerView={1}
						spaceBetween={30}
						autoplay={{
							delay: 2200,
							disableOnInteraction: false,
						}}
						breakpoints={{
							400: {
								slidesPerView: 2,
								spaceBetween: 30,
							},
							640: {
								slidesPerView: 3,
								spaceBetween: 20,
							},
						}}
						modules={[Pagination, Autoplay]}
						className="mySwiper py-10 px-5"
					>
						<SwiperSlide>
							<img
								src={workSample1}
								alt="Work Sample Image"
								className="2xl:w-[290px] 2xl:h-[430px] xl:w-[240px] xl:h-[400px] lg:w-[210px] lg:h-[350px] md:w-[170px] md:h-[290px] sm:w-[120px] sm:h-[190px] w-[120px] h-[180px] rounded-[16px] swiper-BoxShadow"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src={workSample2}
								alt="Work Sample Image"
								className="2xl:w-[290px] 2xl:h-[430px] xl:w-[240px] xl:h-[400px] lg:w-[210px] lg:h-[350px] md:w-[170px] md:h-[290px] sm:w-[120px] sm:h-[190px] w-[120px] h-[180px] rounded-[16px] swiper-BoxShadow"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src={workSample3}
								alt="Work Sample Image"
								className="2xl:w-[290px] 2xl:h-[430px] xl:w-[240px] xl:h-[400px] lg:w-[210px] lg:h-[350px] md:w-[170px] md:h-[290px] sm:w-[120px] sm:h-[190px] w-[120px] h-[180px] rounded-[16px] swiper-BoxShadow"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src={workSample1}
								alt="Work Sample Image"
								className="2xl:w-[290px] 2xl:h-[430px] xl:w-[240px] xl:h-[400px] lg:w-[210px] lg:h-[350px] md:w-[170px] md:h-[290px] sm:w-[120px] sm:h-[190px] w-[120px] h-[180px] rounded-[16px] swiper-BoxShadow"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src={workSample2}
								alt="Work Sample Image"
								className="2xl:w-[290px] 2xl:h-[430px] xl:w-[240px] xl:h-[400px] lg:w-[210px] lg:h-[350px] md:w-[170px] md:h-[290px] sm:w-[120px] sm:h-[190px] w-[120px] h-[180px] rounded-[16px] swiper-BoxShadow"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src={workSample3}
								alt="Work Sample Image"
								className="2xl:w-[290px] 2xl:h-[430px] xl:w-[240px] xl:h-[400px] lg:w-[210px] lg:h-[350px] md:w-[170px] md:h-[290px] sm:w-[120px] sm:h-[190px] w-[120px] h-[180px] rounded-[16px] swiper-BoxShadow"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src={workSample1}
								alt="Work Sample Image"
								className="2xl:w-[290px] 2xl:h-[430px] xl:w-[240px] xl:h-[400px] lg:w-[210px] lg:h-[350px] md:w-[170px] md:h-[290px] sm:w-[120px] sm:h-[190px] w-[120px] h-[180px] rounded-[16px] swiper-BoxShadow"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src={workSample2}
								alt="Work Sample Image"
								className="2xl:w-[290px] 2xl:h-[430px] xl:w-[240px] xl:h-[400px] lg:w-[210px] lg:h-[350px] md:w-[170px] md:h-[290px] sm:w-[120px] sm:h-[190px] w-[120px] h-[180px] rounded-[16px] swiper-BoxShadow"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src={workSample3}
								alt="Work Sample Image"
								className="2xl:w-[290px] 2xl:h-[430px] xl:w-[240px] xl:h-[400px] lg:w-[210px] lg:h-[350px] md:w-[170px] md:h-[290px] sm:w-[120px] sm:h-[190px] w-[120px] h-[180px] rounded-[16px] swiper-BoxShadow"
							/>
						</SwiperSlide>
					</Swiper>
				</div>
			</SectionBgComponent>
		</div>
	);
}
