import Vuex from 'vuex'
import Vue from 'vue'
import VueResource from 'vue-resource'
import myJson from '~/static/books.json'
Vue.use(VueResource)


const createStore = () => {
    return new Vuex.Store({
        state: {
            books: myJson.books,
        },
        getters: {
            getBooks: state => {
              return state.books
            },
        },
        mutations: {
            add_Book: (state, payload) => {
                //Vue.set(state, 'books', [...payload])
                state.books.unshift(payload);
            },
            delete_Book: (state, payload) => {
                const index = payload;
                state.books.splice(index, 1);
            },
        },
        actions: {

        },
    })
}

export default createStore