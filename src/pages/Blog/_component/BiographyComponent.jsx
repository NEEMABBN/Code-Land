import React from "react";
import { BsCalendarDateFill } from "react-icons/bs";
import { CiCalendarDate } from "react-icons/ci";
import { GiSandsOfTime } from "react-icons/gi";

export default function BiographyComponent({ name, profile, time, date }) {
	return (
		<div className="flex flex-row-reverse items-center lg:gap-6 gap-2">
			<div className="flex flex-row items-center lg:gap-2 gap-1">
				<span className="text-sm">{name}</span>
				<img
					src={profile}
					alt="User Profile"
					className="w-[25px] h-[25px] rounded-full overflow-hidden"
				/>
			</div>
			<div className="flex flex-row items-center lg:gap-2 gap-1">
				<span className="text-sm">{time}</span>
				<GiSandsOfTime className="text-xl" />
			</div>
			<div className="flex flex-row items-center lg:gap-2 gap-1">
				<span className="text-sm">{date}</span>
				<CiCalendarDate className="text-2xl" />
			</div>
		</div>
	);
}
