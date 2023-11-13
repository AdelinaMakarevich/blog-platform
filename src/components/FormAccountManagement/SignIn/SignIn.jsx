import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { authorizationUsers } from '../../../service/authorizationUsers'
import { setLogInEmail, setLogInPassword, clearAuthorization } from '../../../store/actions/AuthorizationUsersAction'
import classesForm from '../FormStyle.module.scss'

const SignIn = () => {
  const navigate = useNavigate()
  const authorization = useSelector((store) => store.logIn.authorization)
  const dispatch = useDispatch()
  const authorizationError = useSelector((store) => store.logIn.authorizationError)
  const email = useSelector((store) => store.logIn.email)
  const password = useSelector((store) => store.logIn.password)

  useEffect(() => {
    dispatch(clearAuthorization())
    if (authorization) {
      navigate('/')
    }
  }, [])
  useEffect(() => {
    if (authorization) {
      navigate('/')
    }
  }, [authorization])
  const logIn = (e) => {
    e.preventDefault()
    dispatch(authorizationUsers(email, password))
  }
  return (
    <div className={classesForm['wrapper']}>
      <h2 className={classesForm['title']}>Sign In</h2>
      <form className={classesForm['form']}>
        <label className={classesForm['label']}>
          Email address
          <input
            value={email}
            onChange={(e) => dispatch(setLogInEmail(e.target.value.toString().trim()))}
            className={classesForm['input']}
            type="email"
            placeholder="Email address"
            autoFocus
            required
          />
        </label>
        <label className={classesForm['label']}>
          Password
          <input
            value={password}
            onChange={(e) => dispatch(setLogInPassword(e.target.value.trim()))}
            className={classesForm['input']}
            type="password"
            placeholder="Password"
            required
          />
          {authorizationError ? <span className={classesForm['span-error']}>Неверный логин или пароль</span> : null}
        </label>
        <button type="submit" className={classesForm['button']} onClick={logIn}>
          Login
        </button>
      </form>
      <p className={classesForm['reassign']}>
        Don`t have an account?{' '}
        <Link to="/sign-up">
          <span>Sign Up</span>
        </Link>
      </p>
    </div>
  )
}

export { SignIn }
