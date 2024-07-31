import React from "react";
import UserProfile from "../../../assets/Images/Frame 106.png";

export default function CommentBlogComponent() {
	return (
		<div className="w-full flex flex-col items-center px-10 py-8 gap-6 rounded-[32px] bg-white shadow-[0_2px_8px_0_rgba(99,99,99,0.2)]">
			<div className="w-full flex flex-row items-center justify-between">
				<div className="flex flex-row items-center gap-3">
					<img
						src={UserProfile}
						alt="User Profile"
						className="w-[25px] h-[25px] rounded-full overflow-hidden"
					/>
					<span className="text-base font-semibold">
						امیر خزائلی(سلطان طراحی ولوجا)
					</span>
				</div>
				<span className="text-[#737373] text-sm">۱۴۰۳/۰۴/۰۹</span>
			</div>
			<p className="w-full text-[#737373] text-sm leading-7">
				لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
				استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
				در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
				نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
				کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
				جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
				برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
				زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
				دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
				زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
				پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
			</p>
		</div>
	);
}
