import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { fetchUpdateUser } from '../../../service/updateUser'
import { updateUsername, updateEmail, updatePassword, updateAvatarImage } from '../../../store/actions/UpdateUserAction'
import {
  selectAuthorization,
  selectNewPassword,
  selectEmailError,
  selectUsernameError,
  selectUserObject,
} from '../../../store/selectors'
import classesForm from '../FormStyle.module.scss'

const Profile = () => {
  const navigate = useNavigate()
  const authorization = useSelector(selectAuthorization)

  useEffect(() => {
    if (!authorization) {
      navigate('/')
    }
  }, [])

  const dispatch = useDispatch()

  const newPassword = useSelector(selectNewPassword)
  const userObject = useSelector(selectUserObject)

  const emailError = useSelector(selectEmailError)
  const usernameError = useSelector(selectUsernameError)

  const validForm = !emailError && !usernameError

  const updateUser = (e) => {
    e.preventDefault()
    if (validForm) {
      localStorage.user = JSON.stringify({
        userObject,
      })
      dispatch(fetchUpdateUser(userObject.token, userObject.username, userObject.email, userObject.image))
      navigate('/')
    } else {
      console.log(e)
    }
  }

  return (
    <div className={classesForm['wrapper']}>
      <h2 className={classesForm['title']}>Sign In</h2>
      <form className={classesForm['form']}>
        <label className={classesForm['label']}>
          username
          <input
            value={userObject.username}
            onChange={(e) => dispatch(updateUsername(e.target.value))}
            className={`${classesForm['input']} ${usernameError ? classesForm['input-error'] : null}`}
            type="text"
            placeholder="username"
            autoFocus
          />
          {usernameError ? (
            <span className={classesForm['span-error']}>Имя должно содержать от 3 до 20 символов</span>
          ) : null}
        </label>
        <label className={classesForm['label']}>
          Email address
          <input
            value={userObject.email}
            onChange={(e) => dispatch(updateEmail(e.target.value))}
            className={`${classesForm['input']} ${emailError ? classesForm['input-error'] : null}`}
            type="email"
            placeholder="Email address"
            autoFocus
          />
          {emailError ? <span className={classesForm['span-error']}>Не корректный email</span> : null}
        </label>
        <label className={classesForm['label']}>
          New Password
          <input
            value={newPassword}
            onChange={(e) => dispatch(updatePassword(e.target.value))}
            className={classesForm['input']}
            type="password"
            placeholder="Password"
          />
        </label>
        <label className={classesForm['label']}>
          Avatar image(url)
          <input
            value={userObject.image}
            onChange={(e) => dispatch(updateAvatarImage(e.target.value))}
            className={classesForm['input']}
            type="url"
            placeholder="Avatar image"
          />
        </label>
        <button type="submit" className={classesForm['button']} onClick={updateUser}>
          Save
        </button>
      </form>
    </div>
  )
}

export { Profile }
