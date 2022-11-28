import { useLoaderData, useParams } from "react-router-dom";

function Product() {

	const product = useLoaderData();

	return (
		<div>
			<h2>{product.name}</h2>
			<p>Price: {product.price}</p>
			<p>Quantity: {product.quantity}</p>
			<p><span>Description: </span>{product.description}</p>
		</div>
	);
}

export default Product;