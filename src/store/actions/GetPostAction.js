import { GET_POST, CLEAR_POST, ERROR_POST } from '../reducers/GetPostReducer'

const getPostAction = (article) => {
  return {
    type: GET_POST,
    article,
  }
}

const clearPostAction = () => {
  return {
    type: CLEAR_POST,
  }
}

const errorPostAction = (article) => {
  return {
    type: ERROR_POST,
    article,
  }
}

export { getPostAction, clearPostAction, errorPostAction }
