import { Route, Routes, Navigate } from "react-router-dom";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import Layout from "./pages/social/Layout";
import Messages from "./pages/social/message/Messages";
import MessageView from "./pages/social/message/MessageView";
import Followers from "./pages/social/profile/Followers";
import Following from "./pages/social/profile/Following";
import Profile from "./pages/social/profile/Profile";
import PostNew from "./pages/social/timeline/PostNew";
import Post from "./pages/social/timeline/PostNew";
import Timeline from "./pages/social/timeline/Timeline";
import Users from "./pages/social/timeline/Users";
import { useAuth, useUsers } from "./data/store/store";
import { useEffect } from "react";
import { fetcher, GetUsers } from "./data/api/api";
import useSWR from "swr";
const AppRoutes = () => {
	const { auth, getAuth, getUserProfile } = useAuth((state) => state);
	const { users, getUsers } = useUsers((state) => state);

	useEffect(() => {
		getAuth();
		getUserProfile();
		getUsers();
	}, []);

	const PrivateRoute = ({ auth, children }) => {
		return auth ? (
			<Layout> {children}</Layout>
		) : (
			<Navigate to={{ pathname: "/" }} replace />
		);
	};
	const PublicRoute = ({ auth, children }) => {
		return !auth ? children : <Navigate to={{ pathname: "/social" }} replace />;
	};
	const NoRoute = () => {
		return <Navigate to={{ pathname: "/" }} replace />;
	};

	return (
		<>
			<Routes>
				<Route
					path="/"
					element={
						<PublicRoute auth={auth}>
							<Signin />
						</PublicRoute>
					}
				/>
				<Route
					path="/signin"
					element={
						<PublicRoute auth={auth}>
							<Signin />
						</PublicRoute>
					}
				/>
				<Route
					path="/signup"
					element={
						<PublicRoute auth={auth}>
							<Signup />
						</PublicRoute>
					}
				/>
				<Route
					path="/social"
					element={
						<PrivateRoute auth={auth}>
							<Timeline />
						</PrivateRoute>
					}
				/>
				<Route
					path="/users"
					element={
						<PrivateRoute auth={auth}>
							<Users />
						</PrivateRoute>
					}
				/>
				<Route
					path="/timeline"
					element={
						<PrivateRoute auth={auth}>
							<Timeline />
						</PrivateRoute>
					}
				/>
				<Route
					path="/post/:postId"
					element={
						<PrivateRoute auth={auth}>
							<Post />
						</PrivateRoute>
					}
				/>
				<Route
					path="/post/new"
					element={
						<PrivateRoute auth={auth}>
							<PostNew />
						</PrivateRoute>
					}
				/>
				<Route
					path="/profile"
					element={
						<PrivateRoute auth={auth}>
							<Profile />
						</PrivateRoute>
					}
				/>
				<Route
					path="/followers"
					element={
						<PrivateRoute auth={auth}>
							<Followers />
						</PrivateRoute>
					}
				/>
				<Route
					path="/following"
					element={
						<PrivateRoute auth={auth}>
							<Following />
						</PrivateRoute>
					}
				/>
				<Route
					path="/messages"
					element={
						<PrivateRoute auth={auth}>
							<Messages />
						</PrivateRoute>
					}
				/>
				<Route
					path="/message-view/:messageId"
					element={
						<PrivateRoute auth={auth}>
							<MessageView />
						</PrivateRoute>
					}
				/>
				<Route path="*" element={<NoRoute />} />
			</Routes>
		</>
	);
};

export default AppRoutes;
