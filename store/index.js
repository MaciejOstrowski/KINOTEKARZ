import Vuex from 'vuex'
import Vue from 'vue'
import VueResource from 'vue-resource'
import myJson from '~/static/books.json'
import categories from '~/static/booksCategories.json'
Vue.use(VueResource)


const createStore = () => {
    return new Vuex.Store({
        state: {
            books: myJson.books,
            categoriesList: categories
        },
        getters: {
            getBooks: state => {
              return state.books
            },
            getCategoriesList: state => {
                return state.categoriesList
            }
        },
        mutations: {
            // dodaj ksiazke
            add_Book(state, payload)  {
                state.books.push(payload);
            },
            // usun ksiazke po index
            delete_Book: (state, payload) => {
                const index = payload.index;
                state.books = state.books.filter(book => book.index !== index)
            },
            // edytowanie ksiazek po indexach
            edit_Book: (state, payload) => {
                const index = payload.index;
                state.books = state.books.map(book => book.index === index
                    ? { ...book, ...payload }
                    : book
                )
            },
            add_Rate: (state, {index, rate}) => {
                 state.books = state.books.map(book => book.index === index
                    ? { ...book, rate }
                    : book
                 )
            }
        },
        actions: {

        },
    })
}

export default createStore