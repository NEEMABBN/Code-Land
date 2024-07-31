import React from "react";
import SectionNameComponent from "../../../components/Section Name/SectionNameComponent";
import OptionItemComponent from "../../../components/Option Items/OptionItemComponent";
import TextIconDark from "../../../assets/Images/Highlight-Dark_05.svg";
import Button from "@mui/material/Button";
import personPic from "../../../assets/Images/34862 1.png";

export default function ChoosingComponent() {
	return (
		<div className="w-full mt-28 ">
			<div className="w-full flex md:flex-row flex-col items-center justify-between">
				<div className="relative">
					<SectionNameComponent
						isWhite={false}
						className={"xl:text-start text-center"}
						title={
							<>
								چرا باید{" "}
								<span className="font-Plasma text-[#1d5eff]">
									کدلند
								</span>{" "}
								را انتخاب کنیم
							</>
						}
					/>
					<img
						src={TextIconDark}
						alt="Anything You Can Imagine"
						className="absolute top-[-20px] sm:left-[-40px] sm:w-[50px] w-[40px] left-[-28px]"
					/>
				</div>
				<Button
					variant="contained"
					className="!rounded-full !bg-[#1D5EFF]"
					size="large"
				>
					بیشتر بدانید
				</Button>
			</div>
			<div className="w-full flex lg:flex-row flex-col md:gap-4 gap-2 mt-7">
				<div className="lg:w-[70%] w-full flex flex-col lg:justify-between md:justify-normal md:items-center lg:gap-0 md:gap-4 gap-2">
					<OptionItemComponent
						title={"پشتیبانی رایگان"}
						description={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
								صنعت چاپ، و با استفاده از طراحان گرافیک است،
								چاپگرها و متون بلکه روزنامه و مجله در ستون و
								سطرآنچنان که لازم است، و برای شرایط فعلی
								تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
								بهبود ابزارهای کاربردی می باشد`}
						isImage={true}
						size={false}
						column={false}
						image={personPic}
					/>
					<OptionItemComponent
						title={"پشتیبانی رایگان"}
						description={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
								صنعت چاپ، و با استفاده از طراحان گرافیک است،
								چاپگرها و متون بلکه روزنامه و مجله در ستون و
								سطرآنچنان که لازم است، و برای شرایط فعلی
								تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
								بهبود ابزارهای کاربردی می باشد`}
						isImage={true}
						size={false}
						column={false}
						image={personPic}
					/>
				</div>
				<div className="lg:w-[30%] w-full flex flex-col md:gap-4 gap-2">
					<OptionItemComponent
						title={"پشتیبانی رایگان"}
						description={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
								صنعت چاپ، و با استفاده از طراحان گرافیک است،
								چاپگرها و متون بلکه روزنامه و مجله در ستون و
								سطرآنچنان که لازم است، و برای شرایط فعلی
								تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
								بهبود ابزارهای کاربردی می باشد`}
						column={true}
						isImage={true}
						size={true}
						image={personPic}
					/>
					<OptionItemComponent
						title={"پشتیبانی رایگان"}
						description={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
								صنعت چاپ، و با استفاده از طراحان گرافیک است،
								چاپگرها و متون بلکه روزنامه و مجله در ستون و
								سطرآنچنان که لازم است، و برای شرایط فعلی
								تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
								بهبود ابزارهای کاربردی می باشد`}
						isImage={false}
						column={false}
					/>
				</div>
			</div>
		</div>
	);
}
