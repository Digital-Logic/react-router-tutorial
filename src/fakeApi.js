import { faker } from "@faker-js/faker";
import localforage from "localforage";


localforage.config({
	name: "catalog"
});

const KEY = "products";


const fakeApi = {
	getProducts: () => delay((resolve, reject) => {
		localforage.getItem(KEY)
			.then(resolve);
	}),
	getProduct: slug => delay(async (resolve, reject) => {
		const products = await localforage.getItem(KEY);
		const product = products.find(p => p.slug === slug);
		if (product)
			resolve(product)
		else reject({
			message: `No product with id: ${slug} found.`
		});
	}),
};

function delay(func, time=3000) {
	return new Promise((resolve, reject) => {
		setTimeout(() => func(resolve, reject), Math.random() * time);
	});
}



// *************** Store ****************** //

genStore();

async function genStore() {
	const products = await localforage.getItem(KEY);

	if (!products)
		await localforage.setItem(KEY, genProducts(6));
}

function genProducts(size) {
	return new Array(size)
		.fill(null)
		.map(genProduct);
}

function genProduct() {

	const name = faker.commerce.productName();

	return {
		name,
		slug: genSlug(name),
		description: faker.commerce.productDescription(),
		price: faker.commerce.price(),
		quantity: Math.floor(Math.random()),
		id: faker.datatype.uuid()
	};
}

function genSlug(name) {
	return faker.helpers.slugify(name + " " + genHash(6));
}

function genHash(length) {
	return Math.random().toString(36).substring(2, 2 + length);
}

export default fakeApi;