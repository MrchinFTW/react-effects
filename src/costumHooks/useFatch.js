import { useEffect, useState } from 'react';

const useFetch = (url, urlOption) => {
	const [answer, setAnswer] = useState(null);
	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((data) => setAnswer(data))
			.catch((error) => console.warn(`an error has accurd: ${error}`));
	}, []);
	return answer;
};

export default useFetch;
