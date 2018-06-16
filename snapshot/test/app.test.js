'use strict';


import App from '../../src/components/app'
import { selectBook } from '../../src/actions/index'
import { rootReducer } from '../../src/reducers/index'

import BooksReducer from '../../src/reducers/reducer_books'
import AuthorsReducer from '../../src/reducers/reducer_authors'
import ActiveBook from '../../src/reducers/reducer_active_book'

const book = null
const sBook = {
    type: 'BOOK_SELECTED',
    payload: book
}

describe('render component', () => {
    it('should match returned object from selectBook', () => {
        expect(selectBook(book)).toMatchObject(sBook)
    })        
})

it('app exists', () => {
    expect(App).toBeDefined()
})

const rReducer = {
    books: BooksReducer,
    activeBook: ActiveBook,
    autors: AuthorsReducer
  }
  
// it('should return something', () => {
//     //const component = renderComponent(App)
//     expect(rootReducer).toMatchObject(rReducer)
// })