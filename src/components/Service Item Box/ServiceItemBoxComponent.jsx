import React from "react";

export default function ServiceItemBoxComponent({
	children,
	margin = "mt-40",
	direction,
}) {
	return (
		<div
			className={`w-full flex ${direction} items-center ${margin} 2xl:gap-12 gap-6 xl:border-none border-dashed border-t-2 border-[#747373] lg:py-8 lg:px-4 py-4`}
		>
			{children}
		</div>
	);
}
