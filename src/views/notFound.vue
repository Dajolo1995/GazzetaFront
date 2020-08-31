<template>
<div>
  <b-alert show variant="danger">
    <h4 class="alert-heading">404: NOT_FOUND</h4>
    <p>
     Code: NOT_FOUND
    </p>
    <hr>
    <p class="mb-0">
      ID: chs1::6rdzk-1590298029370-74743b85cce5
    </p>
    <b-btn variant="info" :to="{path:'/'}">to return</b-btn>
  </b-alert>
</div>
</template>

<script>

// import axios from 'axios';

export default {
  data() {
    return {
      file: null
    }
  },

  methods: {
  },
}
</script>