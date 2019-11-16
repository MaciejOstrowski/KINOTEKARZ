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
              <Modal />
              <div class="d-flex">
                <button class="btn btn-outline-primary m-1">
                  SORT BY TITLE
                </button>
                <button class="btn btn-outline-primary m-1">
                  SORT BY RATES
                </button>
                <button class="btn btn-outline-primary m-1">
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
          v-for="book in getBooks"
          :key="book.index"
          :title="book.title"
          :description="book.description"/>
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
        books: []
      }
    },
    components: {
      Card,
      Modal,
    },
    computed: {
      getBooks:{
        get() {
          return this.$store.getters.getBooks
        }
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
