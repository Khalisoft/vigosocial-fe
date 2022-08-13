import { Link } from "react-router-dom";

const PostNew = () => {
	return (
		<div>
			{/* <div class="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
				<div class="m-auto space-y-8 md:w-8/12 lg:w-full"> */}
			<div>
				<div class="lg:grid lg:grid-cols-2">
					{/* <div class="rounded-lg lg:block" hidden>
                                    
                                </div> */}
					<div class=" sm:p-16">
						{/* <h2 class="mb-8 text-2xl text-cyan-900 font-bold">Sign up today</h2> */}
						<div class="space-y-8">
							<div class="space-y-2">
								<label
									for="formFile"
									class="form-label inline-block mb-2 text-gray-700"
								>
									Post Title
								</label>
								<input
									type="email"
									name="email"
									id="email"
									class="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300 focus:ring-2 focus:ring-purple-300 focus:outline-none invalid:ring-2 invalid:ring-red-400"
									placeholder="Email"
								/>
							</div>

							<div class="space-y-2">
								<label
									for="formFile"
									class="form-label inline-block mb-2 text-gray-700"
								>
									Post Body
								</label>
								<textarea
									class="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300 focus:ring-2 focus:ring-purple-300 focus:outline-none invalid:ring-2 invalid:ring-red-400"
									placeholder="Email"
								></textarea>
							</div>
							<div class="space-y-2">
								<div class="flex justify-center">
									<div class="mb-3 w-96">
										<label
											for="formFile"
											class="form-label inline-block mb-2 text-gray-700"
										>
											Post Image
										</label>
										<input
											class="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
											type="file"
											id="formFile"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="p-2 sm:p-16">
						<div class=" mt-8">
							<button
								onClick={() => {
									alert("signin");
								}}
								// disabled={true}
								class="w-full py-3 px-6 rounded-md bg-purple-600
                                        focus:bg-purple-700 active:bg-purple-500"
							>
								<span class="text-white">Post</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		// 	</div>
		// </div>
	);
};

export default PostNew;
