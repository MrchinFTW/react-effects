import CartItem from './CartItem';

function CartProducts({ items, handleRemoveCartItem, handleAddCartItem }) {
	return (
		<div>
			{items.map((item) => (
				<CartItem
					item={item}
					handleAddCartItem={() => {
						handleAddCartItem(item);
					}}
					handleRemoveCartItem={() => {
						handleRemoveCartItem(item);
					}}
				/>
			))}
			<span></span>
		</div>
	);
}

export default CartProducts;
