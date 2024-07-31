import * as React from "react";
import SectionNameComponent from "../../components/Section Name/SectionNameComponent";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState } from "react";
import { FormControl, PaginationItem } from "@mui/material";
import ContainerBox from "../../components/Container Box/ContainerBox";
import WeblogItemComponent from "../../components/Weblog Item/WeblogItemComponent";
import personalProfile from "../../assets/Images/34862 1.png";
import memberProfile from "../../assets/Images/Frame 106.png";
import Pagination from "@mui/material/Pagination";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export default function BlogPage() {
	const [age, setAge] = useState("");
	const handleChange = (event) => {
		setAge(event.target.value);
	};

	return (
		<ContainerBox className={"gap-10 md:mt-14 mt-6"}>
			<div className="w-full flex flex-row items-center justify-between sm:px-0 px-10">
				<SectionNameComponent isWhite={false} title={"بلاگ"} width="" />
				<div className="flex flex-row items-center">
					<FormControl sx={{ m: 1, minWidth: 80 }}>
						<InputLabel id="demo-simple-select-autowidth-label">
							Age
						</InputLabel>
						<Select
							labelId="demo-simple-select-autowidth-label"
							id="demo-simple-select-autowidth"
							value={age}
							onChange={handleChange}
							autoWidth
							label="Age"
						>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={21}>Twenty one</MenuItem>
							<MenuItem value={22}>
								Twenty one and a half
							</MenuItem>
						</Select>
					</FormControl>
					<FormControl sx={{ m: 1, minWidth: 80 }}>
						<InputLabel id="demo-simple-select-autowidth-label">
							Age
						</InputLabel>
						<Select
							labelId="demo-simple-select-autowidth-label"
							id="demo-simple-select-autowidth"
							value={age}
							onChange={handleChange}
							autoWidth
							label="Age"
						>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={21}>Twenty one</MenuItem>
							<MenuItem value={22}>
								Twenty one and a half
							</MenuItem>
						</Select>
					</FormControl>
				</div>
			</div>
			<div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 sm:px-0 px-10">
				<WeblogItemComponent
					address={"/BlogItem"}
					image={personalProfile}
					shadow={"shadow-[0_2px_8px_0_rgba(99,99,99,0.2)]"}
					title={"چرا نیاز به وبسایت داریم"}
					description={
						"مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"
					}
					profile={memberProfile}
					name={"Mostafa Abedini"}
				/>
				<WeblogItemComponent
					address={"/BlogItem"}
					image={personalProfile}
					shadow={"shadow-[0_2px_8px_0_rgba(99,99,99,0.2)]"}
					title={"چرا نیاز به وبسایت داریم"}
					description={
						"مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"
					}
					profile={memberProfile}
					name={"Mostafa Abedini"}
				/>
				<WeblogItemComponent
					address={"/BlogItem"}
					image={personalProfile}
					shadow={"shadow-[0_2px_8px_0_rgba(99,99,99,0.2)]"}
					title={"چرا نیاز به وبسایت داریم"}
					description={
						"مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"
					}
					profile={memberProfile}
					name={"Mostafa Abedini"}
				/>
				<WeblogItemComponent
					address={"/BlogItem"}
					image={personalProfile}
					shadow={"shadow-[0_2px_8px_0_rgba(99,99,99,0.2)]"}
					title={"چرا نیاز به وبسایت داریم"}
					description={
						"مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"
					}
					profile={memberProfile}
					name={"Mostafa Abedini"}
				/>
				<WeblogItemComponent
					address={"/BlogItem"}
					image={personalProfile}
					shadow={"shadow-[0_2px_8px_0_rgba(99,99,99,0.2)]"}
					title={"چرا نیاز به وبسایت داریم"}
					description={
						"مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"
					}
					profile={memberProfile}
					name={"Mostafa Abedini"}
				/>
				<WeblogItemComponent
					address={"/BlogItem"}
					image={personalProfile}
					shadow={"shadow-[0_2px_8px_0_rgba(99,99,99,0.2)]"}
					title={"چرا نیاز به وبسایت داریم"}
					description={
						"مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"
					}
					profile={memberProfile}
					name={"Mostafa Abedini"}
				/>
			</div>
			<div className="">
				<Pagination
					breakpoints={{
						500: {
							size: "small",
						},
					}}
					count={10}
					defaultPage={1}
					siblingCount={0}
					boundaryCount={2}
					variant="outlined"
					color="primary"
					size="large"
					renderItem={(item) => (
						<PaginationItem
							slots={{
								previous: GrFormNext,
								next: GrFormPrevious,
							}}
							{...item}
						/>
					)}
				/>
			</div>
		</ContainerBox>
	);
}
