import { Button, TextField } from "@mui/material";
import React from "react";
import MuiCustomThemeComponent from "../MuiCustomTheme/MuiCustomThemeComponent";
import BallIcon from "../../assets/Images/Ball-2.svg";

export default function ConsultationRequestComponent({
	Display = "lg:flex hidden",
	DarkBtn,
}) {
	return (
		<div
			className={`bg-white ${Display} flex-col xl:gap-5 lg:gap-2 items-center w-full consultation-BoxShadow lg:rounded-[60px] sm:rounded-[32px] rounded-[60px] xl:px-12 xl:py-7 lg:px-10 lg:py-5 md:py-6 md:px-12 md:gap-5 py-7 px-10 gap-4 relative overflow-hidden`}
		>
			<h3 className="w-full text-start font-Bold xl:text-[16px] lg:text-[14px]">
				درخواست مشاوره
			</h3>
			<MuiCustomThemeComponent>
				<TextField
					id="outlined-basic"
					label="نام نام‌خانوادگی"
					className="!w-full"
					variant="outlined"
					InputLabelProps={{
						className: "lg:!text-[13px] xl:!text-[16px]",
					}}
					inputProps={{ className: "lg:!py-3 xl:!py-4" }}
					InputProps={{ sx: { borderRadius: "40px" } }}
				/>
				<TextField
					id="outlined-basic"
					label="توضیحات"
					className="!w-full"
					variant="outlined"
					InputLabelProps={{
						className: "lg:!text-[13px] xl:!text-[16px]",
					}}
					inputProps={{ className: "lg:!py-3 xl:!py-4" }}
					InputProps={{
						sx: { borderRadius: "40px" },
					}}
				/>
			</MuiCustomThemeComponent>
			<div className="w-full flex flex-row justify-end">
				<Button
					variant="contained"
					className={`!rounded-full ${
						DarkBtn ? "!bg-[#23242A]" : "!bg-[#1D5EFF]"
					} `}
				>
					ارسال درخواست
				</Button>
			</div>
			<img
				src={BallIcon}
				alt="Ball Icon"
				className="absolute bottom-0 right-0 xl:w-fit lg:w-[100px]"
			/>
		</div>
	);
}
