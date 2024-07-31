import React from "react";

export default function WorkSampleScrollyComponent({ title, backGround }) {
	return (
		<div className="flex flex-col items-center gap-6">
			<div
				className={`${backGround} bg-no-repeat bg-cover rounded-[32px] hover:bg-bottom transition-all duration-1000 border-solid border-4 border-white cursor-pointer w-full h-[550px]`}
			></div>
			<span className="text-white font-bold">{title}</span>
		</div>
	);
}
