import React from "react";
import SectionNameComponent from "../Section Name/SectionNameComponent";
import RectAngleIcon from "../../assets/Images/Cone.svg";
import Button from "@mui/material/Button";

export default function MainLandingComponent({
	title,
	description,
	button,
	image,
	imageSize,
	margin,
	icon1,
	icon2,
	icon3,
	icon4,
	icon5,
	style1,
	style2,
	style3,
	style4,
	style5,
	googleImage,
}) {
	return (
		<div className="w-full flex md:flex-row flex-col-reverse md:items-end items-center bg-[#23242A] sm:rounded-[80px] md:py-0 py-8 sm:px-14 px-6 md:mt-16 sm:mt-9">
			<div className="xl:w-[50%] md:w-[40%] w-full flex md:flex-col flex-col-reverse xl:items-start items-center xl:py-20 md:py-10 gap-8">
				<SectionNameComponent
					title={title}
					isWhite={true}
					className={"lg:block hidden xl:text-start text-center"}
				/>
				<p className="text-white leading-8 xl:text-start text-center lg:text-[16px] sm:text-[14px] text-[12px]">
					{description}
				</p>
				<Button
					variant="contained"
					className="!rounded-full !bg-[#1D5EFF] !py-5 md:!px-4 sm:!px-24 !px-20 max-[450px]:!px-7 max-[450px]:!text-[14px] max-[350px]:!p-4"
				>
					{button}
				</Button>
			</div>
			<div className="xl:w-[50%] md:w-[60%] w-full flex flex-col items-center lg:gap-0 md:gap-14 relative">
				<SectionNameComponent
					title={title}
					isWhite={true}
					className={"lg:hidden block text-center"}
					size={"lg:text-[3.4rem] text-[3rem]"}
				/>
				<img
					src={icon1}
					alt="Icon's"
					className={`absolute ${style1}`}
				/>
				<img
					src={icon2}
					alt="Icon's"
					className={`absolute ${style2}`}
				/>
				<img
					src={icon3}
					alt="Icon's"
					className={`absolute ${style3}`}
				/>
				<img
					src={icon4}
					alt="Icon's"
					className={`absolute ${style4}`}
				/>
				<img
					src={icon5}
					alt="Icon's"
					className={`absolute ${style5}`}
				/>
				<img
					src={googleImage}
					alt=""
					className="md:block hidden absolute lg:w-[365px] w-[300px] lg:top-[-6rem] top-[4rem] lg:left-[2rem] left-0"
				/>
				<img
					src={image}
					alt="Landing Image"
					className={`${imageSize} ${margin}`}
				/>
			</div>
		</div>
	);
}
