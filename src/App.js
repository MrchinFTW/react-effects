import { useEffect, useState } from 'react';
import './App.css';
import Products from './components/productsComponents/Products.js';
import CartProducts from './components/cart/CartProducts.js';
import CartNotification from './components/CartNotification';
import { Link, Route, Routes } from 'react-router-dom';
import useFetch from './costumHooks/useFatch';

function App() {
	// const [products, setProducts] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const products = useFetch('https://fakestoreapi.com/products');

	// useEffect(() => {
	// 	fetch('https://fakestoreapi.com/products')
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			// console.log(data);
	// 			setProducts(data);
	// 		});
	// }, []);

	const handleAddToCartItems = (product) => {
		const newProduct = { ...product };
		const productExist = cartItems.find((pd) => pd.id === product.id);
		if (!productExist) {
			newProduct.quantity = 1;
			const newCartItems = [...cartItems, newProduct];
			setCartItems(newCartItems);
		} else {
			const newCartItems = [...cartItems];
			const productToAdd = newCartItems.find((cardItem) => {
				return cardItem.id === product.id;
			});
			productToAdd.quantity++;
			setCartItems(newCartItems);
		}
	};

	function handleRemoveCartItem(product) {
		const productToRemove = cartItems.find((item) => item.title === product.title);
		const productToRemoveIndex = cartItems.findIndex((item) => item.title === product.title);
		const newCart = [...cartItems];
		productToRemove.quantity--;
		if (productToRemove.quantity === 0) {
			newCart.splice(productToRemoveIndex, 1);
			setCartItems(newCart);
		} else {
			setCartItems([...cartItems]);
		}
	}

	function handleAddCartItem(product) {
		const productToAdd = cartItems.find((item) => item.title === product.title);
		const newCart = [...cartItems];
		productToAdd.quantity++;
		setCartItems([...newCart]);
	}

	return (
		<>
			<nav>
				<ul>
					<li>
						<a href=''></a>
						<Link to={'/'}>Products</Link>
					</li>
					<li>
						<Link to={'/Cart'}>Cart</Link>
						<CartNotification items={cartItems} />
					</li>
				</ul>
			</nav>
			<div className='App'>
				<Routes>
					<Route
						path='/'
						element={
							!products ? (
								<h1>loading...</h1>
							) : (
								<Products items={products} handleAddToCartItems={handleAddToCartItems} />
							)
						}
					/>
					<Route
						path='/Cart'
						element={
							<CartProducts
								items={cartItems}
								handleRemoveCartItem={handleRemoveCartItem}
								handleAddCartItem={handleAddCartItem}
							/>
						}
					/>
				</Routes>
			</div>
		</>
	);
}

export default App;
