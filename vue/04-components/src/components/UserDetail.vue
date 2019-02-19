<template>
  <section class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>{{ switchName() }}</p>
    <button @click="resetName">ResetName</button>
    <button @click="resetFn()">ResetName</button>
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
      resetFn: Function
    },
    methods: {
      switchName () {
        return this.name.split("").reverse().join("")
      },
      resetName () {
        this.$emit('nameWasReset', 'Zpawn');
      }
    }
  }
</script>

<style scoped>
  section {
    background-color: lightcoral;
  }
</style>
