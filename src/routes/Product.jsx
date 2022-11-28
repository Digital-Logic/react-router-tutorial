import Loader from "components/Loader";
import { Await, useAsyncValue, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import styles from "./Product.module.scss";

function Product() {

	const { product } = useLoaderData();

	return (
		<div className={styles.product}>
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