import {
  SET_TITLE,
  SET_DESCRIPTION,
  SET_TEXT,
  SET_TAG,
  ADD_TAG,
  DELETE_TAG,
  CLEAR_FORM_POST,
} from '../reducers/CreatePostReducer'

const setTitlePost = (title) => {
  return {
    type: SET_TITLE,
    title,
  }
}

const setDescriptionPost = (description) => {
  return {
    type: SET_DESCRIPTION,
    description,
  }
}

const setTextPost = (text) => {
  return {
    type: SET_TEXT,
    text,
  }
}

const setTagPost = (tag) => {
  return {
    type: SET_TAG,
    tag,
  }
}

const addTagPost = (tag) => {
  return {
    type: ADD_TAG,
    tag,
  }
}

const deleteTagPost = (tag) => {
  return {
    type: DELETE_TAG,
    tag,
  }
}

const clearFormPost = () => {
  return {
    type: CLEAR_FORM_POST,
  }
}

export { setTitlePost, setDescriptionPost, setTextPost, setTagPost, addTagPost, deleteTagPost, clearFormPost }
