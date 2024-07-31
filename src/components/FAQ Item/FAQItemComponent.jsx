import React from "react";

export default function FAQItemComponent({ question, answer }) {
	return (
		<div className="flex flex-col items-start bg-white py-10 2xl:px-12 xl:px-9 px-10 lg:gap-10 md:gap-7 gap-5 sm:rounded-[60px] rounded-[50px] swiper-BoxShadow">
			<h2 className="font-bold lg:text-[19px]">{question}</h2>
			<p className="text-[#747373] lg:leading-normal lg:text-[16px] leading-8 text-[14px] over-text-flow">
				{answer}
			</p>
		</div>
	);
}
