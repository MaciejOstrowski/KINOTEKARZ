<template>
  <div>
    <b-button variant="primary" @click="showModal">
      <i class="material-icons">add</i>
    </b-button>

    <b-modal ref="myModalRef" hide-footer title="Add your new book">
      <div class="d-block text-center">
        <div class="input-group pb-2">
          <label for="title" class="modalLabels">Title:</label>
          <input id="title" type="text" aria-label="title" class="d-block w-100 form-control" placeholder="Title...">
          <label for="description" class="modalLabels mt-3">Description:</label>
          <input id="description" type="text" aria-label="Last name" class="d-block w-100 form-control"
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
        <b-btn class="col-5" variant="outline-primary">Add book</b-btn>
      </div>
    </b-modal>
  </div>
</template>

<script>
  export default {
    methods: {
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
    .modalLabels {
        font-weight: 600;
    }
</style>
