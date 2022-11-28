import Loader from "components/Loader";
import styles from "./Products.module.scss";
import { Suspense, useEffect, useRef } from "react";
import { Await, Form, Link, useAsyncValue, useLoaderData, useNavigation, useSubmit } from "react-router-dom";

function Products() {

/*	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fakeApi.getProducts()
			.then(setProducts)
			.then(() => setIsLoading(false));
	}, []);*/

	const { products, filter } = useLoaderData();
	const navigation = useNavigation();
	const submit = useSubmit();
	const filterRef = useRef();
	const isSearching = navigation.location &&
		new URLSearchParams(navigation.location.search).has("filter");


	const handleFilter = e => {
		submit(e.currentTarget.form,{
			replace: Boolean(filter)
		});
	};

	useEffect(() => {
		filterRef.current.value = filter;
	}, [filter]);


	return (
		<div>
			<div className={styles.header}>
			<h2>Products</h2>
			<Link to="new-product">New Product</Link>
			</div>
			<Form>
				<input
					name="filter"
					autoComplete="off"
					ref={filterRef}
					placeholder="filter"
					onChange={handleFilter}
					/>
			</Form>
			{
				isSearching && <p>Filtering Products...</p>
			}
			<div className={styles.store}>

				<Suspense fallback={<Loader />}>
					<Await resolve={products}>
						<ProductLoader />
					</Await>
				</Suspense>
			</div>
		</div>
	);
}

function ProductLoader() {

	const products = useAsyncValue();

	return products.map(product =>
		<ProductThumbnail
			name={product.name}
			description={product.description}
			price={product.price}
			slug={product.slug}
			key={product.id}
		/>);
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