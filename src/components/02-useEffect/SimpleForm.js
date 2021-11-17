import React, { useState, useEffect } from 'react';
import './effects.css';
import Message from './Message';

const SimpleForm = () => {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
	});

	const { name, email } = formState;

	useEffect(() => {
		console.log('Holi');
	}, []);

	const handleInputChange = ({ target }) => {
		setFormState({
			...formState,
			[target.name]: target.value,
		});
	};
	console.log(formState);

	return (
		<>
			<h1>useEffect</h1>
			<hr />
			<div className="form-group">
				<input
					type="text"
					name="name"
					className="form-control"
					placeholder="Tu Nombre"
					autoComplete="off"
					value={name}
					onChange={handleInputChange}
				/>
			</div>
			<div className="form-group">
				<input
					type="text"
					name="email"
					className="form-control"
					placeholder="email@email.com"
					autoComplete="off"
					value={email}
					onChange={handleInputChange}
				/>
			</div>
			{name === 'pepe' && <Message />}
		</>
	);
};

export default SimpleForm;