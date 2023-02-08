import './Product.css';
function Product({ item, handleAddToCartItems }) {
	return (
		<div className='productContainer'>
			<h3 className='itemTitel'>{item.title}</h3>
			<img className='itemImage' src={item.image} alt={item.title} />
			<span>{item.price} $</span>
			<span>{item.desc}</span>
			<button onClick={handleAddToCartItems}>add to cart</button>
		</div>
	);
}

export default Product;
