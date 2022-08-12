import { vigoLogo } from "../../../assets/img";

const FollowerItem = () => {
	const follow = true;
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
					<h4 class="text-2xl">Hentoni Doe</h4>
					<span class="block text-sm text-gray-500">CEO-Founder</span>
				</div>
				<div class="flex justify-center space-x-4 text-gray-500">
					<a href="#" class="text-gray-500">
						{follow ? "Unfollow" : "Follow"}
					</a>
				</div>
			</div>
		</div>
	);
};

export default FollowerItem;
