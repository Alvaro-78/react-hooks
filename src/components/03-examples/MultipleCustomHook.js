import React from 'react';
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';

import '../02-useEffect/effects.css';

const MultipleCustomHook = () => {
	const { counter, increment } = useCounter(1);

	const { loading, data } = useFetch(
		`https://www.breakingbadapi.com/api/quotes/${counter}`
	);

	// el operador !! convierte !null = true !!null = false
	const { author, quote } = !!data && data[0]; // si data es = false devuelve data

	return (
		<div>
			<h1>BreakingBad Quotes</h1>
			<hr />

			{loading ? (
				<div className="alert alert-info text-center">Loading...</div>
			) : (
				<blockquote className="blockquote text-end">
					<p className="mb-2">{quote}</p>
					<footer className="blockquote-footer">{author}</footer>
					<button className="btn btn-primary" onClick={() => increment()}>
						Siguiente frase
					</button>
				</blockquote>
			)}
		</div>
	);
};

export default MultipleCustomHook;
