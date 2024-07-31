import HomePage from "./pages/Home/HomePage";
import WebDesignPage from "./pages/WebDesign/WebDesignPage";
import AppDesignPage from "./pages/AppDesign/AppDesignPage";
import SeoPage from "./pages/SEO/SeoPage";
import SupportPage from "./pages/Support/SupportPage";
import AboutUsPage from "./pages/AboutUs/AboutUsPage";
import BlogPage from "./pages/Blog/BlogPage";
import EachBlog from "./pages/Blog/_component/EachBlog";

const router = [
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/WebDesign",
		element: <WebDesignPage />,
	},
	{
		path: "/AppDesign",
		element: <AppDesignPage />,
	},
	{
		path: "/SEO",
		element: <SeoPage />,
	},
	{
		path: "/Support",
		element: <SupportPage />,
	},
	{
		path: "/AboutUs",
		element: <AboutUsPage />,
	},
	{
		path: "/Blog",
		element: <BlogPage />,
	},
	{
		path: "/BlogItem",
		element: <EachBlog />,
	},
];

export default router;
