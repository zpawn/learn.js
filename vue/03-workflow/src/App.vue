<template>
  <div class="container">
    <appHeader></appHeader>
    <hr>
    <div class="row">
      <Servers></Servers>
      <app-server-details></app-server-details>
    </div>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from './components/Shared/Header.vue';
  import Footer from './components/Shared/Footer.vue';
  import Servers from './components/Servers/Servers.vue';
  import ServerDetails from './components/Servers/ServerDetails.vue';

  export default {
    name: "App",
    components: {
      appHeader: Header,
      appFooter: Footer,
      Servers,
      'app-server-details': ServerDetails,
    },
  }
</script>

<style>

</style>
