import { Link } from "react-router-dom";
import { vigoLogo } from "../../assets/img";
import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import Logout from "./Logout";
import Topnav from "./Topnav";
import Profilecard from "./Profilecard";

const Layout = ({ children }) => {
	return (
		<div>
			<aside class="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
				<div>
					<Profilecard logo={vigoLogo} />

					<Navigation />
				</div>

				<div class="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
					<Logout />
				</div>
			</aside>
			<div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
				<Topnav />
				<div class="px-6 pt-6 2xl:container">
					<div class="flex justify-center items-center h-[80vh]  rounded-xl">
						<span>{children}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Layout;
