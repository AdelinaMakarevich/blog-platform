import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Pagination } from 'antd'

import { PostCard } from '../PostCard'
import { paginationAction } from '../../store/actions/PaginationAction'
import { fetchGetPostsList } from '../../service/getPostsList'

import classes from './PostsLists.module.scss'

const PostsList = () => {
  const dispatch = useDispatch()
  const userToken = useSelector((store) => store.user.token)
  const user = useSelector((store) => store.user.token)
  const articles = useSelector((store) => store.postsList.articles)
  const articlesCount = useSelector((store) => store.postsList.articlesCount)
  const page = useSelector((store) => store.currentPage.page)
  const limit = useSelector((store) => store.currentPage.limit)
  const offset = useSelector((store) => store.currentPage.offset)

  useEffect(() => {
    dispatch(fetchGetPostsList(limit, offset, userToken))
  }, [page, user])

  const changePage = (page) => {
    dispatch(paginationAction(page))
  }

  return (
    <>
      <div className={classes['posts-list']}>
        {articles.map((el) => (
          <PostCard key={el.slug} {...el} />
        ))}
      </div>
      <Pagination current={page} total={articlesCount} pageSize={limit} showSizeChanger={false} onChange={changePage} />
    </>
  )
}

export { PostsList }
