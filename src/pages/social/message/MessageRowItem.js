import React from "react";
import { Link } from "react-router-dom";

const MessageRowItem = () => {
	return (
		<tr class="border-b">
			<Link to={`/message-view/${1}`}>
				<td
					width={200}
					class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap"
				>
					Person
				</td>
				<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
					Excerpt
				</td>
			</Link>
		</tr>
	);
};

export default MessageRowItem;
