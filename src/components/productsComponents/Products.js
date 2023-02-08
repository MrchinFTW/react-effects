import Product from './Product';

function Products({ items, handleAddToCartItems }) {
	return (
		<div className='ProductsContainer'>
			{items.map((item) => (
				<Product
					item={item}
					handleAddToCartItems={() => {
						handleAddToCartItems(item);
					}}
				/>
			))}
		</div>
	);
}

export default Products;
