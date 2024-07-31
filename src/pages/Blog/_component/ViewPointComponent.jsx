import { Button, TextField } from "@mui/material";
import React from "react";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import MuiCustomThemeComponent from "../../../components/MuiCustomTheme/MuiCustomThemeComponent";

export default function ViewPointComponent() {
	return (
		<div className="w-full flex flex-col items-center gap-10 py-10 bg-white shadow-[0_2px_8px_0_rgba(99,99,99,0.2)] rounded-[32px] px-10">
			<div className="flex flex-row items-center w-full gap-4">
				<HiOutlineChatBubbleLeftRight className="text-2xl" />
				<span className="text-xl font-semibold">
					دیدگاهتان را بنویسید
				</span>
			</div>
			<textarea
				name=""
				id=""
				placeholder="دیدگاهتان را بنویسید"
				className="w-full bg-white rounded-[20px] border px-7 py-4 pb-11 outline-blue-500"
			></textarea>
			<div className="w-full flex flex-row items-center gap-10">
				<MuiCustomThemeComponent>
					<TextField
						id="outlined-basic"
						label="نام نام‌خانوادگی"
						className="!w-full"
						variant="outlined"
						InputLabelProps={{
							className: "lg:!text-[13px] xl:!text-[16px]",
						}}
						inputProps={{
							className: "lg:!py-3 xl:!py-7",
						}}
						InputProps={{
							sx: { borderRadius: "20px" },
						}}
					/>
					<TextField
						id="outlined-basic"
						label="ایمیل یا شماره تلفن"
						className="!w-full"
						variant="outlined"
						InputLabelProps={{
							className: "lg:!text-[13px] xl:!text-[16px]",
						}}
						inputProps={{
							className: "lg:!py-3 xl:!py-7",
						}}
						InputProps={{
							sx: { borderRadius: "20px" },
						}}
					/>
				</MuiCustomThemeComponent>
			</div>
			<div className="w-full flex flex-row justify-end">
				<Button
					variant="contained"
					className="!rounded-2xl !bg-[#1D5EFF] !py-3 !px-9"
				>
					ارسال دیدگاه
				</Button>
			</div>
		</div>
	);
}
