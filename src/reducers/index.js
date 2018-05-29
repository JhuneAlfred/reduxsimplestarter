import { combineReducers } from 'redux'
import BooksReducer from './reducer_books'
import AuthorsReducer from './reducer_authors'

const rootReducer = combineReducers({
  books: BooksReducer,
  autors: AuthorsReducer
})

export default rootReducer
