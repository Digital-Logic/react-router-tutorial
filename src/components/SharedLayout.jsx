import { Outlet } from "react-router-dom";

function SharedLayout() {
	return (
		<div>
			<h2>Shared Layout</h2>
			<Outlet />
		</div>
	);
}

export default SharedLayout;