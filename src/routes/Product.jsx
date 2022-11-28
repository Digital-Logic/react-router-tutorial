import Loader from "components/Loader";
import { Await, useAsyncValue, useLoaderData, useParams } from "react-router-dom";
import { Suspense } from "react";

function Product() {

	const { product } = useLoaderData();

	return (
		<div>
			<Suspense fallback={<Loader />}>
				<Await resolve={product}>
					<ProductLoader />
				</Await>
			</Suspense>
		</div>
	);
}

function ProductLoader() {
	const product = useAsyncValue();

	return (
		<>
			<h2>{product.name}</h2>
			<p>Price: {product.price}</p>
			<p>Quantity: {product.quantity}</p>
			<p><span>Description: </span>{product.description}</p>
		</>
	);
}

export default Product;