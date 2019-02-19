<template>
  <section class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ switchName() }}</p>
    <p>User Age: {{ userAge }}</p>
    <button @click="resetName">ResetName</button>
    <button @click="resetFn()">ResetName</button>
  </section>
</template>

<script>
  import { eventBus } from '../eventBus';

  export default {
    props: {
      name: {
        type: String,
        required: true,
        default: 'zpawn'
      },
      firstName: String,
      fullName: [String, Object],
      resetFn: Function,
      userAge: Number
    },
    methods: {
      switchName () {
        return this.name.split("").reverse().join("")
      },
      resetName () {
        this.$emit('nameWasReset', 'Zpawn');
      }
    },
    created () {
      eventBus.$on('ageWasEdited', age => {
        this.userAge = age
      });
    }
  }
</script>

<style scoped>
  section {
    background-color: lightcoral;
  }
</style>

<p></p>
