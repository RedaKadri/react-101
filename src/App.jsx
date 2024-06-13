import Groupes from './Groupes';
import groupes from './data';

function App() {
	return (
		<div>
			<h1>Liste des GRoupes</h1>

			<Groupes groupes={groupes} />
		</div>
	);
}

export default App;
