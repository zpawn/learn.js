<template>
  <section class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>{{ name }}</p>
  </section>
</template>

<script>
  export default {
    props: ['name']
  }
</script>

<style scoped>
  section {
    background-color: lightcoral;
  }
</style>
