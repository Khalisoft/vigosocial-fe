import React from "react";

const Profilecard = ({ logo }) => {
	return (
		<div>
			<div class="mt-8 text-center">
				<img
					src={logo}
					alt=""
					class="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
				/>
				<h5 class="hidden mt-4 text-xl font-semibold text-gray-600 lg:block"></h5>
				<span class="hidden text-gray-400 lg:block">Admin</span>
			</div>
		</div>
	);
};

export default Profilecard;
