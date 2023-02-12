import { useEffect, useState } from 'react';

const useFetch = (urlRecived, urlOption) => {
	const [data, setData] = useState(null);
	useEffect(() => {
		fetch(urlRecived)
			.then((res) => res.json())
			.then((data) => setData(data));
	}, [urlRecived]);
	return data;
};

export default useFetch;
