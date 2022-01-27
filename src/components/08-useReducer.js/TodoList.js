import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, handleToggle, handleDelete }) => {
	return (
		<>
			<ul>
				{todos.map((todo, index) => {
					return (
						<TodoListItem
							key={todo.id}
							todo={todo}
							index={index}
							handleDelete={handleDelete}
							handleToggle={handleToggle}
						/>
					);
				})}
			</ul>
		</>
	);
};

export default TodoList;
