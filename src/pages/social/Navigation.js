import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<div>
			<ul class="space-y-2 tracking-wide mt-8">
				<li>
					<Link
						to="/"
						aria-label="dashboard"
						class="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"
					>
						<svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
							<path
								d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
								class="fill-current text-cyan-400 dark:fill-slate-600"
							></path>
							<path
								d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
								class="fill-current text-cyan-200 group-hover:text-cyan-300"
							></path>
							<path
								d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
								class="fill-current group-hover:text-sky-300"
							></path>
						</svg>

						<span class="-mr-1 font-medium">Timeline</span>
					</Link>
				</li>
				<li>
					<Link
						to="/users"
						aria-label="dashboard"
						class="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"
					>
						<svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
							<path
								d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
								class="fill-current text-cyan-400 dark:fill-slate-600"
							></path>
							<path
								d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
								class="fill-current text-cyan-200 group-hover:text-cyan-300"
							></path>
							<path
								d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
								class="fill-current group-hover:text-sky-300"
							></path>
						</svg>

						<span class="-mr-1 font-medium">Users</span>
					</Link>
				</li>
				<li>
					<Link
						to="/messages"
						aria-label="dashboard"
						class="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"
					>
						<svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
							<path
								d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
								class="fill-current text-cyan-400 dark:fill-slate-600"
							></path>
							<path
								d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
								class="fill-current text-cyan-200 group-hover:text-cyan-300"
							></path>
							<path
								d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
								class="fill-current group-hover:text-sky-300"
							></path>
						</svg>

						<span class="-mr-1 font-medium">Messages</span>
					</Link>
				</li>
				<li>
					<Link
						to="/followers"
						aria-label="dashboard"
						class="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"
					>
						<svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
							<path
								d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
								class="fill-current text-cyan-400 dark:fill-slate-600"
							></path>
							<path
								d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
								class="fill-current text-cyan-200 group-hover:text-cyan-300"
							></path>
							<path
								d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
								class="fill-current group-hover:text-sky-300"
							></path>
						</svg>

						<span class="-mr-1 font-medium">Followers</span>
					</Link>
				</li>
				<li>
					<Link
						to="/following"
						aria-label="dashboard"
						class="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"
					>
						<svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
							<path
								d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
								class="fill-current text-cyan-400 dark:fill-slate-600"
							></path>
							<path
								d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
								class="fill-current text-cyan-200 group-hover:text-cyan-300"
							></path>
							<path
								d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
								class="fill-current group-hover:text-sky-300"
							></path>
						</svg>

						<span class="-mr-1 font-medium">Following</span>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navigation;
