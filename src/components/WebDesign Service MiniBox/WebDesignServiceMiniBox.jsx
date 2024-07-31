import React from "react";

export default function WebDesignServiceMiniBox({ icon, title }) {
	return (
		<div className="flex flex-col items-center lg:gap-6 gap-3 lg:bg-white bg-[#23242A] 2xl:py-6 xl:py-9 lg:py-5 2xl:px-11 xl:px-9 lg:px-7 md:py-7 md:px-9 p-6 xl:rounded-[50px] lg:rounded-[40px] rounded-[30px] serviceItem-BoxShadow">
			<img
				src={icon}
				alt="Service Mini Box Icon"
				className="rounded-[17px] 2xl:w-[78px] md:w-[70px] w-[55px]"
			/>
			<span className="font-extrabold lg:text-black text-white xl:text-[16px] md:text-[15px] text-[14px] text-nowrap">
				{title}
			</span>
		</div>
	);
}
