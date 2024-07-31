import React from "react";

export default function CommentBoxComponent({ profile, name, comment }) {
	return (
		<div className="bg-white rounded-[60px] flex md:flex-row flex-col items-center md:gap-16 gap-5 px-8 md:py-10 py-5 swiper-BoxShadow">
			<div className="flex md:flex-row flex-col items-center px-4 gap-3">
				<img src={profile} alt="User Profile" className="" />
				<span className="text-nowrap text-[18px] font-bold">
					{name}
				</span>
			</div>
			<p className="px-5 text-[16px] text-[#828282] over-text-flow">
				{comment}
			</p>
		</div>
	);
}
