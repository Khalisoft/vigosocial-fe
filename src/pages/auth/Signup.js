import { Link, useNavigate } from "react-router-dom";
import { vigoLogo } from "../../assets/img";
import { useAuth } from "./../../data/store/store";
import { useState } from "react";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [phone, setPhone] = useState("");

	const navigate = useNavigate();

	const { signup } = useAuth((state) => state);
	const signupFn = async () => {
		const res = await signup({
			email,
			username,
			password,
			firstName,
			lastName,
			phone,
		});
		res && navigate("/sigin");
	};
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
								<div class="p-6 sm:p-16">
									<h2 class="mb-8 text-2xl text-cyan-900 font-bold">
										Sign up now, meet new people.
									</h2>
									<div class="space-y-8">
										<div class="space-y-2">
											<input
												type="firstName"
												name="firstName"
												id="firstName"
												class="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300 focus:ring-2 focus:ring-purple-300 focus:outline-none invalid:ring-2 invalid:ring-red-400"
												placeholder="First Name"
												onChange={(e) => setFirstName(e.target.value)}
											/>
										</div>
										<div class="space-y-2">
											<input
												type="lastName"
												name="lastName"
												id="lastName"
												class="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300 focus:ring-2 focus:ring-purple-300 focus:outline-none invalid:ring-2 invalid:ring-red-400"
												placeholder="Last Name"
												onChange={(e) => setLastName(e.target.value)}
											/>
										</div>
										<div class="space-y-2">
											<input
												type="email"
												name="email"
												id="email"
												class="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300 focus:ring-2 focus:ring-purple-300 focus:outline-none invalid:ring-2 invalid:ring-red-400"
												placeholder="Email"
												onChange={(e) => setEmail(e.target.value)}
											/>
										</div>
										<div class="space-y-2">
											<input
												type="phone"
												name="phone"
												id="phone"
												class="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300 focus:ring-2 focus:ring-purple-300 focus:outline-none invalid:ring-2 invalid:ring-red-400"
												placeholder="Phone Number"
												onChange={(e) => setPhone(e.target.value)}
											/>
										</div>
									</div>
								</div>
								<div class="p-6 sm:p-16">
									<div class="space-y-8 mt-16">
										<div class="space-y-2">
											<input
												type="username"
												name="username"
												id="username"
												class="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300 focus:ring-2 focus:ring-purple-300 focus:outline-none invalid:ring-2 invalid:ring-red-400"
												placeholder="Username"
												onChange={(e) => setUsername(e.target.value)}
											/>
										</div>

										<div>
											<div class="flex items-center justify-end"></div>
											<input
												type="password"
												placeholder="Password"
												name="pwd"
												id="pwd"
												class="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
                                            focus:ring-2 focus:ring-purple-300 focus:outline-none
                                            invalid:ring-2 invalid:ring-red-400"
												onChange={(e) => setPassword(e.target.value)}
											/>
										</div>

										<button
											onClick={() => {
												signupFn();
											}}
											// disabled={true}
											class="w-full py-3 px-6 rounded-md bg-purple-600
                                        focus:bg-purple-700 active:bg-purple-500"
										>
											<span class="text-white">Signup</span>
										</button>

										<p class="border-t pt-6 text-sm">
											Already registerd ?
											<Link to="/signin" class="ml-1 text-purple-500">
												Sign in
											</Link>
										</p>
									</div>
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

export default Signup;
