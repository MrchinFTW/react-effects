import './CartItem.css';
function CartItem({ item, handleRemoveCartItem, handleAddCartItem }) {
	return (
		<div className='cartItem'>
			<span className='cartItemTitle'>{item.title}</span>
			<div>
				<button onClick={handleRemoveCartItem}>-</button>
				<span>{item.quantity}</span>
				<button onClick={handleAddCartItem}>+</button>
			</div>
		</div>
	);
}

export default CartItem;
