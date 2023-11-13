import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'

import {
  setUsername,
  setEmail,
  setPassword,
  setRotatePassword,
  setApproval,
  clearForm,
} from '../../../store/actions/RegisterAction'
import { registerUsers } from '../../../service/registerUsers'
import classesForm from '../FormStyle.module.scss'

import classes from './SignUp.module.scss'

const SignUp = () => {
  const navigate = useNavigate()
  const authorization = useSelector((store) => store.logIn.authorization)

  const dispatch = useDispatch()
  const username = useSelector((store) => store.register.username)
  const email = useSelector((store) => store.register.email)
  const password = useSelector((store) => store.register.password)
  const rotatePassword = useSelector((store) => store.register.rotatePassword)
  const approval = useSelector((store) => store.register.approval)

  const isAlreadyUsername = useSelector((store) => store.register.isAlreadyUsername)
  const isAlreadyEmail = useSelector((store) => store.register.isAlreadyEmail)

  const errorUsername = useSelector((store) => store.register.errorUsername)
  const errorEmail = useSelector((store) => store.register.errorEmail)
  const errorPassword = useSelector((store) => store.register.errorPassword)
  const errorRotatePassword = useSelector((store) => store.register.errorRotatePassword)

  useEffect(() => {
    dispatch(clearForm())
    if (authorization) {
      navigate('/')
    }
  }, [])
  const validForm =
    username && email && password && rotatePassword === password && !errorUsername && !errorEmail && !errorPassword
      ? true
      : false

  const signUp = (e) => {
    e.preventDefault()
    if (approval && validForm) {
      dispatch(registerUsers(username, email, password))
      navigate('/sign-in')
    } else {
      console.log('Error')
    }
  }

  return (
    <div className={classesForm['wrapper']}>
      <h2 className={classesForm['title']}>Create new account</h2>
      <form className={classesForm['form']}>
        <label className={classesForm['label']}>
          Username
          <input
            onChange={(e) => dispatch(setUsername(e.target.value.trim()))}
            value={username}
            className={`${classesForm['input']} ${errorUsername ? classesForm['input-error'] : null}`}
            type="text"
            placeholder="Username"
            autoFocus
            required
          />
          {isAlreadyUsername ? <span className={classesForm['span-error']}>Имя уже занято</span> : null}
          {errorUsername ? (
            <span className={classesForm['span-error']}>Имя должно содержать от 3 до 20 символов</span>
          ) : null}
        </label>

        <label className={classesForm['label']}>
          Email address
          <input
            onChange={(e) => dispatch(setEmail(e.target.value.trim()))}
            value={email}
            className={`${classesForm['input']} ${errorEmail ? classesForm['input-error'] : null}`}
            type="email"
            placeholder="Email address"
            required
          />
          {isAlreadyEmail ? <span className={classesForm['span-error']}>Email уже занят</span> : null}
          {errorEmail ? <span className={classesForm['span-error']}>Не корректный email</span> : null}
        </label>

        <label className={classesForm['label']}>
          Password
          <input
            onChange={(e) => dispatch(setPassword(e.target.value.trim()))}
            value={password}
            className={`${classesForm['input']} ${
              errorPassword || errorRotatePassword ? classesForm['input-error'] : null
            }`}
            type="password"
            placeholder="Password"
            required
          />
          {errorPassword ? (
            <span className={classesForm['span-error']}>
              Пороль должен быть длиной от 6 до 40 символов содержать хотябы одну цифру и спец-символ .!@#$%^&*
            </span>
          ) : null}
        </label>

        <label className={classesForm['label']}>
          Repeat Password
          <input
            onChange={(e) => dispatch(setRotatePassword(e.target.value.trim()))}
            value={rotatePassword}
            className={`${classesForm['input']} ${errorRotatePassword ? classesForm['input-error'] : null}`}
            type="password"
            placeholder="Password"
            required
          />
          {errorRotatePassword ? (
            <span className={classesForm['span-error']}>Поле должно совподать с полем Password</span>
          ) : null}
        </label>

        <hr className={`${validForm ? classes['hr'] : classes['hr-error']} `} />

        <label className={classes['label_checkbox']}>
          I agree to the processing of my personal information
          <input
            type="checkbox"
            checked={approval}
            className={classes['input']}
            onChange={() => dispatch(setApproval())}
            required
          />
        </label>

        <button
          type="submit"
          className={`${approval ? classesForm['button'] : classesForm['button-error']}`}
          onClick={signUp}
        >
          Create
        </button>
      </form>
      <p className={classesForm['reassign']}>
        Alert have an account?{' '}
        <Link to="/sign-in">
          <span>Sign In</span>
        </Link>
      </p>
    </div>
  )
}

export { SignUp }
