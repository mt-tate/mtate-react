import React, { ReactNode } from 'react';
import '../App.css';
import { useForm } from 'react-hook-form';
import { validationSchema } from '../utils/validationSchema';
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from "react-router-dom"

interface LoginFormIf {
  email: string;
  password: string;
}

export const LoginForm = () => {

  const navigate = useNavigate();

  const {register, handleSubmit, formState: {errors}} = useForm<LoginFormIf>({ mode: "onChange", resolver: zodResolver(validationSchema)});

  const onsubmit = (data: LoginFormIf) => {
    console.log(data);

    // ログイン認証
    
    // home画面へ遷移
    navigate("/Home", {state:{id:9999}});
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

export default LoginForm;
