import React from "react";

export default function EachBlogBodyComponent({ children }) {
	return (
		<div className="lg:w-[80%] md:w-[75%] w-full flex flex-col items-center gap-10">
			{children}
		</div>
	);
}
