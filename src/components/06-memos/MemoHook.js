import React, { useState, useMemo } from 'react';

import useCounter from '../../hooks/useCounter';
import { greatProcess } from '../../helpers/GreatProcess';

import '../02-useEffect/effects.css';

const MemorizeHook = () => {
	const { counter, increment } = useCounter(1000);

	const [show, setShow] = useState(true);

	// useMemo evita que un proceso se vuelva a renderizar
	const memoGreatProcess = useMemo(() => greatProcess(counter), [counter]);

	return (
		<>
			<div>
				<h1>MemoHook</h1>
				<h1>Counter: {counter}</h1>
				<hr />

				<p>{memoGreatProcess}</p>
				<button className="btn btn-primary" onClick={increment}>
					+1
				</button>
				<button
					className="btn btn-outline-primary ms-3"
					onClick={() => {
						setShow(!show);
					}}>
					Show/Hide {JSON.stringify(show)}
				</button>
			</div>
		</>
	);
};

export default MemorizeHook;
