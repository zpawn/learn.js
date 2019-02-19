import Vue from 'vue'

export const eventBus = new Vue({
  data: {
    // ...
  },
  methods: {
    changeAge (age) {
      this.$emit('ageWasEdited', age)
    }
  }
});
