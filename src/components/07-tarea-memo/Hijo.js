import React, { memo } from 'react';

export const Hijo = memo(({ numero, increment }) => {
	console.log('  Me volví a generar :(  ');

	return (
		<button className="btn btn-primary ms-3" onClick={() => increment(numero)}>
			{numero}
		</button>
	);
});
