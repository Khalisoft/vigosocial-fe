import { vigoLogo } from "../../../assets/img";
import UserItem from "./UserItem";
import { useUsers, useAuth } from "./../../../data/store/store";

const Users = () => {
	const { users } = useUsers((state) => state);
	const { authData } = useAuth((state) => state);

	const filteredUsers = users.filter((user) => {
		return user.id !== authData.id;
	});

	return (
		<div>
			<div class="py-8 h-full">
				<div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6 h-full">
					<div
						class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 h-72"
						style={{ overflowY: "scroll", height: "calc(100vh - 200px)" }}
					>
						{filteredUsers.map((user) => (
							<UserItem user={user} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Users;
