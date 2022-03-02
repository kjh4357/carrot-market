import { useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';

interface LoginForm {
	username: string,
	email: string,
	password: string,
}

export default function Forms() {
	const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
		mode: "onBlur"
	});
	const onValid = (data: LoginForm) => {
		console.log('valid', data)
	}
	console.log(errors)
	const onInvalid = (errors: FieldErrors) => {
		console.log('invalid', errors)
	}
	return (
		<form onSubmit={handleSubmit(onValid, onInvalid)}>
			<input {...register("username", { required: "Username is required", minLength: { message: "the username should be longer 5", value: 5 } })} type="text" placeholder="Username" />
			{errors.username?.message}
			<input
				{...register("email", {
					required: "email is required",
					validate: {
						notGmail: (value) => !value.includes("@gmail.com") ? "" : "Gmail is not allowed"
					}
				})}
				type="email"
				placeholder="email"
				required
			/>
			{errors.email?.message}
			<input {...register("password", { required: "password is required" })} type="password" placeholder="password" required />
			{errors.password?.message}
			<input type="submit" value="Create Account" />
		</form>
	);
}
