import {
  USERNAME,
  IS_ALREADY_USERNAME,
  EMAIL,
  IS_ALREADY_EMAIL,
  PASSWORD,
  ROTATE_PASSWORD,
  APPROVAL,
  CLEAR_FORM,
} from '../reducers/RegisterReducer'

const setUsername = (value) => {
  return {
    type: USERNAME,
    value,
  }
}

const setEmail = (value) => {
  return {
    type: EMAIL,
    value,
  }
}

const setPassword = (value) => {
  return {
    type: PASSWORD,
    value,
  }
}

const setRotatePassword = (value) => {
  return {
    type: ROTATE_PASSWORD,
    value,
  }
}

const setApproval = () => {
  return {
    type: APPROVAL,
  }
}

const clearForm = () => {
  return {
    type: CLEAR_FORM,
  }
}

const setAlreadyUsername = () => {
  return {
    type: IS_ALREADY_USERNAME,
  }
}

const setAlreadyEmail = () => {
  return {
    type: IS_ALREADY_EMAIL,
  }
}

export {
  setAlreadyEmail,
  setAlreadyUsername,
  clearForm,
  setApproval,
  setRotatePassword,
  setPassword,
  setEmail,
  setUsername,
}
