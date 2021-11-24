import React, { useEffect, useState } from 'react';

// Nos sirve para ejecutar cosas al ser llamado este componente de forma condicionales
// y al desmontar el componente también podemos retornar cosas

// Ejemplo del ciclo de vida de un componente con el useEffect

const Message = () => {
	const [coors, setCoors] = useState({ x: 0, y: 0 });
	const { x, y } = coors;

	useEffect(() => {
		const mouseMove = (e) => {
			const coors = { x: e.x, y: e.y };
			setCoors(coors);
			console.log(coors);
		};
		window.addEventListener('mousemove', mouseMove);
		return () => {
			window.removeEventListener('mousemove', mouseMove);
		};
	}, []);

	return (
		<div>
			<h3>PEPEEEE</h3>
			<p>
				x:{x} y:{y}
			</p>
		</div>
	);
};

export default Message;
