import Vuex from 'vuex'
import Vue from 'vue'
import VueResource from 'vue-resource'
import BooksList from '~/static/books.json'
import MoviesList from '~/static/movies.json'
import booksCategories from '~/static/booksCategories.json'
import moviesCategories from '~/static/moviesCategories.json'
Vue.use(VueResource)


const createStore = () => {
    return new Vuex.Store({
        state: {
            books: BooksList.books,
            booksCategories: booksCategories,
            movies: MoviesList.movies,
            moviesCategories: moviesCategories
        },
        getters: {
            getBooks: state => {
              return state.books
            },
            getCategoriesList: state => {
                return state.booksCategories
            },
            getMovies: state => {
                return state.movies
            },
            getCategoriesListMovies: state => {
                return state.moviesCategories
            }
        },
        mutations: {
            // dodaj ksiazke
            add_Book(state, payload)  {
                state.books.unshift(payload);
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