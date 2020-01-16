<template>
  <div>
    <b-button variant="primary" float @click="showModal">
      Edit
    </b-button>
    <b-button variant="danger" float @click="deleteBook">Delete</b-button>

    <b-modal ref="myModalRef2" class="d-flex justify-content-between editModal" hide-footer title="Edit book">
      <div class="d-block text-center">
        <div class="input-group pb-2">
          <div class="d-flex w-100 justify-content-between">
            <label for="title" class="modalLabels">Title:</label>
            <div class="d-flex align-items-center">
              <span class="mr-2">Is book borrowed: </span>
              <div class="d-flex custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="customSwitch1">
                <label class="custom-control-label" for="customSwitch1"></label>
              </div>
            </div>
          </div>
          <input
            type="text"
            aria-label="title"
            v-model="editTitle"
            class="d-block w-100 form-control"
            placeholder="Title...">
          <label for="description" class="modalLabels mt-3">Description:</label>
          <textarea
            type="text"
            class="d-block w-100 form-control"
            id="exampleFormControlTextarea1"
            v-model="editDescription" rows="3"
            placeholder="Description..."></textarea>
          <div class="d-block w-100 form-group">
            <label for="Year" class="modalLabels mt-3">Year:</label>
            <input
              type="text"
              aria-label="year"
              v-model="editYear"
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
        <b-btn class="col-5" variant="outline-primary" @click="editBook">Edit book</b-btn>
      </div>
    </b-modal>
  </div>
</template>

<script>
  export default {
    props: {
      index: String,
      title: String,
      truncatedDescription: String,
      rate: Number,
      year: String,
      category: String,
      subcategory: String
    },
    data () {
      return {
        isBookBorrowed: false,
        editTitle: this.title,
        editDescription: this.truncatedDescription,
        editYear: this.year,
        selectedCategory: this.category,
        selectedSubcategory: this.subcategory
      }
    },
    computed: {
      getCategoriesList () {
        return this.$store.getters.getCategoriesList
      }
    },
    methods: {
      editBook () {
        this.$store.commit('edit_Book', {
          'index': this.index,
          'title': this.editTitle,
          'description': this.editDescription,
          'rate': this.rate,
          'year': this.editYear,
          'category': this.selectedCategory,
          'subcategory': this.selectedSubcategory
        })
        this.hideModal()
      },
      deleteBook () {
        this.$store.commit('delete_Book', { 'index': this.index })
      },
      showModal () {
        this.$refs.myModalRef2.show()
      },
      hideModal () {
        this.$refs.myModalRef2.hide()
      }
    }
  }
</script>

<style>
    .md-switch {
      display: flex;
    }
    .editModal {
        color: black;
    }
    .modal-header .close {
        width: 50px;
    }
    .modalLabels {
        font-weight: 600;
        color: black;
    }
</style>
