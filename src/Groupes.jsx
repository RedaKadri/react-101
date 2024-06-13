import Groupe from './Groupe';

function Groupes({ groupes }) {
	return (
		<ul>
			{groupes.map((groupe) => (
				<Groupe key={groupe.id} groupe={groupe} />
			))}
		</ul>
	);
}

export default Groupes;
