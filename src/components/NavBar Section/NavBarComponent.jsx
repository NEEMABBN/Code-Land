import * as React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import MegaMenuComponent from "../Mega Menu/MegaMenuComponent";

export default function NavBarComponent({ isWhite = true }) {
	return (
		<ul className="flex flex-row items-center xl:gap-10 lg:gap-8 md:gap-4 text-nowrap lg:text-[14px] md:text-[14px]">
			<li
				className={`font-bold relative group ${
					isWhite
						? "text-[#23242A] hover:hover:text-[#1D5EFF]"
						: "text-white hover:text-[#23242A]"
				} transition-all`}
			>
				<NavLink
					to="/WebDesign"
					className={({ isActive }) =>
						`flex flex-row items-center gap-2 onHover py-2 ${
							isActive
								? isWhite
									? "text-[#1D5EFF]"
									: "text-[#23242A]"
								: ""
						}`
					}
				>
					طراحی سایت
					<FaAngleDown />
				</NavLink>
				<MegaMenuComponent />
			</li>
			<li
				className={`font-bold relative group ${
					isWhite
						? "text-[#23242A] hover:hover:text-[#1D5EFF]"
						: "text-white hover:text-[#23242A]"
				} transition-all`}
			>
				<NavLink
					to="/AppDesign"
					className={({ isActive }) =>
						`flex flex-row items-center gap-2 onHover py-2 ${
							isActive
								? isWhite
									? "text-[#1D5EFF]"
									: "text-[#23242A]"
								: ""
						}`
					}
				>
					طراحی اپلیکیشن
					<FaAngleDown />
				</NavLink>
				<MegaMenuComponent />
			</li>
			<li
				className={`font-bold relative group ${
					isWhite
						? "text-[#23242A] hover:hover:text-[#1D5EFF]"
						: "text-white hover:text-[#23242A]"
				} transition-all`}
			>
				<NavLink
					to="/SEO"
					className={({ isActive }) =>
						`flex flex-row items-center gap-2 onHover py-2 ${
							isActive
								? isWhite
									? "text-[#1D5EFF]"
									: "text-[#23242A]"
								: ""
						}`
					}
				>
					سئو سایت
					<FaAngleDown />
				</NavLink>
				<MegaMenuComponent />
			</li>
			<li
				className={`font-bold ${
					isWhite
						? "text-[#23242A] hover:hover:text-[#1D5EFF]"
						: "text-white hover:text-[#23242A]"
				} transition-all`}
			>
				<NavLink
					to="/Support"
					className={({ isActive }) =>
						`onHover py-2 ${
							isActive
								? isWhite
									? "text-[#1D5EFF]"
									: "text-[#23242A]"
								: ""
						}`
					}
				>
					پشتیبانی سایت
				</NavLink>
			</li>
			<li
				className={`font-bold ${
					isWhite
						? "text-[#23242A] hover:hover:text-[#1D5EFF]"
						: "text-white hover:text-[#23242A]"
				} transition-all`}
			>
				<NavLink
					to="/Blog"
					className={({ isActive }) =>
						`onHover py-2 ${
							isActive
								? isWhite
									? "text-[#1D5EFF]"
									: "text-[#23242A]"
								: ""
						}`
					}
				>
					بلاگ
				</NavLink>
			</li>
			<li
				className={`font-bold ${
					isWhite
						? "text-[#23242A] hover:hover:text-[#1D5EFF]"
						: "text-white hover:text-[#23242A]"
				} transition-all`}
			>
				<NavLink
					to="/AboutUs"
					className={({ isActive }) =>
						`onHover py-2 ${
							isActive
								? isWhite
									? "text-[#1D5EFF]"
									: "text-[#23242A]"
								: ""
						}`
					}
				>
					درباره ما
				</NavLink>
			</li>
		</ul>
	);
}
