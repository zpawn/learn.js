<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <Server
        v-for="server in servers"
        :key="server.id"
        :server="server"
      ></Server>
    </ul>
  </div>
</template>

<script>
  import Server from './Server';
  import EventBus from '../../EventBus';

  export default {
    name: "Servers",
    data () {
      return {
        servers: EventBus.$data.servers
      }
    },
    components: { Server },
  }
</script>

<style scoped>
</style>
