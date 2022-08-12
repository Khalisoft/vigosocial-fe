import create from "zustand";
const authStore = (set, get) => ({
	auth: false,
	getAuth: async (params) => await handleGetAuth(set, get, params),
	getUserProfile: async (params) =>
		await handleGetUserProfile(set, get, params),
	getSignin: async (params) => await handleSignin(set, get, params),
	getSignup: async (params) => await handleSignup(set, get, params),
	getSignout: async (params) => await handleSignout(set, get, params),
});

const usersStore = (set, get) => ({
	users: [],
	followers: [],
	following: [],

	getUsers: async (params) => await handleGetUsers(set, get, params),
	getFollow: async (params) => await handleGetFollow(set, get, params),
	getUnFollow: async (params) => await handleGetUnFollow(set, get, params),
	getFollowers: async (params) => await handleGetFollowers(set, get, params),
	getFollowing: async (params) => await handleGetFollowing(set, get, params),
});

const messageStore = (set, get) => ({
	messages: [],
	getMessages: async (params) => await handleGetMessages(set, get, params),
	getSendMessage: async (params) =>
		await handleGetSendMessage(set, get, params),
});

export const useAuth = create(authStore);
export const useUsers = create(usersStore);
export const useMessages = create(messageStore);
