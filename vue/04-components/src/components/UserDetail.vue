<template>
  <section class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>{{ switchName() }}</p>
  </section>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true,
        default: 'zpawn'
      },
      firstName: String,
      fullName: [String, Object],
    },
    methods: {
      switchName () {
        return this.name.split("").reverse().join("")
      }
    }
  }
</script>

<style scoped>
  section {
    background-color: lightcoral;
  }
</style>
