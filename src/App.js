import styles from "App.module.scss";
import Loader from "components/Loader";
import { NavLink, Outlet, useNavigation } from "react-router-dom";


function App () {

	const navigation = useNavigation();
	const isLoading = navigation.state === "loading" &&
		!(navigation.location && navigation.location.search);

	return (
		<div className={styles.app}>

			<nav>
				<NavLink to="/">Home</NavLink>
				<NavLink to="products">Products</NavLink>
				<NavLink to="about">About</NavLink>
				<NavLink to="contact">Contact</NavLink>
			</nav>

			{ isLoading && <Loader /> }

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
