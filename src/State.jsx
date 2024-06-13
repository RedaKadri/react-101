import { useState } from 'react';

function State() {
	const [data, setData] = useState({
		name: null,
		age: 0,
		gender: null,
		address: null,
		formation: [],
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleCheckboxChange = (e) => {
		const { checked, value } = e.target;
		setData((prevData) => ({
			...prevData,
			formation: checked ? [...prevData.formation, value] : prevData.formation.filter((item) => item !== value),
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type='text' name='name' value={data.name} onChange={handleChange} />
				<input type='number' name='age' value={data.age} onChange={handleChange} />
				<div>
					<input type='radio' name='gender' value='Homme' onChange={handleChange} />
					<label>Homme</label>
					<input type='radio' name='gender' value='Femme' onChange={handleChange} />
					<label>Femme</label>
				</div>
				<select name='address' onChange={handleChange}>
					<option value='Paris'>Paris</option>
					<option value='Lyon'>Lyon</option>
					<option value='Marseille'>Marseille</option>
					<option value='Nantes'>Nantes</option>
				</select>
				<div>
					<input type='checkbox' name='formation' value='DUT' onChange={handleCheckboxChange} />
					<label>DUT</label>
					<input type='checkbox' name='formation' value='Licence' onChange={handleCheckboxChange} />
					<label>Licence</label>
					<input type='checkbox' name='formation' value='Master' onChange={handleCheckboxChange} />
					<label>Master</label>
				</div>

				<button type='submit'>Submit</button>
			</form>
		</div>
	);
}

export default State;
