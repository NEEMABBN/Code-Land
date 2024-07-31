import { Button } from "@mui/material";
import React from "react";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";

export default function SliderBtnComponent({
	swiperRef,
	className = "lg:flex hidden  justify-start",
}) {
	const nextSlide = () => {
		swiperRef.current.slideNext();
	};
	const prevSlide = () => {
		swiperRef.current.slidePrev();
	};
	return (
		<div className={`${className} flex-row items-center gap-8 w-[55%]`}>
			<Button
				variant="contained"
				onClick={prevSlide}
				className="!rounded-t-[12px] !rounded-bl-[30px] !rounded-br-[12px] !bg-[#1D5EFF] !border-solid !border-2 !border-[#1D5EFF] !p-0 !py-1"
			>
				<MdOutlineNavigateNext size={"45px"} />
			</Button>
			<Button
				variant="contained"
				onClick={nextSlide}
				className="!rounded-t-[12px] !rounded-bl-[12px] !rounded-br-[30px] !bg-transparent !border-solid !border-2 !border-white !p-0 !py-1"
			>
				<GrFormPrevious size={"45px"} />
			</Button>
		</div>
	);
}
