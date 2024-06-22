import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function FetchApiByIdRoute() {
	const { id } = useParams();

	const [data, setData] = useState(null);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos/' + id)
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);

	return (
		<>
			{data && (
				<div>
					<h1>{data.title}</h1>
					<h2>{data.id}</h2>
				</div>
			)}
		</>
	);
}

export default FetchApiByIdRoute;
