import styles from "./NewProduct.module.scss";
import { faker } from "@faker-js/faker";
import { Form, useNavigation } from "react-router-dom";

function NewProduct () {

	const navigation = useNavigation();

	return (
		<div>
			<h2>New Product</h2>
			{
				navigation.state === "submitting" && <p>Saving New Product...</p>
			}
			<Form method="post" className={styles.form}>
				<label>Name:
					<input name="name"
					       defaultValue={faker.commerce.productName()}
					/>
				</label>
				<label>Price:
					<input name="price"
					       defaultValue={faker.commerce.price()}
					/>
				</label>
				<label>Quantity:
					<input name="quantity"
					       defaultValue={Math.floor(Math.random())}
					/>
				</label>
				<label>Description:
					<textarea
						name="description"
						defaultValue={faker.commerce.productDescription()}
					/>
				</label>
				<button
					disabled={navigation.state === "submitting"}
					type="submit">Submit</button>
			</Form>
		</div>
	);
}

export default NewProduct;