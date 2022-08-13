import create from "zustand";
const authStore = (set, get) => ({
	auth: false,
	getAuth: async (params) => await handleGetAuth(set, get, params),
	getUserProfile: async (params) =>
		await handleGetUserProfile(set, get, params),
	signin: async (params) => await handleSignin(set, get, params),
	signup: async (params) => await handleSignup(set, get, params),
	signout: async (params) => await handleSignout(set, get, params),
});

const usersStore = (set, get) => ({
	users: [],
	followers: [],
	following: [],

	getUsers: async (params) => await handleGetUsers(set, get, params),
	follow: async (params) => await handleFollow(set, get, params),
	unFollow: async (params) => await handleUnFollow(set, get, params),
	getFollowers: async (params) => await handleGetFollowers(set, get, params),
	getFollowing: async (params) => await handleGetFollowing(set, get, params),
});

const messageStore = (set, get) => ({
	messages: [],
	getMessages: async (params) => await handleGetMessages(set, get, params),
	sendMessage: async (params) => await handleSendMessage(set, get, params),
});

const postStore = (set, get) => ({
	posts: [],
	getPosts: async (params) => await handleGetPosts(set, get, params),
	newPost: async (params) => await handleNewPost(set, get, params),
});

export const useAuth = create(authStore);
export const usePosts = create(postStore);
export const useUsers = create(usersStore);
export const useMessages = create(messageStore);
