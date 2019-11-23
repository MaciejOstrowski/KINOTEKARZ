<template>
  <div>
    <b-button variant="primary" float @click="showModal">
      Edit
    </b-button>
    <b-button variant="danger" float @click="deleteBook">Delete</b-button>

    <b-modal ref="myModalRef2" class="d-flex justify-content-between editModal" hide-footer title="Edit book">
      <div class="d-block text-center">
        <div class="input-group pb-2">
          <label for="title" class="modalLabels">Title:</label>
          <input
            id="title"
            type="text"
            aria-label="title"
            v-model="editTitle"
            class="d-block w-100 form-control"
            placeholder="Title...">
          <label for="description" class="modalLabels mt-3">Description:</label>
          <input
            id="description"
            type="text"
            aria-label="Last name"
            v-model="editDescription"
            class="d-block w-100 form-control"
            placeholder="Description...">
          <div class="d-block w-100 form-group">
            <label for="Category" class="modalLabels mt-3">Category:</label>
            <select style="width: 100%" class="form-control" id="Category">
              <option>Option</option>
            </select>
          </div>
          <div class="d-block w-100 form-group">
            <label for="Subcategory" class="modalLabels mt-3">Subcategory:</label>
            <select style="width: 100%" class="form-control" id="Subcategory">
              <option>Option</option>
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
        truncatedDescription: String
    },
    data() {
      return {
          editTitle: this.title,
          editDescription: this.truncatedDescription
      }
    },
    methods: {
      editBook() {
        this.$store.commit('edit_Book', {
          "index": this.index,
          "title": this.editTitle,
          "description": this.editDescription
        })
        this.hideModal()
      },
      deleteBook() {
        this.$store.commit('delete_Book', { "index": this.index })
      },
      showModal() {
        this.$refs.myModalRef2.show()
      },
      hideModal() {
        this.$refs.myModalRef2.hide()
      }
    }
  }

</script>

<style>
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
