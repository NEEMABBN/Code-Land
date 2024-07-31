import React from "react";

export default function ContainerBox({ children, className }) {
	return (
		<div
			className={`flex flex-col items-center sm:container sm:mx-auto w-full ${className}`}
		>
			{children}
		</div>
	);
}
