import { useRouteError } from "react-router-dom";

function ErrorRoute() {

	const error = useRouteError();

	return (
		<div>
			<h2>This is not the path you are looking for....</h2>
			<p>{error.statusText || error.message}</p>
		</div>
	);
}

export default ErrorRoute;