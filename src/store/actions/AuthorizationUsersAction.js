import {
  LOG_IN_EMAIL,
  LOG_IN_PASSWORD,
  AUTHORIZATION,
  AUTHORIZATION_ERROR,
  LOG_OUT,
} from '../reducers/AuthorizationUsersReducer'

const setLogInEmail = (value) => {
  return {
    type: LOG_IN_EMAIL,
    value,
  }
}

const setLogInPassword = (value) => {
  return {
    type: LOG_IN_PASSWORD,
    value,
  }
}

const authorization = () => {
  return {
    type: AUTHORIZATION,
  }
}

const authorizationError = () => {
  return {
    type: AUTHORIZATION_ERROR,
  }
}

const logOut = () => {
  localStorage.clear()
  return {
    type: LOG_OUT,
  }
}

export { setLogInEmail, setLogInPassword, authorization, authorizationError, logOut }
