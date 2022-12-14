import PostItem from "./PostItem";

const Timeline = () => {
	const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	return (
		<div>
			<div class="py-8 h-full">
				<div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6 h-full">
					<div
						class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 h-72"
						style={{ overflowY: "scroll", height: "calc(100vh - 200px)" }}
					>
						{posts.map((post) => (
							<PostItem post={post} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Timeline;
