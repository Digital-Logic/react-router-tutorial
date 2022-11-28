import ProductLayout from "components/ProductLayout";
import SharedLayout from "components/SharedLayout";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import About from "routes/About";
import Contact from "routes/Contact";
import Home from "routes/Home";
import Product from "routes/Product";
import Products from "routes/Products";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import fakeApi from "fakeApi";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter(createRoutesFromElements(
	<Route path="/" element={<App />}>
		<Route index element={<Home />} />
		<Route path="products" element={<ProductLayout />}>
			<Route index element={<Products />}/>
			<Route path=":slug" element={<Product />} />
		</Route>
		<Route element={<SharedLayout />}>
			<Route path="contact" element={<Contact />}/>
			<Route path="about" element={<About />} />
		</Route>
	</Route>
));

/*const router = createBrowserRouter([{
	path: "/",
	element: <App />,
	children: [
		{
			index: true,
			element: <Home />
		},{
			path: "products",
			element: <ProductLayout />,
			children: [
				{
					index: true,
					element: <Products />
				},{
					path: ":slug",
					element: <Product />
				}
			]
		},{
			element: <SharedLayout />,
			children: [{
				path: "contact",
				element: <Contact />
			},{
				path: "about",
				element: <About />
			}]
		}
	]
}]);*/

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
		{/*<BrowserRouter>
			<App />
		</BrowserRouter>*/}
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
