import React from "react";
import { BsInstagram, BsTwitterX, BsWhatsapp } from "react-icons/bs";
import { FiShare2 } from "react-icons/fi";
import { LuLayoutList } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export default function SideMenuComponent() { 
	return (
		<div className="lg:w-[20%] md:w-[25%] w-full xl:h-[455px] h-[483px] flex flex-col items-center sticky top-28 left-0 gap-5">
			<div className="w-full flex flex-col items-center py-4 gap-4 bg-white rounded-[32px] shadow-[0_2px_8px_0_rgba(99,99,99,0.2)]">
				<div className="w-full flex flex-row items-center border-b-2 border-solid border-gray-300 px-6 py-2 gap-2">
					<LuLayoutList className="text-lg" />
					<h3 className="text-sm font-semibold">فهرست محتوا</h3>
				</div>
				<span className="text-[13px] text-gray-500 hover:text-Primary transition-all cursor-pointer">
					استراتژی محتوا چیست؟
				</span>
				<span className="text-[13px] text-gray-500 hover:text-Primary transition-all cursor-pointer">
					استراتژی محتوا چیست؟
				</span>
				<span className="text-[13px] text-gray-500 hover:text-Primary transition-all cursor-pointer">
					استراتژی محتوا چیست؟
				</span>
				<span className="text-[13px] text-gray-500 hover:text-Primary transition-all cursor-pointer">
					استراتژی محتوا چیست؟
				</span>
			</div>
			<div className="w-full flex flex-col items-center bg-white rounded-[32px] shadow-[0_2px_8px_0_rgba(99,99,99,0.2)]">
				<div className="w-full flex flex-row items-center gap-2 border-b-2 border-solid border-gray-300 px-7 py-4">
					<FiShare2 className="text-lg" />
					<h3 className="text-sm font-semibold">اشتراک گذاری</h3>
				</div>
				<div className="w-full flex flex-row items-center justify-center xl:gap-8 gap-4 py-5">
					<Link to="/">
						<BsInstagram className="text-2xl text-gray-400 hover:text-[#E1306C] transition-all" />
					</Link>
					<Link to="/">
						<BsWhatsapp className="text-2xl text-gray-400 hover:text-[#25D366] transition-all" />
					</Link>
					<Link to="/">
						<BsTwitterX className="text-2xl text-gray-400 hover:text-black transition-all" />
					</Link>
					<Link to="/">
						<MdOutlineEmail className="text-2xl text-gray-400 hover:text-[#0072C6] transition-all" />
					</Link>
				</div>
			</div>
			<div className="w-full flex xl:flex-row flex-col items-center justify-center gap-3 py-4 bg-white rounded-[32px] shadow-[0_2px_8px_0_rgba(99,99,99,0.2)]">
				<span className="text-sm font-semibold">
					میزان پیشرفت خواندن شما
				</span>
				<div className="w-[50px] h-[50px] rounded-full border-2 border-solid border-Primary flex flex-col items-center py-3">
					<span className="text-base">۶۰٪</span>
				</div>
			</div>
		</div>
	);
}
