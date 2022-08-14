import React from "react";
import { useAuth } from "./../../data/store/store";

const Profilecard = ({ logo }) => {
	const { authData, userProfile } = useAuth((state) => state);
	return (
		<div>
			<div class="mt-8 text-center">
				<img
					src={logo}
					alt=""
					class="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
				/>
				<h5 class="hidden mt-4 text-xl font-semibold text-gray-600 lg:block"></h5>
				<span class="hidden text-gray-400 lg:block">{`${authData?.username.toUpperCase()}`}</span>

				<span class="hidden text-gray-400 lg:block">
					{`${
						userProfile?.followers?.length
							? userProfile?.followers?.length
							: "0"
					} `}
					-
					{` ${
						userProfile?.following?.length
							? userProfile?.following?.length
							: "0"
					}`}
				</span>
				<span class="hidden mx-2 text-gray-400 lg:block">
					{`Followers `}-{` Following`}
				</span>
			</div>
		</div>
	);
};

export default Profilecard;
