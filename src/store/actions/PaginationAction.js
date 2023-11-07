import { CHANGE_PAGE } from '../reducers/PaginationReducer'

const paginationAction = (page) => {
  return {
    type: CHANGE_PAGE,
    page,
  }
}
export { paginationAction }
