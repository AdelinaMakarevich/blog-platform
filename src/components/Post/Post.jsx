import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Spin, Popconfirm, Alert } from 'antd'
import format from 'date-fns/format'
import nextId from 'uniqid'
import Markdown from 'react-markdown'

import { fetchGetPost } from '../../service/getPost'
import { fetchDeletePost } from '../../service/deletePost'
import { fetchLikePost } from '../../service/likePost'
import authorImg from '../../assets/img/photo.svg'
import likeImg from '../../assets/img/like.svg'
import likeActiveImage from '../../assets/img/likeActive.svg'
import { NotExistingPage } from '../NotExistingPage'

import classes from './Post.module.scss'

const Post = () => {
  const [like, setLike] = useState(false)
  const [deletePost, setDeletePost] = useState(false)

  const { slug } = useParams()
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user)
  const post = useSelector((store) => store.post)

  const authorization = useSelector((store) => store.logIn.authorization)

  useEffect(() => {
    dispatch(fetchGetPost(slug, user.token))
  }, [slug])
  if (Object.keys(post).length === 0) {
    return <NotExistingPage />
  } else if (!post.article) {
    return <Spin size="large" />
  } else if (deletePost) {
    return <Alert type="error" message="Пост успешно удалён" />
  } else {
    const { author, title, body, favoritesCount, description, tagList, createdAt, favorited } = post.article
    const { username, image } = author

    const dateCreateAt = format(new Date(createdAt), 'MMMM d, yyyy')

    const deletePost = () => {
      setDeletePost(true)
      fetchDeletePost(user.token, slug)
    }

    const addLike = () => {
      if (authorization) {
        setLike(true)
        fetchLikePost(slug, user.token)
      }
    }
    return (
      <article className={classes['post']}>
        <header className={classes['header']}>
          <div className={classes['post-info']}>
            <div className={classes['wrapper']}>
              <h2 className={classes['title']}>{title}</h2>
              {authorization ? (
                <button className={classes['button-like']} type="button" onClick={addLike}>
                  <img className={classes['like']} src={favorited || like ? likeActiveImage : likeImg} alt="like" />
                </button>
              ) : (
                <Popconfirm
                  placement="right"
                  title="Нужна авторизация"
                  onConfirm={addLike}
                  cancelButtonProps={{ style: { display: 'none' } }}
                >
                  <button className={classes['button-like']} type="button" onClick={addLike}>
                    <img className={classes['like']} src={likeImg} alt="like" />
                  </button>
                </Popconfirm>
              )}
              <span className={classes['quantity-like']}>{like ? favoritesCount + 1 : favoritesCount}</span>
            </div>
            <ul className={classes['teg-list']}>
              {tagList.map((teg) => {
                return (
                  <li key={nextId()} className={classes['teg-item']}>
                    <button className={classes['teg']}>{teg}</button>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={classes['wrapper-author']}>
            <div className={classes['author']}>
              <div className={classes['author__info']}>
                <span className={classes['author__name']}>{username}</span>
                <span className={classes['author__date-create-post']}>{dateCreateAt}</span>
              </div>
              <img
                className={classes['author__img']}
                src={image}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null
                  currentTarget.src = `${authorImg}`
                }}
                alt="author-img"
                width={46}
                height={46}
              />
            </div>
            {user.username === username ? (
              <div className={classes['management-post']}>
                <Popconfirm
                  title="Удаление поста"
                  description="Вы дйствительно хотите удалить пост?"
                  onConfirm={deletePost}
                  okText="Да"
                  cancelText="Нет"
                >
                  <button className={classes['button-delete-post']} type="button">
                    Delete
                  </button>
                </Popconfirm>
                <Link to={`/articles/${slug}/edit`}>
                  <button className={classes['button-edit-post']} type="button">
                    Edit
                  </button>
                </Link>
              </div>
            ) : null}
          </div>
        </header>
        <main className={classes['main']}>
          <p className={classes['post-description']}>{description}</p>
          <Markdown className={classes['post-text']}>{body}</Markdown>
        </main>
      </article>
    )
  }
}

export { Post }
