import { faker } from "@faker-js/faker";
import localforage from "localforage";


localforage.config({
	name: "catalog"
});

const KEY = "products";


const fakeApi = {
	getProducts: (filter) => delay((resolve, reject) => {
		localforage.getItem(KEY)
			.then(products => products.filter(p => p.name.toLowerCase().includes(filter)))
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
	createProduct: product => delay(async (resolve, reject) => {
		product.id = faker.datatype.uuid();
		product.slug = genSlug(product.name);

		const products = await localforage.getItem(KEY);
		products.push(product);
		await localforage.setItem(KEY, products);
		resolve(product);
	}),
};

function delay(func, time= 1000) {
	return new Promise((resolve, reject) => {
		setTimeout(() => func(resolve, reject), Math.random() * time);
	});
}



// *************** Store ****************** //

genStore();

async function genStore() {
	const products = await localforage.getItem(KEY);

	if (!products)
		await localforage.setItem(KEY, genProducts(100));
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
		quantity: Math.floor(Math.random() * 100),
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