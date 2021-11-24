import React from 'react';
import Message from './Message';
import useForm from '../../hooks/useForm';

import './effects.css';

const FormWithCustomHook = () => {
	const [formValue, handleInputChange] = useForm({
		name: '',
		email: '',
		password: '',
	});

	const { name, email, password } = formValue;

	console.log(formValue);

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<h1>Form With Custom Hook</h1>
			<hr />
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label className="form-label">Name</label>
					<input
						type="name"
						name="name"
						className="form-control"
						id="exampleInpuName"
						aria-describedby="emailHelp"
						placeholder="name"
						autoComplete="off"
						value={name}
						onChange={handleInputChange}
					/>
					<div id="emailHelp" className="form-text">
						We'll never share your email with anyone else.
					</div>
				</div>
				<div className="mb-3">
					<label className="form-label">Email address</label>
					<input
						type="email"
						name="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="email@email.com"
						autoComplete="off"
						value={email}
						onChange={handleInputChange}
					/>
					<div id="emailHelp" className="form-text">
						We'll never share your email with anyone else.
					</div>
				</div>
				<div className="mb-3">
					<label className="form-label">Password</label>
					<input
						type="password"
						name="password"
						className="form-control"
						id="exampleInputPassword1"
						placeholder="********"
						autoComplete="off"
						value={password}
						onChange={handleInputChange}
					/>
				</div>
				<div className="mb-3 form-check">
					<input
						type="checkbox"
						className="form-check-input"
						id="exampleCheck1"
					/>
					<label className="form-check-label">Check me out</label>
				</div>
				<button
					type="submit"
					className="btn btn-primary"
					onClick={() => console.log('datos enviados', { formValue })}
				>
					Submit
				</button>
			</form>
			{name === 'pepe' && <Message />}
		</>
	);
};

export default FormWithCustomHook;
