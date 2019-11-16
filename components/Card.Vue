<template>
    <div class="card bg-dark text-white">
      <img src="../assets/img/blank-filmstrip-png-32.png" style="height: 200px" alt="book picture">
      <div class="card-body text-center">
          <h5 class="card-title">{{this.title}}</h5>
          <h6 class="card-subtitle text-muted">Sci-Fi</h6>
          <hr>
          <p class="description card-text">{{this.truncatedDescription}}</p>
          <hr>
          <div>
              <b-button variant="primary" float @click="showModal">Edit</b-button>
              <b-button variant="danger" float>Delete</b-button>
          </div>
          <div>Your Rate:
              <star-rating style="justify-content: center" :star-size="30" v-model="rating" @rating-selected="setRate(rating, book.id)" />
          </div>
          <input type="checkbox" v-model="checked">
      </div>
    </div>
</template>

<script>
  import StarRating from 'vue-star-rating'
  import bCard from 'bootstrap-vue/es/components/card/card';
  export default {
    props: {
      title: String,
      description: String,
      rating: Number,
      categories: Array,
      subCategories: Array,
    },
    data() {
      return {
        editedTitle: "Title",
        editedDescription: "Description",
        checked: false,
      }
    },
    components: {
      'star-rating': StarRating,
      'b-card': bCard,
    },
    computed: {
      truncatedDescription() {
        let truncDesc = this.description;
        if(this.description.length > 120 ){
          truncDesc = `${this.description.substring(0, 120)}...`
        }
        return truncDesc
      }
    },
    methods: {
      //    EDIT BOOK MODAL
      showModal() {
        this.$refs.myModalRef.show()
      },
      hideModal() {
        this.$refs.myModalRef.hide()
      }
    }
  }
</script>

<style>
  .card {
    width: 100%;
    margin-top: 15px;
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
  }

  .card img {
    border-radius: 20px 20px 0 0;
  }

  .card input[type="checkbox"] {
    position: absolute;
    top: 20px;
    left: 20px;
    height: 25px;
    width: 25px;
  }

  .card-body button {
    margin-left: 5px;
    margin-right: 5px;
    width: 45%;
  }
</style>