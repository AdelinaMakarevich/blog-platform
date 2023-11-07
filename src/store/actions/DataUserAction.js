import { GET_DATA_USER, CLEAR_DATA_USER } from '../reducers/DataUserReducer'

const getDataUserAction = (token, username, email, image) => {
  return {
    type: GET_DATA_USER,
    token,
    username,
    email,
    image,
  }
}

const clearDataUserAction = () => {
  return {
    type: CLEAR_DATA_USER,
  }
}

export { getDataUserAction, clearDataUserAction }
