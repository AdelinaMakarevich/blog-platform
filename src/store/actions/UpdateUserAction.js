import {
  AUTHORIZATION__USER,
  UPDATE_USER_NAME,
  UPDATE_USER_EMAIL,
  UPDATE_USER_PASSWORD,
  UPDATE_USER_AVATAR_IMAGE,
} from '../reducers/UpdateUserReducer'

const authorizationUser = (token, username, email) => {
  return {
    type: AUTHORIZATION__USER,
    token,
    username,
    email,
  }
}

const updateUsername = (username) => {
  return {
    type: UPDATE_USER_NAME,
    username,
  }
}

const updateEmail = (email) => {
  return {
    type: UPDATE_USER_EMAIL,
    email,
  }
}

const updatePassword = (newPassword) => {
  return {
    type: UPDATE_USER_PASSWORD,
    newPassword,
  }
}

const updateAvatarImage = (imageUrl) => {
  return {
    type: UPDATE_USER_AVATAR_IMAGE,
    imageUrl,
  }
}

export { updateAvatarImage, updatePassword, updateEmail, updateUsername, authorizationUser }
