import { useEffect, useState } from 'react';
function fullUrl(urlRecived, urlOption){
		if(urlOption){
			return (`${urlRecived}/${urlOption}`)
		}
		return (`${urlRecived}`)
}
const useFetch = (urlRecived, urlOption) => {
	const [url,setUrl] = useState(null)
	setUrl(fullUrl(urlRecived, urlOption))


	const [answer, setAnswer] = useState(null);
	useEffect(() => {
		fetch(`${url}`)
			.then((res) => res.json())
			.then((data) => setAnswer(data))
			.catch((error) => console.warn(`an error has accurd: ${error}`));
	}, [url]);
	return answer;
};

export default useFetch;
