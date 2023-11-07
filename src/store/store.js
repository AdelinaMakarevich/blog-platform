import { configureStore } from '@reduxjs/toolkit'

import { getPostsListReducer } from './reducers/GetPostListReducer'
import { getPostReducer } from './reducers/GetPostReducer'
import { paginationReducer } from './reducers/PaginationReducer'
import { registerReducer } from './reducers/RegisterReducer'
import { authorizationUsers } from './reducers/AuthorizationUsersReducer'
import { updateUserReducer } from './reducers/UpdateUserReducer'
import { dataUserReducer } from './reducers/DataUserReducer'
import { createPostReducer } from './reducers/CreatePostReducer'

const store = configureStore({
  reducer: {
    postsList: getPostsListReducer,
    post: getPostReducer,
    currentPage: paginationReducer,
    register: registerReducer,
    logIn: authorizationUsers,
    updateUser: updateUserReducer,
    user: dataUserReducer,
    createPost: createPostReducer,
  },
})

export { store }
