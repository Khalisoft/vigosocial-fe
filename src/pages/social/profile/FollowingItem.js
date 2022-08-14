import { vigoLogo } from "../../../assets/img";
import { useEffect, useState } from "react";
import { useAuth, useUsers } from "./../../../data/store/store";
const FollowingItem = ({ following }) => {
	const { authData } = useAuth((state) => state);
	const { follow, unfollow } = useUsers((state) => state);
	const id = authData?.id;
	const { firstName, lastName, username, followers } = following;
	const [_follow, setFollow] = useState(
		following.following.includes(id) ? true : false
	);

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
					<span class="block text-sm text-gray-300">Following</span>
					<span class="block text-sm text-gray-500">@{`${username}`}</span>
				</div>
				<div class="flex justify-center space-x-4 text-gray-500">
					<button
						onClick={async () => {
							await unfollow(following.id);
							setFollow(!_follow);
						}}
						class={
							"text-gray-500 border border-1 border-red-200 p-2 rounded hover:bg-red-700 hover:text-white "
						}
					>
						Unfollow
					</button>
				</div>
			</div>
		</div>
	);
};

export default FollowingItem;
