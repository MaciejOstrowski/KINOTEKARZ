import BooksList from '../../../../../static/books.json'
import MoviesList from '../../../../../static/movies.json'
import booksCategories from '../../../../../static/booksCategories.json'
import moviesCategories from '../../../../../static/moviesCategories.json'

const state = {
  state: {
    books: BooksList.books,
    booksCategories: booksCategories,
    movies: MoviesList.movies,
    moviesCategories: moviesCategories
  }
}

const getters = {
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
}

const mutations = {
  DECREMENT_MAIN_COUNTER (state) {
    state.main--
  },
  INCREMENT_MAIN_COUNTER (state) {
    state.main++
  }
}

const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER')
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
