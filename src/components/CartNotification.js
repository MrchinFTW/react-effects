export default function CartNotification({ items }) {
	const newCart = [...items];
	let sumItems = 0;

	newCart.forEach((cartItem) => (sumItems += cartItem.quantity));

	return <div className='cartNotification'>{sumItems}</div>;
}
