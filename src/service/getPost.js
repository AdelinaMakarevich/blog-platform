import { getPostAction } from '../store/actions/GetPostAction'

const fetchGetPost = (slug, token) => {
  return (dispatch) => {
    fetch(`https://blog.kata.academy/api/articles/${slug}`, {
      method: 'get',
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(getPostAction(data))
      })
  }
}

export { fetchGetPost }
