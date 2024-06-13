import Stagiare from './Stagiare';

function Membres({ stagaires }) {
	const nbrStagaires = stagaires.length;
	const total = stagaires.reduce((total, stagaire) => total + stagaire.moyenneBac, 0);
	const Moyenne = total / nbrStagaires;

	return (
		<div>
			<h1>Liste des Membres:</h1>
			<table border={1}>
				<tr>
					<th>Nom</th>
					<th>Prenom</th>
					<th>Moyenne Bac</th>
				</tr>

				{stagaires.map((stagaire) => (
					<Stagiare key={stagaire.id} stagiare={stagaire} />
				))}
			</table>
			<p>
				Nombre d'inscription : {nbrStagaires}, Moyenne bac : {Moyenne}
			</p>
		</div>
	);
}

export default Membres;
