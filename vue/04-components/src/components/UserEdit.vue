<template>
  <section class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>User Age: {{ userAge }}</p>
    <button @click="editAge">Edit Age</button>
  </section>
</template>

<script>
  import { eventBus } from '../eventBus';

  export default {
    props: ['userAge'],
    methods: {
      editAge () {
        eventBus.changeAge(31)
      }
    }
  }
</script>

<style scoped>
  section {
    background-color: lightgreen;
  }
</style>
