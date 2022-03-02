import { useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';

interface LoginForm {
	username: string,
	email: string,
	password: string,
}

export default function Forms() {
	const { register, handleSubmit } = useForm<LoginForm>();
	const onValid = (data: LoginForm) => {
		console.log('valid', data)
	}
	const onInvalid = (errors: FieldErrors) => {
		console.log('invalid', errors)
	}
	return (
		<form onSubmit={handleSubmit(onValid, onInvalid)}>
			<input {...register("username", { required: "Username is required", minLength: { message: "the username should be longer 5", value: 5 } })} type="text" placeholder="Username" />
			<input {...register("email", { required: "email is required" })} type="email" placeholder="email" required />
			<input {...register("password", { required: "password is required" })} type="password" placeholder="password" required />
			<input type="submit" value="Create Account" />
		</form>
	);
}
