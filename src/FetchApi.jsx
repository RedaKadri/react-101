import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function FetchApi() {
	const navigate = useNavigate();
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);

	console.log(data);

	return (
		<>
			{data &&
				data.map((todo) => (
					<div key={todo.id}>
						<h1>{todo.title}</h1>
						<p>{todo.userId}</p>
						<Link to={'/toDos/' + todo.id}>Go to Details by link</Link>
						<button onClick={() => navigate('/toDos/' + todo.id)}>Go to Details by Button</button>
					</div>
				))}
		</>
	);
}

export default FetchApi;
