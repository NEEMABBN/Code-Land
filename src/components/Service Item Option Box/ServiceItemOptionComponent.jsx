import React from "react";

export default function ServiceItemOptionComponent({ children }) {
	return (
		<div className="lg:w-[70%] w-full">
			<div className="bg-[#23242A] w-full lg:block hidden py-12 rounded-[32px]"></div>
			<div className="sm:flex grid grid-cols-2 flex-row items-center sm:gap-0 gap-4 sm:px-0 px-4 justify-around w-full lg:mt-[-3.5rem]">
				{children}
			</div>
		</div>
	);
}
