<template>
  <section>
    <div class="container-fluid shadow">
      <!-- Navigation -->
      <b-navbar toggleable="md">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand class="d-flex align-items-center" href="/">
          <img class="logo mr-2" src="../assets/img/logo.png" alt="logo"><span>KINOTEKARZ</span>
        </b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar type="blue" variant="blue" class="w-100">
            <b-nav-form class="d-flex justify-content-around w-100">
              <input class="form-control" type="search" v-model="search" placeholder="Search...">
              <Modal />
              <div class="d-flex">
                <button class="btn btn-outline-primary m-1" @click.prevent="sortByTitle">
                  SORT BY TITLE
                </button>
                <button class="btn btn-outline-primary m-1" @click.prevent="sortByRates">
                  SORT BY RATES
                </button>
                <button class="btn btn-outline-primary m-1" @click.prevent="sortByYear">
                  SORT BY YEAR
                </button>
              </div>
              <div>
                <button class="btn btn-outline-danger m-1" @click.prevent="getJson">BOOKS</button>
                <button class="btn btn-outline-danger m-1" @click.prevent="deleteChecked">MOVIES</button>
              </div>
            </b-nav-form>
          </b-navbar>
        </b-collapse>
      </b-navbar>
    </div>
    <div class="container-fluid mt-5">
      <div class="row d-flex justify-content-around">
         <Card
          class="cardWitdh d-flex"
          v-for="book in filteredBooks"
          :key="book.index"
          :index="book.index"
          :title="book.title"
          :description="book.description"
          :rate="book.rate"
          :year="book.year"/>
      </div>
    </div>
  </section>
</template>
<script>
  import Card from "../components/Card"
  import Modal from "../components/Modal"
  export default {
    data() {
      return {
        filteredBooks: [],
        search: "",
        isSortedByTitle: false,
        isSortedByRate: false,
        isSortedByYear: false
      }
    },
    components: {
      Card,
      Modal,
    },
    computed: {
      getBooks() {
        return this.$store.getters.getBooks
      }
    },
    watch: {
      getBooks(value) {
        this.filteredBooks = this.getBooks.filter(book => book.title.includes(`${this.search.toLowerCase()}`,0))
      },
      search(value) {
        this.filteredBooks = this.getBooks.filter(book => book.title.includes(`${value.toLowerCase()}`,0))
      }
    },
    mounted() {
      this.filteredBooks = this.getBooks
    },
    methods: {
      sortByTitle() {
        const compare = (a, b) => {
          return this.isSortedByTitle !== true
            ? a.title < b.title ? -1 : 1
            : a.title < b.title ? 1 : -1
        }
        this.isSortedByTitle = !this.isSortedByTitle
        return this.filteredBooks.sort(compare);
      },
      sortByRates() {
        const compare = (a, b) => {
          return this.isSortedByRate !== true
            ? a.rate < b.rate ? -1 : 1
            : a.rate < b.rate ? 1 : -1
        }
        this.isSortedByRate = !this.isSortedByRate
        this.filteredBooks = this.filteredBooks.sort(compare);
      },
      sortByYear() {
        const compare = (a, b) => {
          return this.isSortedByYear !== true
            ? a.year < b.year ? -1 : 1
            : a.year < b.year ? 1 : -1
        }
        this.isSortedByYear = !this.isSortedByYear
        this.filteredBooks = this.filteredBooks.sort(compare);
      }
    }
  }
</script>

<style>
  .logo {
    width: 38px;
    height: 38px;
  }
  .cardWitdh {
    width: 30vw !important;
  }
</style>
