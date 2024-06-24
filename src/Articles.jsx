import { useSelector, useDispatch } from 'react-redux';
import { deleteArticle } from './store/action';
import { Link } from 'react-router-dom';

function Articles() {
	const dispatch = useDispatch();
	const { articles } = useSelector((state) => state);

	console.log(articles);

	return (
		<>
			<div>
				{articles.map((article) => (
					<div key={article.id}>
						<h1>
							{article.title}: {article.id}
						</h1>
						<p>{article.content}</p>
						<button onClick={() => dispatch(deleteArticle(article.id))}>DELETE</button>
						<Link to={'/updateArticle/' + article.id}>Update Article</Link>
					</div>
				))}
			</div>
		</>
	);
}

export default Articles;
