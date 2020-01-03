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
              <div>
                <input class="form-control" type="search" v-model="search" placeholder="Search...">
                <b-dropdown v-if="filterType === 'title'" id="searchBy" text="By title" variant="primary">
                  <b-dropdown-item @click='setFilterType("title")'>By title</b-dropdown-item>
                  <b-dropdown-item @click='setFilterType("category")'>By category</b-dropdown-item>
                </b-dropdown>
                <b-dropdown v-else id="searchBy" text="By category" variant="primary">
                  <b-dropdown-item @click='setFilterType("title")'>By title</b-dropdown-item>
                  <b-dropdown-item @click='setFilterType("category")'>By category</b-dropdown-item>
                </b-dropdown>
              </div>
              <Modal />
              <div class="d-flex">
                <button
                  class="m-1" @click.prevent="sortByTitle"
                  :class='selectedButton === "sortTitle" ? "btn btn-primary" : "btn btn-outline-primary"'>
                  SORT BY TITLE
                </button>
                <button
                  class="m-1" @click.prevent="sortByRates"
                  :class='selectedButton === "sortRate" ? "btn btn-primary" : "btn btn-outline-primary"'>
                  SORT BY RATES
                </button>
                <button
                  class="m-1" @click.prevent="sortByYear"
                  :class='selectedButton === "sortYear" ? "btn btn-primary" : "btn btn-outline-primary"'>
                  SORT BY YEAR
                </button>
              </div>
              <div>
                <button class="btn btn-outline-danger m-1" @click.prevent="switchPage(true)">BOOKS</button>
                <button class="btn btn-outline-danger m-1" @click.prevent="switchPage(false)">MOVIES</button>
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
            v-for="book in isBooksPage ? filteredBooks : filteredMovies"
            :key="book.index"
            :index="book.index"
            :title="book.title"
            :description="book.description"
            :rate="book.rate"
            :year="book.year"
            :category="book.category"
            :subcategory="book.subcategory"
            :cardNote="book.cardNote"/>
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
        filterType: "title",
        filteredBooks: [],
        filteredMovies: [],
        search: "",
        isSortedByTitle: false,
        isSortedByRate: false,
        isSortedByYear: false,
        isBooksPage: true,
        selectedButton: ''
      }
    },
    components: {
      Card,
      Modal,
    },
    computed: {
      getBooks() {
        return this.$store.getters.getBooks
      },
      getMovies() {
        return this.$store.getters.getMovies
      },
    },
    watch: {
      filteredMovies(value) {
        console.log(value)
      },
      getBooks(value) {
        this.filteredBooks = this.filterType === "title"
          ? this.getBooks.filter(book => book.title.toLowerCase().includes(`${this.search}`))
          : this.getBooks.filter(book => book.subcategory.toLowerCase().includes(`${this.search}`))
      },
      search(value) {
        this.filteredBooks = this.filterType === "title"
          ? this.getBooks.filter(book => book.title.toLowerCase().includes(`${value}`))
          : this.getBooks.filter(book => book.subcategory.toLowerCase().includes(`${value}`))
      }
    },
    mounted() {
      this.filteredBooks = this.getBooks
      this.filteredMovies = this.getMovies
    },
    methods: {
      switchPage(page) {
        this.isBooksPage = page
      },
      setFilterType(type) {
        this.filterType = type
        this.search = ""
      },
      sortByTitle() {
        const compare = (a, b) => {
          return this.isSortedByTitle !== true
            ? a.title < b.title ? 1 : -1
            : a.title < b.title ? -1 : 1
        }
        this.isSortedByTitle = !this.isSortedByTitle
        this.filteredBooks = this.filteredBooks.sort(compare);

        this.isSortedByRate = false
        this.isSortedByYear = false

        this.selectedButton = 'sortTitle'
      },
      sortByRates() {
        const compare = (a, b) => {
          return this.isSortedByRate !== true
            ? a.rate < b.rate ? -1 : 1
            : a.rate < b.rate ? 1 : -1
        }
        this.isSortedByRate = !this.isSortedByRate
        this.filteredBooks = this.filteredBooks.sort(compare);

        this.isSortedByTitle = false
        this.isSortedByYear = false

        this.selectedButton = 'sortRate'
      },
      sortByYear() {
        const compare = (a, b) => {
          return this.isSortedByYear !== true
            ? a.year < b.year ? -1 : 1
            : a.year < b.year ? 1 : -1
        }
        this.isSortedByYear = !this.isSortedByYear
        this.filteredBooks = this.filteredBooks.sort(compare);

        this.isSortedByTitle = false
        this.isSortedByRate = false

        this.selectedButton = 'sortYear'
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
  .btn .btn-primary:not(:focus),
  .btn .btn-primary:active,
  .btn .btn-primary:hover,
  .btn .btn-primary:focus {
    color: white !important;
    background-color: #007BFF !important;
  }
</style>
