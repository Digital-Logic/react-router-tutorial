import { Outlet } from "react-router-dom";

function ProductLayout() {
	return (
		<div>
			<h2>Product Layout</h2>
			<Outlet />
		</div>
	);
}

export default ProductLayout;