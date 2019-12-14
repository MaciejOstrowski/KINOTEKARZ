<template>
  <div>
    <b-button class="d-flex align-items-center" variant="primary" @click="showModal">
      <i class="material-icons">add</i>
    </b-button>

    <b-modal ref="myModalRef" hide-footer title="Add your new book">
      <div class="d-block text-center">
        <div class="input-group pb-2">
          <label for="title" class="modalLabels">Title:</label>
          <input
            type="text"
            aria-label="title"
            v-model="title"
            class="d-block w-100 form-control"
            placeholder="Title...">
          <label for="description" class="modalLabels mt-3">Description:</label>
          <textarea
            type="text"
            class="d-block w-100 form-control"
            id="exampleFormControlTextarea1"
            v-model="description" rows="3"
            placeholder="Description..."></textarea>
          <div class="d-block w-100 form-group">
            <label for="Year" class="modalLabels mt-3">Year:</label>
            <input
              type="text"
              aria-label="year"
              v-model="year"
              class="d-block w-100 form-control"
              placeholder="Year...">
          </div>
          <div class="d-block w-100 form-group">
            <label for="Category" class="modalLabels mt-3">Category:</label>
            <select style="width: 100%" class="form-control" id="Category" v-model="selectedCategory" placeholder="Choose category...">
              <option v-for="(category, index) in getCategoriesList.categories" :value="category" :key="index">{{category}}</option>
            </select>
          </div>
          <div class="d-block w-100 form-group">
            <label for="Subcategory" class="modalLabels mt-3">Subcategory:</label>
            <select style="width: 100%" class="form-control" id="Subcategory" v-model="selectedSubcategory" placeholder="Choose subcategory...">
              <option v-for="(subcategory, index) in getCategoriesList.subcategories[`${this.selectedCategory}`]" :value="subcategory" :key="index">
                {{subcategory}}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-between mt-3">
        <b-btn class="col-5" variant="outline-danger" @click="hideModal">Close</b-btn>
        <b-btn class="col-5" variant="outline-primary" @click="addBook">Add book</b-btn>
      </div>
    </b-modal>
  </div>
</template>

<script>
  import UUID from 'vue-uuid';
  import Vue from 'vue'

  Vue.use(UUID);
  export default {
    data() {
      return {
          title: '',
          description: '',
          year: '',
          selectedCategory: '',
          selectedSubcategory: ''
      }
    },
    computed: {
      getCategoriesList() {
        return this.$store.getters.getCategoriesList
      }
    },
    methods: {
      addBook() {
        this.$store.commit('add_Book', {
          "index": this.$uuid.v4(),
          "title": this.title,
          "description": this.description,
          "rate": 0,
          "year": this.year,
          "category": this.selectedCategory,
          "subcategory": this.selectedSubcategory
        })
        this.title = ''
        this.description = ''
        this.year = ''
        this.hideModal()
      },
      showModal() {
        this.$refs.myModalRef.show()
      },
      hideModal() {
        this.title = ""
        this.description = ""
        this.$refs.myModalRef.hide()
      }
    }
  }

</script>

<style>
  .modalLabels {
      font-weight: 600;
  }
</style>
