import Loader from "components/Loader";
import styles from "./Products.module.scss";
import fakeApi from "fakeApi";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

function Products() {

/*	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fakeApi.getProducts()
			.then(setProducts)
			.then(() => setIsLoading(false));
	}, []);*/

	const products = useLoaderData();

	return (
		<div>
			<h2>Products</h2>
			<div className={styles.store}>
				{
					products.map(product =>
						<ProductThumbnail
							name={product.name}
							description={product.description}
							price={product.price}
							slug={product.slug}
							key={product.id}
						/>)
				}
			</div>
		</div>
	);
}


function ProductThumbnail({ name, description, price, slug}) {
	return (
		<Link to={slug}
			className={styles.product}>
			<h2>{name}</h2>
			<p>Price: {price}</p>
			<p className={styles.description}><span>Description:</span> {description}</p>
		</Link>
	);
}

export default Products;