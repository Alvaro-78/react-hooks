import React from 'react';

const TodoListItem = ({ todo, handleToggle, handleDelete, index }) => {
	return (
		<>
			<li className="list-group-item">
				<p
					className={`pointer ${todo.done && 'complete'}`}
					onClick={() => handleToggle(todo.id)}>
					{index + 1}. {todo.description}
				</p>
				<button
					className="btn btn-danger"
					onClick={() => handleDelete(todo.id)}>
					Borrar
				</button>
			</li>
		</>
	);
};

export default TodoListItem;
