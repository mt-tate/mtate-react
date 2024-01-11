import React, { ReactNode } from 'react';
import './App.css';
import { useForm } from 'react-hook-form';
import { validationSchema } from './utils/validationSchema';
import {zodResolver} from '@hookform/resolvers/zod'

interface LoginForm {
  email: string;
  password: string;
}

function App() {

  const {register, handleSubmit, formState: {errors}} = useForm<LoginForm>({ mode: "onChange", resolver: zodResolver(validationSchema)});

  const onsubmit = (data: LoginForm) => {
    console.log(data);
  }

  return (
    <div className='form-container'>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit(onsubmit)}>
        <label htmlFor='email'>email</label>
        <input id='email' type='email' {...register('email')}></input>
        <p>{errors.email?.message as React.ReactNode}</p>
        <label htmlFor='password'>password</label>
        <input id='password' type='password' {...register('password')}></input>
        <p>{errors.password?.message as React.ReactNode}</p>

        <button type='submit'>ログイン</button>
      </form>
      </div>
  );
}

export default App;
