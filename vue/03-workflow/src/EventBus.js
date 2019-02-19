import Vue from 'vue'
import nanoid from 'nanoid';

////

const EventBus = new Vue({
  data () {
    return {
      servers: [
        { id: nanoid(5), status: 'Normal' },
        { id: nanoid(5), status: 'Critical' },
        { id: nanoid(5), status: 'Unknown' },
        { id: nanoid(5), status: 'Normal' },
      ],
      active: null
    }
  },
  methods: {
    resetServer (id) {
      this.servers.forEach(s => {
        if (s.id === id) {
          s.status = 'Normal';
          this.changeServer(s.id);
        }
      });
    },
    changeServer (id) {
      this.active = id;
      this.$emit('onChangeServer', this.servers.find(server => server.id === this.active));
    }
  }
});

export default EventBus
