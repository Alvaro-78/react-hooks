import React, { useReducer, useEffect } from 'react';
import todoReducer from './todoReducer';

import './styles.css';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

const init = () => {
	return [
		{
			id: new Date().getTime(),
			description: 'Aprender React',
			done: false,
		},
	];
};

const TodoApp = () => {
	const [todos, dispatch] = useReducer(todoReducer, [], init);

	console.log(todos);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const handleDelete = (todoId) => {
		console.log(todoId);
		const deleteTodo = {
			type: 'delete',
			payload: todoId,
		};
		dispatch(deleteTodo);
	};

	const handleAddTodo = (newTodo) => {
		dispatch({
			type: 'add',
			payload: newTodo,
		});
	};

	const handleToggle = (todoId) => {
		dispatch({
			type: 'toggle',
			payload: todoId,
		});
	};

	return (
		<>
			<h1>Todo App ({todos.length}) </h1>
			<hr />

			<div className="row">
				<div className="col-7">
					<TodoList
						todos={todos}
						handleDelete={handleDelete}
						handleToggle={handleToggle}
					/>
				</div>
				<div className="col-5">
					<TodoAdd handleAddTodo={handleAddTodo} />
				</div>
			</div>
		</>
	);
};

export default TodoApp;
