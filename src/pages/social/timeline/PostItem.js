import React from "react";
import { vigoLogo } from "../../../assets/img";

const PostItem = () => {
	return (
		<div>
			<div class="gap-6 md:grid-cols-2 ">
				<div class="group space-y-4 ">
					<img
						src={vigoLogo}
						alt="art cover"
						loading="lazy"
						width="auto"
						height="auto"
						class="h-32 w-1/2 flex items-center object-cover object-top rounded-xl transition duration-500 group-hover:rounded-3xl"
					/>
					<div class="space-y-2">
						<div class="space-y-4">
							<h4 class="text-2xl font-semibold text-gray-700">
								Provident id nesciunt illo eveniet commodi fuga fugiat
								laboriosam expedita.
							</h4>
							<p class="text-gray-600">
								Quam hic dolore cumque voluptate rerum beatae et quae, tempore
								sunt dolorum.
							</p>
						</div>
					</div>
					<div className="flex justify-between">
						<a href="#" class="block w-max text-cyan-600">
							Like {2}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostItem;
