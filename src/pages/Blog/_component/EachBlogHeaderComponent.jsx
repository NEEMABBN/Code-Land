import React from "react";
import { GrFormNext } from "react-icons/gr";
import { NavLink } from "react-router-dom";

export default function EachBlogHeaderComponent({ children }) {
	return (
		<div className="w-full flex flex-row items-center justify-between">
			<div className="flex flex-row-reverse items-center lg:gap-2 gap-0">
				<NavLink>Home</NavLink>
				<GrFormNext className="text-xl" />
				<NavLink>Task 1</NavLink>
			</div>
			{children}
		</div>
	);
}
