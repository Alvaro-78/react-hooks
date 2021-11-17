import React, { useEffect } from 'react';

// Nos sirve para ejecutar cosas al ser llamado este componente de forma condicionales
// y al desmontar el componente también podemos retornar cosas

const Message = () => {
	useEffect(() => {
		console.log('componente montado');
		return () => {
			console.log('componente desmontado');
		};
	}, []);

	return (
		<div>
			<h3>PEPEEEE</h3>
		</div>
	);
};

export default Message;
