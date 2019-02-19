<template>
  <section class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>User Age: {{ userAge }}</p>
    <button @click="editAge">Edit Age</button>
  </section>
</template>

<script>
  export default {
    props: ['userAge'],
    methods: {
      editAge () {
        this.$emit('ageWasEdited', 30)
      }
    }
  }
</script>

<style scoped>
  section {
    background-color: lightgreen;
  }
</style>
