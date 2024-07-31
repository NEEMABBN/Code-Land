import React from "react";

export default function BigBackgroundComponent({
	children,
	Margin = "mt-28",
	className,
}) {
	return (
		<div
			className={`w-full flex flex-col items-center big-background ${Margin} ${className}`}
		>
			{children}
		</div>
	);
}
