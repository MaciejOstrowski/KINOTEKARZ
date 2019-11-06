<template>
  <section>
    <div class="container-fluid shadow">
      <!-- Navigation -->
      <b-navbar toggleable="md">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="/">KINOTEKARZ</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar type="blue" variant="blue" class="w-100">
            <b-nav-form class="d-flex justify-content-around w-100">
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
            </b-nav-form>
          </b-navbar>
        </b-collapse>
      </b-navbar>
    </div>
  </section>
</template>
<script>
  export default {

  }
</script>

<style>

</style>
