<template>
  <li class="list-group-item">
    <a href="#" @click="onClick(server.id)">
      Server: #{{ server.id }}
    </a>
  </li>
</template>

<script>
  import EventBus from '../../EventBus';

  export default {
    name: "Server",
    props: ['server'],
    methods: {
      onClick (id) {
        EventBus.changeServer(id);
      }
    }
  }
</script>

<style scoped>
</style>
