import React, { useLayoutEffect, useRef, useState } from 'react';
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';

import './layout.css';

const MultipleCustomHook = () => {
	const { counter, increment } = useCounter(1);

	const { data } = useFetch(
		`https://www.breakingbadapi.com/api/quotes/${counter}`
	);

	// el operador !! convierte !null = true !!null = false
	const { quote } = !!data && data[0]; // si data es = false devuelve data

	const pTag = useRef();

	const [boxSize, setBoxSize] = useState({});

	useLayoutEffect(() => {
		setBoxSize(pTag.current.getBoundingClientRect());
	}, [quote]);

	return (
		<div>
			<h1>Layout Effect</h1>
			<hr />

			<blockquote className="blockquote text-end">
				<p className="mb-2" ref={pTag}>
					{quote}
				</p>

				<pre>{JSON.stringify(boxSize, null, 3)}</pre>
			</blockquote>

			<button className="btn btn-primary" onClick={() => increment()}>
				Siguiente frase
			</button>
		</div>
	);
};

export default MultipleCustomHook;
