import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateArticle } from './store/action';

function Article() {
	const dispatch = useDispatch();
	const { id } = useParams();
	const navigate = useNavigate();

	const { articles } = useSelector((state) => state);

	const [article, setArticle] = useState(articles.find((article) => article.id === Number(id)));

	const handleChange = (e) => {
		const { name, value } = e.target;
		setArticle((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					dispatch(updateArticle(article));
					navigate('/articles');
				}}
			>
				<input type='text' name='title' onChange={handleChange} value={article.title} />
				<input type='text' name='content' onChange={handleChange} value={article.content} />
				<button type='submit'>Send</button>
			</form>
		</div>
	);
}

export default Article;
