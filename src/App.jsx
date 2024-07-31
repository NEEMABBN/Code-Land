import { Route, Routes } from "react-router-dom";
import HeaderLayout from "./layouts/HeaderLayout";
import FooterLayout from "./layouts/FooterLayout";
import MenuBarLayout from "./layouts/MenuBarLayout";
import router from "./router";

function App() {
	return (
		<div className="md:pb-0 pb-14">
			<HeaderLayout />
			<Routes>
				{router.map((item, index) => (
					<Route
						element={item.element}
						path={item.path}
						key={index}
					/>
				))}
			</Routes>
			<FooterLayout />
			<MenuBarLayout />
		</div>
	);
}

export default App;
