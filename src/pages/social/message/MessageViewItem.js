import React from "react";

const MessageViewItem = () => {
	const sender = false;
	return (
		<div
			class={
				sender
					? "bg-green-50 w-full border-l-8 border-green-900 mb-2"
					: "bg-purple-50 w-full border-l-8 border-purple-900 mb-2"
			}
		>
			<div class="flex items-center">
				<div class="p-2">
					<div class="flex items-start">
						<p
							class={
								sender
									? "px-2 py-4 text-green-900 font-semibold text-sm"
									: "px-2 py-4 text-purple-900 font-semibold text-sm"
							}
						>
							Musa Abba
						</p>
					</div>
					<div class="px-8 mb-4 ">
						<p
							class={
								sender
									? "text-md font-semibold text-green-500 text-sm"
									: "text-md font-semibold text-purple-500 text-sm"
							}
						>
							Name field is required. Name field is required. Name field is
							required. Name field is required. Name field is required. Name
							field is required. Name field is required. Name field is required.
							Name field is required. Name field is required.
						</p>
						<p class="text-sm text-black-500">{"23 / 4 / 2022"}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MessageViewItem;
