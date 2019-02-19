<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="!server">Please, select a Server</p>
    <template v-else>
      <p>Server: <strong>#{{ server.id }}</strong></p>
      <p>Status: <strong>{{ server.status }}</strong></p>
      <button @click="onReset(server.id)">Reset</button>
    </template>
  </div>
</template>

<script>
  import EventBus from '../../EventBus';

  export default {
    name: "ServerDetails",
    data () {
      return {
        server: null
      }
    },
    methods: {
      onReset (id) {
        EventBus.resetServer(id)
      }
    },
    created () {
      EventBus.$on('onChangeServer', server => this.server = server);
    }
  }
</script>

<style scoped>
</style>
