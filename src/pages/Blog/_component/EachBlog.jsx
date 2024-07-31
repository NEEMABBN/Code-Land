import React from "react";
import ContainerBox from "../../../components/Container Box/ContainerBox";
import UserProfile from "../../../assets/Images/Frame 106.png";
import anyimage from "../../../assets/Images/artificial-intelligence-to-change-faces3 1.png";
import WeblogItemComponent from "../../../components/Weblog Item/WeblogItemComponent";
import personalProfile from "../../../assets/Images/34862 1.png";
import memberProfile from "../../../assets/Images/Frame 106.png";
import ViewPointComponent from "./ViewPointComponent";
import CommentBlogComponent from "./CommentBlogComponent";
import SideMenuComponent from "./SideMenuComponent";
import EachBlogBodyComponent from "./EachBlogBodyComponent";
import EachBlogHeaderComponent from "./EachBlogHeaderComponent";
import BiographyComponent from "./BiographyComponent";

export default function EachBlog() {
	return (
		<ContainerBox className={"gap-12"}>
			<div className="w-full flex md:flex-row-reverse flex-col-reverse mt-16 gap-7">
				<SideMenuComponent />
				<EachBlogBodyComponent>
					<EachBlogHeaderComponent>
						<BiographyComponent
							name={"Amir Khazaeli"}
							profile={UserProfile}
							time={"۱۰ دقیقه زمان خواندن"}
							date={"۱۴۰۳/۰۴/۰۹"}
						/>
					</EachBlogHeaderComponent>
					<div className="w-full flex flex-col items-center px-10 gap-6 pb-10 bg-white rounded-[32px] shadow-[0_2px_8px_0_rgba(99,99,99,0.2)]">
						<h2 className="w-full text-2xl lg:text-start text-center font-bold py-10">
							بهترین برنامه هوش مصنوعی تغییر چهره
						</h2>
						<img src={anyimage} alt="" className="" />
					</div>
					<ViewPointComponent />
					<div className="w-full flex flex-col items-center gap-5">
						<CommentBlogComponent />
						<CommentBlogComponent />
					</div>
				</EachBlogBodyComponent>
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
			</div>
		</ContainerBox>
	);
}
