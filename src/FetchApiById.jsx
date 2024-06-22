import { useEffect, useState } from 'react';

function FetchApiById() {
	const [todoId, setTodoId] = useState(null);
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos/' + todoId)
			.then((res) => res.json())
			.then((data) => setData(data));
	}, [todoId]);

	console.log(data);
	return (
		<>
			<input type='text' value={todoId} onChange={(e) => setTodoId(e.target.value)} />
			{data && (
				<div>
					<h1>{data.title}</h1>
					<p>{data.userId}</p>
				</div>
			)}
		</>
	);
}

export default FetchApiById;
