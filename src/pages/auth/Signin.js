import { vigoLogo } from "../../assets/img";
import { Link } from "react-router-dom";

const Signin = () => {
	return (
		<div>
			<div
				class="relative py-16
                before:absolute before:inset-0 before:w-full before:h-[50%] before:bg-gray-200"
			>
				<div class="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
					<div class="m-auto space-y-8 md:w-8/12 lg:w-full">
						<div class="rounded-xl border  bg-opacity-50 backdrop-blur-2xl bg-white shadow-xl">
							<div class="lg:grid lg:grid-cols-2">
								{/* <div class="rounded-lg lg:block" hidden>
                                    
                                </div> */}
								<div class="p-6 sm:p-16"></div>
								<div class="p-6 sm:p-16">
									<h2 class="mb-8 text-2xl text-cyan-900 font-bold">
										Sign in to continue
									</h2>
									<form action="" class="space-y-8">
										<div class="space-y-2">
											<input
												type="email"
												name="email"
												id="email"
												class="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300 focus:ring-2 focus:ring-purple-300 focus:outline-none invalid:ring-2 invalid:ring-red-400"
												placeholder="Email"
											/>
										</div>

										<div>
											<input
												type="password"
												placeholder="Password"
												name="pwd"
												id="pwd"
												class="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
                                            focus:ring-2 focus:ring-purple-300 focus:outline-none
                                            invalid:ring-2 invalid:ring-red-400"
											/>
											<div class="flex items-center justify-end">
												<button class="p-2 -mr-2" type="reset">
													<span class="text-sm text-purple-500">
														Forgot your password ?
													</span>
												</button>
											</div>
										</div>

										<button
											onClick={() => {
												alert("signin");
											}}
											// disabled={true}
											class="w-full py-3 px-6 rounded-md bg-purple-600
                                        focus:bg-purple-700 active:bg-purple-500"
										>
											<span class="text-white">Signin</span>
										</button>

										<p class="border-t pt-6 text-sm">
											Already registerd ?
											<Link to="/signup" class="ml-1 text-purple-500">
												Sign Up
											</Link>
										</p>
									</form>
								</div>
							</div>
						</div>
						<div class="text-center space-x-4">
							<span>&copy; VigoSocial</span>
							<a href="#" class="text-sm hover:text-purple-900">
								Contact
							</a>
							<a href="#" class="text-sm hover:text-purple-900">
								Privacy & Terms
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signin;
