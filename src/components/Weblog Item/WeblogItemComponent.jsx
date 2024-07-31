import React from "react";

import { FaClock } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function WeblogItemComponent({
	image,
	title,
	description,
	profile,
	name,
	shadow,
	address,
}) {
	return (
		<Link
			to={address}
			className={`${shadow} flex flex-col items-center bg-white p-4 rounded-[32px] gap-5 overflow-hidden max-[400px]:mx-8`}
		>
			<img
				src={image}
				alt="Some Image"
				className="w-[280px] rounded-[22px] image-Blog-BoxShadow"
			/>
			<div className="flex flex-col items-start gap-2">
				<h3 className="text-base max-[400px]:text-sm font-bold">
					{title}
				</h3>
				<p className="over-text-flow text-[#5D5D5D] text-sm max-[400px]:text-xs">
					{description}
				</p>
			</div>
			<div className="w-full flex lg:flex-row flex-col lg:items-center items-stretch justify-between mt-4">
				<div className="flex flex-row items-center gap-1">
					<FaClock className="text-xl text-[#1d5eff]" />
					<span className="text-[11px] text-nowrap">
						۱۰ دقیقه زمان خواندن
					</span>
				</div>
				<div className="flex flex-row-reverse items-center gap-1">
					<img
						src={profile}
						alt="Member Profile"
						className="w-[26px]"
					/>
					<h2 className="text-[13px] text-nowrap">{name}</h2>
				</div>
			</div>
		</Link>
	);
}
