import Membres from './Membres';

function Groupe({ groupe }) {
	return (
		<li>
			<h2>
				Group {groupe.id} - {groupe.nomGroupe}
			</h2>
			<Membres stagaires={groupe.membres} />
		</li>
	);
}

export default Groupe;
