<template>
    <div class="card bg-dark text-white">
        <img src="../assets/img/blank-filmstrip-png-32.png" style="height: 200px" alt="book picture">
        <div class="card-body text-center">
            <h5 class="card-title">Title</h5>
            <h6 class="card-subtitle text-muted">Sci-Fi</h6>
            <hr>
            <p class="card-text">Description</p>
            <hr>
            <div>Your Rate:
                <star-rating style="justify-content: center" :star-size="30" v-model="rating" @rating-selected="setRate(rating, book.id)" />
            </div>
            <input type="checkbox" @click="singleCheck(checked = !checked)" v-model="checked">
        </div>
    </div>
</template>

<script>
  import StarRating from 'vue-star-rating'
  import bCard from 'bootstrap-vue/es/components/card/card';
  export default {
    data() {
      return {
        editedTitle: "Title",
        editedDescription: "Description",
        checked: false,
        rating: 0,
        category: '',
        subcategory: '',
        subcategories: []
      }
    },
    components: {
      'star-rating': StarRating,
      'b-card': bCard,
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
    box-shadow: 2px 3px 15px 4px rgba(0, 0, 0, 0.82);
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
