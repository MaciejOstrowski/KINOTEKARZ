<template>
  <div>
    <!-- <b-button variant="primary" float @click="showModal">
      Edit
    </b-button> -->
    <a class="position-absolute" style="left: 25px" @click="showModal"><md-icon  @click="showModal">announcement</md-icon></a>

    <b-modal ref="myModalRef2" class="d-flex justify-content-between editModal" hide-footer title="Edit Note">
      <div class="d-block text-center">
        <div class="input-group pb-2">
          <textarea
            type="text"
            class="d-block w-100 form-control"
            id="exampleFormControlTextarea1"
            v-model="editedCardNote" rows="3"
            placeholder="Description..."></textarea>
        </div>
      </div>
      <div class="d-flex justify-content-between mt-3">
        <b-btn class="col-5" variant="outline-danger" @click="hideModal">Close</b-btn>
        <b-btn class="col-5" variant="outline-primary" @click="editCardNote">Edit Note</b-btn>
      </div>
    </b-modal>
  </div>
</template>

<script>
  export default {
    props: {
        index: String,
        cardNote: String
    },
    data() {
      return {
          editedCardNote: this.cardNote
      }
    },
    methods: {
      editCardNote() {
        this.$store.commit('edit_Book', {
          "index": this.index,
          "cardNote": this.editedCardNote
        })
        this.hideModal()
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
