import MessageRowItem from "./MessageRowItem";

const Messages = () => {
	const messages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	return (
		<div>
			<div class="py-8 h-full">
				<div class="container  m-auto px-6 text-gray-600 md:px-12 xl:px-6 h-full">
					<div
						class="w-full h-72"
						style={{
							overflowY: "scroll",
							width: "100%",
							height: "calc(100vh - 200px)",
						}}
					>
						<table class="w-full divide-y divide-gray-100 table-fixed dark:divide-gray-700">
							<tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"></tbody>
							{messages.map((message) => (
								<MessageRowItem message={message} />
							))}
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Messages;
