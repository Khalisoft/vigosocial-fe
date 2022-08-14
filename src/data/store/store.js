import create from "zustand";
import {
	getAllUsers,
	follow,
	unfollow,
	getUserProfile,
	signin,
	signup,
	getFollowing,
	getFollowers,
	getUserDetails,
} from "../api/api";
import { GetUsers } from "./../api/api";

const handleGetAuth = async (set, get, params) => {
	const user = JSON.parse(localStorage.getItem("vigosocial_user"));
	user && set(() => ({ auth: true, authData: user }));
	return user ? user : null;
};
const handleSignin = async (set, get, params) => {
	const { data } = await signin(params);
	data && localStorage.setItem("vigosocial_user", JSON.stringify(data));
	data && set(() => ({ auth: true, authData: data }));
	return data ? data : null;
};
const handleSignup = async (set, get, params) => {
	const { data } = await signup(params);
	return data ? data : null;
};
const handleSignout = async (set, get, params) => {
	localStorage.removeItem("vigosocial_user");
	set(() => ({ auth: false, authData: {} }));
	return null;
};
const handleGetUserProfile = async (set, get, params) => {
	const { data } = await getUserProfile();
	// data && localStorage.setItem("vigosocial_user_profile", JSON.stringify(data));
	set(() => ({ userProfile: data }));
	return data;
};

const authStore = (set, get) => ({
	auth: false,
	authData: {},
	userProfile: {},
	getAuth: async (params) => await handleGetAuth(set, get, params),
	getUserProfile: async (params) =>
		await handleGetUserProfile(set, get, params),
	signin: async (params) => await handleSignin(set, get, params),
	signup: async (params) => await handleSignup(set, get, params),
	signout: async (params) => await handleSignout(set, get, params),
});

const handleGetUsers = async (set, get) => {
	const { data } = await getAllUsers();
	set(() => ({ users: data }));
	return data;
};
const handleGetFollowers = async (set, get) => {
	const { data } = await getFollowers();
	set(() => ({ followers: data.followers }));
	return data;
};
const handleGetFollowing = async (set, get) => {
	const { data } = await getFollowing();
	set(() => ({ following: data.following }));
	return data;
};
const handleGetUser = async (set, get, params) => {
	// console.log(params);
	const { data } = await getUserDetails(params);
	return data;
};

const handleFollow = async (set, get, params) => {
	const res = (await follow(params)) ? true : false;
	await handleGetFollowers(set, get);
	if (res) return await handleGetUsers(set, get);
};
const handleUnFollow = async (set, get, params) => {
	const res = (await unfollow(params)) ? true : false;
	await handleGetFollowing(set, get);
	if (res) return await handleGetUsers(set, get);
};

const usersStore = (set, get) => ({
	users: [],
	followers: [],
	following: [],

	getUser: async (params) => await handleGetUser(set, get, params),
	getUsers: async () => await handleGetUsers(set, get),
	follow: async (params) => await handleFollow(set, get, params),
	unfollow: async (params) => await handleUnFollow(set, get, params),
	getFollowers: async (params) => await handleGetFollowers(set, get, params),
	getFollowing: async (params) => await handleGetFollowing(set, get, params),
});

const messageStore = (set, get) => ({
	messages: [],
	// getMessages: async (params) => await handleGetMessages(set, get, params),
	// sendMessage: async (params) => await handleSendMessage(set, get, params),
});

const postStore = (set, get) => ({
	posts: [],
	// getPosts: async (params) => await handleGetPosts(set, get, params),
	// newPost: async (params) => await handleNewPost(set, get, params),
});

export const useAuth = create(authStore);
export const usePosts = create(postStore);
export const useUsers = create(usersStore);
export const useMessages = create(messageStore);
