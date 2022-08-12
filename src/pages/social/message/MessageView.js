import MessageViewItem from "./MessageViewItem";
const MessageView = () => {
	const userMessages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	return (
		<div>
			<div
				style={{
					width: "100%",
				}}
				class="py-8 h-full"
			>
				<div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6 h-full">
					<div
						class="w-full h-72"
						style={{
							overflowY: "scroll",
							width: "100%",
							height: "calc(100vh - 200px)",
						}}
					>
						{userMessages.map((userMessage) => (
							<MessageViewItem userMessage={userMessage} />
						))}
					</div>
					<div>
						<div class="relative text-lg bg-transparent text-gray-800">
							<div class="flex items-center border-b border-b-2 border-purple-500 py-2">
								<input
									class="bg-transparent border-none mr-3 px-2 leading-tight focus:outline-none"
									type="text"
									placeholder="Type a message"
								/>
								<button class="absolute m-2 right-0 top-0 mt-3 mr-4">
									Send
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MessageView;
