import { GET_POST, CLEAR_POST } from '../reducers/GetPostReducer'

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

export { getPostAction, clearPostAction }
