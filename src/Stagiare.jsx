function Stagiare({ stagiare }) {
	return (
		<tr>
			<td>{stagiare.nom}</td>
			<td>{stagiare.prenom}</td>
			<td>{stagiare.moyenneBac}</td>
		</tr>
	);
}

export default Stagiare;
