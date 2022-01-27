import React from 'react';
import useForm from '../../hooks/useForm';

const TodoAdd = ({ handleAddTodo }) => {
	const [{ description }, handleInputChange, reset] = useForm({
		description: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		if (description.length === 0) {
			return;
		}

		const newTodo = {
			id: new Date().getTime(),
			description: description,
			done: false,
		};

		handleAddTodo(newTodo);
		reset();
	};

	return (
		<>
			<h1>Add TODO</h1>
			<hr />
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="description"
					className="form-control"
					placeholder="Aprender...."
					autoComplete="off"
					onChange={handleInputChange}
					value={description}
				/>
				<button
					type="submit"
					className="btn btn-outline-primary mt-1 btn-block">
					Add
				</button>
			</form>
		</>
	);
};

export default TodoAdd;
