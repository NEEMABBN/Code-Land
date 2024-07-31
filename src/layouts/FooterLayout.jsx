import React from "react";
import NavBarComponent from "../components/NavBar Section/NavBarComponent";
import AppSetting from "../config/Setting/AppSetting";
import instagramIcon from "../assets/Images/Instagram11111.svg";
import whatsappIcon from "../assets/Images/Whatsapp11111.svg";
import twitterIcon from "../assets/Images/Twitter111111.svg";
import linkedin from "../assets/Images/LinkedIn11111.svg";
import License1 from "../assets/Images/License/download (3) 1.png";
import License2 from "../assets/Images/License/download (4) 1.png";
import License3 from "../assets/Images/License/download (4) 2.png";
import { Link } from "react-router-dom";

export default function FooterLayout() {
	return (
		<div className="w-full bg-[#23252C] md:flex hidden flex-col items-center py-12 mt-20">
			<div className="container mx-auto bg-[#1D5EFF] rounded-[100px] flex flex-col items-center gap-12 py-10 lg:px-16 md:px-10">
				<div className="w-full flex flex-row items-center justify-between">
					<Link to="/" className="flex flex-row items-center gap-2">
						<img
							src={AppSetting.Logo}
							alt="CodeLand-Logo"
							className="invert brightness-0"
						/>
						<strong className="font-Plasma text-[33px] font-bold text-white">
							{AppSetting.ProjectName}
						</strong>
					</Link>
					<NavBarComponent isWhite={false} />
					<div className="flex flex-row-reverse items-center">
						<img
							src={instagramIcon}
							alt="App Icon"
							className="xl:w-[60px] lg:w-[50px] md:w-[40px]"
						/>
						<img
							src={whatsappIcon}
							alt="App Icon"
							className="xl:w-[60px] lg:w-[50px] md:w-[40px]"
						/>
						<img
							src={twitterIcon}
							alt="App Icon"
							className="xl:w-[60px] lg:w-[50px] md:w-[40px]"
						/>
						<img
							src={linkedin}
							alt="App Icon"
							className="xl:w-[60px] lg:w-[50px] md:w-[40px]"
						/>
					</div>
				</div>
				<div className="w-full flex flex-row items-center justify-center gap-8">
					<img
						src={License3}
						alt="Company License Image"
						className="bg-white p-2 rounded-2xl"
					/>
					<img
						src={License1}
						alt="Company License Image"
						className="bg-white p-2 rounded-2xl"
					/>
					<img
						src={License2}
						alt="Company License Image"
						className="bg-white p-2 rounded-2xl"
					/>
				</div>
			</div>
		</div>
	);
}
