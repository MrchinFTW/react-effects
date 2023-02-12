import './Product.css';
function Product({ item, handleAddToCartItems }) {
	return (
		<div className='productContainer'>
			<h3 className='itemTitel'>{item.title}</h3>
			<img className='itemImage' src={item.image} alt={item.title} />
			<div>
				<span>{item.price} $</span>
				<button onClick={handleAddToCartItems}>add to cart</button>
			</div>
		</div>
	);
}

export default Product;
