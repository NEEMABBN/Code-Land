import * as React from "react";
import Button from "@mui/material/Button";
import AppSetting from "../config/Setting/AppSetting";
import NavBarComponent from "../components/NavBar Section/NavBarComponent";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function HeaderLayout() {
	const [isFixed, setIsFixed] = useState(false);
	const [top, setTop] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.pageYOffset > 100) {
				setTimeout(() => {
					setTop(true);
				}, 50);
				setIsFixed(true);
			} else {
				setTop(false);
				setIsFixed(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<div
				className={`${
					isFixed
						? `fixed z-50 py-2  shadow-[0_0_40px_-10px_rgba(29,94,255,0.5)] ${
								top ? "top-0" : "top-[-90px]"
						  }`
						: "static md:mt-7"
				} w-full bg-white transition-all md:block hidden duration-500`}
			>
				<div
					className={`container mx-auto bg-white md:flex transition-all duration-500 hidden flex-row items-center justify-between`}
				>
					<Link to="/" className="flex flex-row items-center gap-2">
						<img
							src={AppSetting.Logo}
							alt="CodeLand-Logo"
							className=""
						/>
						<strong className="font-Plasma text-[33px] font-bold text-[#232631]">
							{AppSetting.ProjectName}
						</strong>
					</Link>
					<NavBarComponent />
					<Button
						variant="contained"
						className="!rounded-full !bg-[#1D5EFF] !p-3"
					>
						درخواست مشاوره
					</Button>
				</div>
			</div>
		</>
	);
}
