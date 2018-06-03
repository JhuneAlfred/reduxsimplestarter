import { combineReducers } from 'redux'
import BooksReducer from './reducer_books'
import AuthorsReducer from './reducer_authors'
import ActiveBook from './reducer_active_book'

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook,
  autors: AuthorsReducer
})

export default rootReducer
