import React from "react";
import MegaMenuImage from "../../assets/Images/2150201871 1.png";
import { Link } from "react-router-dom";

export default function MegaMenuComponent() {
	return (
		<div className="absolute animate-in fade-in transition-all duration-500 top-[37px] right-0 bg-white group-hover:flex hidden flex-row justify-between z-50 w-[790px] rounded-[20px] overflow-hidden shadow-[0_0_50px_-15px_rgba(29,94,255,0.5)]">
			<div className="w-[65%] flex flex-row items-center px-14 gap-20 z-20 bg-white shadow-[0px_0px_90px_130px_rgba(255,255,255,50)]">
				<ul className="flex flex-col items-start gap-4 text-sm">
					<li className="list-item list-[circle] text-[#23242A] hover:text-[#1D5EFF] transition-all">
						<Link to="/" className="">
							طراحی سایت اختصاصی
						</Link>
					</li>
					<li className="list-item list-[circle] text-[#23242A] hover:text-[#1D5EFF] transition-all">
						<Link to="/" className="">
							طراحی سایت وردپرس
						</Link>
					</li>
					<li className="list-item list-[circle] text-[#23242A] hover:text-[#1D5EFF] transition-all">
						<Link to="/" className="">
							طراحی سایت املاک
						</Link>
					</li>
					<li className="list-item list-[circle] text-[#23242A] hover:text-[#1D5EFF] transition-all">
						<Link to="/" className="">
							طراحی سایت رستوران
						</Link>
					</li>
					<li className="list-item list-[circle] text-[#23242A] hover:text-[#1D5EFF] transition-all">
						<Link to="/" className="">
							طراحی سایت شرکتی
						</Link>
					</li>
					<li className="list-item list-[circle] text-[#23242A] hover:text-[#1D5EFF] transition-all">
						<Link to="/" className="">
							طراحی سایت فروشگاهی
						</Link>
					</li>
				</ul>
				<ul className="flex flex-col items-start gap-4 text-sm">
					<li className="list-item list-[circle] text-[#23242A] hover:text-[#1D5EFF] transition-all">
						<Link to="/" className="">
							طراحی سایت اختصاصی
						</Link>
					</li>
					<li className="list-item list-[circle] text-[#23242A] hover:text-[#1D5EFF] transition-all">
						<Link to="/" className="">
							طراحی سایت وردپرس
						</Link>
					</li>
					<li className="list-item list-[circle] text-[#23242A] hover:text-[#1D5EFF] transition-all">
						<Link to="/" className="">
							طراحی سایت املاک
						</Link>
					</li>
					<li className="list-item list-[circle] text-[#23242A] hover:text-[#1D5EFF] transition-all">
						<Link to="/" className="">
							طراحی سایت رستوران
						</Link>
					</li>
					<li className="list-item list-[circle] text-[#23242A] hover:text-[#1D5EFF] transition-all">
						<Link to="/" className="">
							طراحی سایت شرکتی
						</Link>
					</li>
					<li className="list-item list-[circle] text-[#23242A] hover:text-[#1D5EFF] transition-all">
						<Link to="/" className="">
							طراحی سایت فروشگاهی
						</Link>
					</li>
				</ul>
			</div>
			<img src={MegaMenuImage} alt="" className="z-10 w-[35%]" />
		</div>
	);
}
