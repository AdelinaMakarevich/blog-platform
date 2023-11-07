import { GET_POSTS_LIST } from '../reducers/GetPostListReducer'

const getPostsListAction = (data) => {
  return {
    type: GET_POSTS_LIST,
    data,
  }
}

export { getPostsListAction }
