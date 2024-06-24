import { Link } from 'react-router-dom';

function Header() {
	return (
		<div style={{ display: 'flex', gap: '10px' }}>
			<Link to={'/form'}>Form</Link>
			<Link to={'/toDos'}>ToDos</Link>
			<Link to={'/articles'}>Articles</Link>
		</div>
	);
}

export default Header;
