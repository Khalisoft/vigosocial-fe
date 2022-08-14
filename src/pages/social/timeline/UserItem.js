import { vigoLogo } from "../../../assets/img";
import { useState } from "react";

const UserItem = ({ user }) => {
	const { firstName, lastName, username } = user;
	const [follow, setFollow] = useState(false);
	return (
		<div>
			<div class="space-y-4 text-center">
				<img
					class="w-64 h-64 mx-auto object-cover rounded-full md:w-40 md:h-40 lg:w-64 lg:h-64"
					src={vigoLogo}
					alt="woman"
					loading="lazy"
					width="640"
					height="805"
				/>
				<div>
					<h4 class="text-2xl">{`${firstName} ${lastName}`}</h4>
					<span class="block text-sm text-gray-500">@{`${username}`}</span>
				</div>
				<div class="flex justify-center space-x-4 text-gray-500">
					<button
						onClick={() => setFollow(!follow)}
						class={
							follow
								? "text-gray-500 border border-1 border-red-200 p-2 rounded hover:bg-red-700 hover:text-white "
								: "text-gray-500 border border-1 border-purple-200 p-2 rounded hover:bg-purple-700 hover:text-white "
						}
					>
						{follow ? "Unfollow" : "Follow"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default UserItem;
