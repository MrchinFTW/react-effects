import Category from './Category';

import useFetch from '../../costumHooks/useFatch';

const SelectCategory = ({ setUrl, productUrl }) => {
	const categories = useFetch('https://fakestoreapi.com/products/categories');

	return (
		<div>
			<select
				onChange={(e) => {
					console.log(`${productUrl}/${e.target.value}`);
					setUrl(`${productUrl}/${e.target.value}`);
				}}
			>
				{categories ? categories.map((category) => <Category category={category} />) : null}
			</select>
		</div>
	);
};

export default SelectCategory;
