import { createSelector } from '@reduxjs/toolkit'

const selectAuthorization = (store) => store.logIn.authorization
const selectNewPassword = (store) => store.updateUser.newPassword

const selectUsername = (store) => store.updateUser.username
const selectEmail = (store) => store.updateUser.email
const selectToken = (store) => store.updateUser.token
const selectAvatarImage = (store) => store.updateUser.avatarImage

const selectEmailError = (store) => store.updateUser.emailError
const selectUsernameError = (store) => store.updateUser.usernameError

const selectUserObject = createSelector(
  [selectUsername, selectEmail, selectToken, selectAvatarImage],
  (username, email, token, img) => {
    return {
      username: username,
      email: email,
      token: token,
      image: img,
    }
  }
)

export { selectAuthorization, selectNewPassword, selectEmailError, selectUsernameError, selectUserObject }
