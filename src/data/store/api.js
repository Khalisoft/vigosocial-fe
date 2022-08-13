import useSWR from "swr";
import axios from "axios";

const apiUrl = "https://vigosocial-api.herokuapp.com/api/v1/";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export const signin = async () => {};
export const signup = async () => {};

export const signout = async () => {};
