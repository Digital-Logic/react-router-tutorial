import styles from "App.module.scss";
import Loader from "components/Loader";
import ProductLayout from "components/ProductLayout";
import SharedLayout from "components/SharedLayout";
import { NavLink, Outlet, Route, Routes, useNavigation } from "react-router-dom";
import About from "routes/About";
import Contact from "routes/Contact";
import ErrorRoute from "routes/ErrorRoute";
import Home from "routes/Home";
import Product from "routes/Product";
import Products from "routes/Products";

function App () {

	const navigation = useNavigation();

	return (
		<div className={styles.app}>

			<nav>
				<NavLink to="/">Home</NavLink>
				<NavLink to="products">Products</NavLink>
				<NavLink to="about">About</NavLink>
				<NavLink to="contact">Contact</NavLink>
			</nav>

			{ navigation.state === "loading" && <Loader /> }

			<Outlet />
{/*			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="products" element={<ProductLayout/>}>
					<Route index element={<Products/>}/>
					<Route path=":slug" element={<Product/>}/>
				</Route>
				<Route element={<SharedLayout/>}>
					<Route path="about" element={<About/>}/>
					<Route path="contact" element={<Contact/>}/>
				</Route>
				<Route path="*" element={<ErrorRoute/>}/>
			</Routes>*/}

		</div>
	);
}

export default App;
