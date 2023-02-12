import CartItem from './CartItem';

function CartProducts({ items, handleRemoveCartItem, handleAddCartItem }) {
	const amountToPay = (items) => {
		let amountToReturn = 0;
		items.forEach((item) => {
			amountToReturn += +item.price * +item.quantity;
		});
		return Math.round(amountToReturn * 100) / 100;
	};
	const checkout = amountToPay(items);
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
			<div>
				<div>{`${checkout} $`}</div>
				<div></div>
			</div>
		</div>
	);
}

export default CartProducts;
