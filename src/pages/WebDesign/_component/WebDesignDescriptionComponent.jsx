import React from "react";
import BigBackgroundComponent from "../../../components/Big Background/BigBackgroundComponent";
import SectionNameComponent from "../../../components/Section Name/SectionNameComponent";
import ContainerBox from "../../../components/Container Box/ContainerBox";
import WorkSampleScrollyComponent from "../../../components/Work Sample Scrolly/WorkSampleScrollyComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

export default function WebDesignDescriptionComponent() {
	return (
		<BigBackgroundComponent Margin="" className={"py-8"}>
			<ContainerBox className={"gap-14 pb-16"}>
				<div className="w-full flex flex-col items-center sm:px-0 px-8">
					<SectionNameComponent
						isWhite={true}
						className={"text-center my-8"}
						title={
							<>
								چرا طراحی سایت در{" "}
								<span className="font-Plasma text-[#1d5eff]">
									کدلند
								</span>
							</>
						}
					/>
					<p className="text-white text-start font-bold md:text-[17px] text-[14px] leading-8">
						ما برای موفقیت شما تمامی امکانات و خدمات طراحی وب سایت
						را یک‌جا جمع کرده‌ایم. از طراحی هویت شما در کارخانه خلاق
						وبسیما تا امکانات متنوع برندینگ و فروش آنلاین محصولات به
						همراه حضور قدرتمند در نتایج جستجو. تنها یک اراده تا
						پرواز باقی مانده است. استدیو UI و UX مصرانه خلاق هستیم
						وبسیما برای تغییر سیمای وب ایران شکل گرفته است. امیرحسین
						اسماعیلی، بنیان‌گذار وبسیما و یکی از برترین طراحان UI و
						UX ایران، به دنبال ایجاد خلاقیت و تفاوت در طراحی سایت
						بود. تفکر خلاق، نگرش متفاوت و استفاده از آخرین
						فناوری‌های روز دنیا در کنار تعهد شالوده واحد طراحی وب
						سایت را تشکیل می‌دهد. ما برای موفقیت شما تمامی امکانات و
						خدمات طراحی وب سایت را یک‌جا جمع کرده‌ایم. از طراحی هویت
						شما در کارخانه خلاق وبسیما تا امکانات متنوع برندینگ و
						فروش آنلاین محصولات به همراه حضور قدرتمند در نتایج
						جستجو. تنها یک اراده تا پرواز باقی مانده است. استدیو UI
						و UX مصرانه خلاق هستیم وبسیما برای تغییر سیمای وب ایران
						شکل گرفته است. امیرحسین اسماعیلی، بنیان‌گذار وبسیما و
						یکی از برترین طراحان UI و UX ایران، به دنبال ایجاد
						خلاقیت و تفاوت در طراحی سایت بود. تفکر خلاق، نگرش متفاوت
						و استفاده از آخرین فناوری‌های روز دنیا در کنار تعهد
						شالوده واحد طراحی وب سایت را تشکیل می‌دهد. ما برای
						موفقیت شما تمامی امکانات و خدمات طراحی وب سایت را یک‌جا
						جمع کرده‌ایم. از طراحی هویت شما در کارخانه خلاق وبسیما
						تا امکانات متنوع برندینگ و فروش آنلاین محصولات به همراه
						حضور قدرتمند در نتایج جستجو. تنها یک اراده تا پرواز باقی
						مانده است. استدیو UI و UX مصرانه خلاق هستیم وبسیما برای
						تغییر سیمای وب ایران شکل گرفته است. امیرحسین اسماعیلی،
						بنیان‌گذار وبسیما و یکی از برترین طراحان UI و UX ایران،
						به دنبال ایجاد خلاقیت و تفاوت در طراحی سایت بود. تفکر
						خلاق، نگرش متفاوت و استفاده از آخرین فناوری‌های روز دنیا
						در کنار تعهد شالوده واحد طراحی وب سایت را تشکیل می‌دهد.
					</p>
				</div>
				<div className="w-full flex flex-col items-center gap-11 mt-10">
					<SectionNameComponent
						isWhite={true}
						title={"نمونه کارها"}
						className={"lg:text-start text-center"}
					/>
					<div className="w-full md:grid hidden xl:grid-cols-3 sm:grid-cols-2 md:gap-14 gap-10 sm:px-0 px-8">
						<WorkSampleScrollyComponent
							title={"کلینیک دندانپزشکی"}
							backGround={
								"bg-[url('/src/assets/Images/Group83.png')]"
							}
						/>
						<WorkSampleScrollyComponent
							title={"کلینیک دندانپزشکی"}
							backGround={
								"bg-[url('/src/assets/Images/hamt1.png')]"
							}
						/>
						<WorkSampleScrollyComponent
							title={"کلینیک دندانپزشکی"}
							backGround={
								"bg-[url('/src/assets/Images/Group83.png')]"
							}
						/>
						<WorkSampleScrollyComponent
							title={"کلینیک دندانپزشکی"}
							backGround={
								"bg-[url('/src/assets/Images/hamt1.png')]"
							}
						/>
						<WorkSampleScrollyComponent
							title={"کلینیک دندانپزشکی"}
							backGround={
								"bg-[url('/src/assets/Images/Group83.png')]"
							}
						/>
						<WorkSampleScrollyComponent
							title={"کلینیک دندانپزشکی"}
							backGround={
								"bg-[url('/src/assets/Images/hamt1.png')]"
							}
						/>
					</div>
					<div className="w-full md:hidden block">
						<Swiper
							effect={"cards"}
							grabCursor={true}
							modules={[EffectCards]}
							className="mySwiper sm:px-24 px-16"
						>
							<SwiperSlide className="rounded-[32px] overflow-hidden">
								<WorkSampleScrollyComponent
									backGround={
										"bg-[url('/src/assets/Images/hamt1.png')]"
									}
								/>
							</SwiperSlide>
							<SwiperSlide className="rounded-[32px] overflow-hidden">
								<WorkSampleScrollyComponent
									backGround={
										"bg-[url('/src/assets/Images/Group83.png')]"
									}
								/>
							</SwiperSlide>
							<SwiperSlide className="rounded-[32px] overflow-hidden">
								<WorkSampleScrollyComponent
									backGround={
										"bg-[url('/src/assets/Images/hamt1.png')]"
									}
								/>
							</SwiperSlide>
							<SwiperSlide className="rounded-[32px] overflow-hidden">
								<WorkSampleScrollyComponent
									backGround={
										"bg-[url('/src/assets/Images/Group83.png')]"
									}
								/>
							</SwiperSlide>
							<SwiperSlide className="rounded-[32px] overflow-hidden">
								<WorkSampleScrollyComponent
									backGround={
										"bg-[url('/src/assets/Images/hamt1.png')]"
									}
								/>
							</SwiperSlide>
							<SwiperSlide className="rounded-[32px] overflow-hidden">
								<WorkSampleScrollyComponent
									backGround={
										"bg-[url('/src/assets/Images/Group83.png')]"
									}
								/>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</ContainerBox>
		</BigBackgroundComponent>
	);
}
