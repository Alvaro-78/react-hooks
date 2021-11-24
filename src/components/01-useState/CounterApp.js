import React, { useState } from 'react';

import './counter.css';

// Creamos un estado del contador e incrementamos solo un contador, para no perder el estado del resto
// de contadores, usamos el destructuring de state

const CounterApp = () => {
	const [state, setState] = useState({
		counter1: 10,
		counter2: 20,
		counter3: 30,
		counter4: 40,
	});

	const { counter1, counter2, counter3, counter4 } = state;

	return (
		<>
			<h1>Counter1: {counter1}</h1>
			<h1>Counter2: {counter2}</h1>
			<h1>Counter3: {counter3}</h1>
			<h1>Counter4: {counter4}</h1>
			<hr />
			<div className="d-flex flex-column">
				<div className="pb-2">
					<button
						className="btn btn-primary"
						onClick={() => {
							setState({
								...state,
								counter1: counter1 + 1,
							});
						}}
					>
						increment counter1 +1
					</button>
				</div>
				<div className="pb-2">
					<button
						className="btn btn-primary"
						onClick={() => {
							setState({
								...state,
								counter2: counter2 + 1,
							});
						}}
					>
						increment counter2 +1
					</button>
				</div>
				<div className="pb-2">
					<button
						className="btn btn-primary"
						onClick={() => {
							setState({
								...state,
								counter3: counter3 + 1,
							});
						}}
					>
						increment counter3 +1
					</button>
				</div>
				<div className="pb-2">
					<button
						className="btn btn-primary"
						onClick={() => {
							setState({
								...state,
								counter4: counter4 + 1,
							});
						}}
					>
						increment counter4 +1
					</button>
				</div>
			</div>
		</>
	);
};

export default CounterApp;
