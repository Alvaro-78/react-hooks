import React, { useRef } from 'react';

import '../02-useEffect/effects.css';

const FocusScreen = () => {
	const inputRef = useRef();

	const handleClick = () => {
		inputRef.current.select();
		console.log(inputRef);
	};

	return (
		<div>
			<h1>Focus Screen</h1>
			<hr />

			<input
				ref={inputRef}
				className="form-control mb-2"
				placeholder="Su Nombre"
			></input>
			<button className="btn btn-outline-primary" onClick={handleClick}>
				Focus
			</button>
		</div>
	);
};

export default FocusScreen;
