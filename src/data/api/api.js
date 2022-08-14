import useSWR from "swr";
import axios from "axios";

const apiUrl = "https://saferide.devlosopher.com.ng/api/v1/";
const getUser = JSON.parse(localStorage.getItem("vigosocial_user"));

const API = axios.create({
	baseURL: apiUrl,
	headers: {
		"Access-Control-Allow-Origin": "*",
		"Content-Type": "application/json",
		Authorization: `Bearer ${getUser?.token}`,
	},
});

export const fetcher = (url) => API.get(url).then((res) => res.data);

export const signin = async (data) => API.post("/authentication/signin", data);
export const signup = async (data) => API.post("/authentication/signup", data);
export const signout = async (data) =>
	API.post("/authentication/signout", data);

//

export const getUserProfile = async () => {
	const { data } = await API.get(`/users/${getUser?.id}`);
	return {
		data,
	};
};

export const getAllUsers = async () => {
	const { data } = await API.get(`/users/all`);
	return {
		data,
	};
};
export const getUserDetails = async (id) => {
	const { data } = await API.get(`/users/${id}`);
	// console.log(data);
	return {
		data,
	};
};
export const getFollowers = async () => {
	const { data } = await API.get(`/followers`);
	return {
		data,
	};
};
export const getFollowing = async () => {
	const { data } = await API.get(`/following`);
	return {
		data,
	};
};

export const follow = async (data) => API.patch(`/users/${data}/follow`);
export const unfollow = async (data) => API.patch(`/users/${data}/unfollow`);
// const useFetchPosts

// export const useGetUser = (id) => {
// 	const { data, error, mutate } = useSWR(`/admin/user/${id}`, fetcher);

// 	return {
// 	  user: data,
// 	  isLoadingUser: !error && !data,
// 	  isErrorUser: error,
// 	  revalidateUser: mutate,
// 	};
//   };
