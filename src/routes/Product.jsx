import { useParams } from "react-router-dom";

function Product() {

	const params = useParams();

	return (
		<div>
			<h2>Product</h2>
			<p>Product type: {params.slug}</p>
		</div>
	);
}

export default Product;