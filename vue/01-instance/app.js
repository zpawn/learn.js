Vue.component('hello', {
  template: '<h1>Hello, Component!</h1>'
});

////

const vm1 = new Vue({
  data: {
    title: 'The VueJS Instance',
    showParagraph: false
  },
  methods: {
    show: function () {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      console.log('[show:ref]', this.$refs);
    },
    updateTitle: function (title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function () {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function (value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

vm1.$mount('#app1');

setTimeout(() => {
  vm1.title = 'Changed from Timer';
}, 3000);
vm1.$refs.heading.innerText = 'Something else';

////

const vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The Second Instance'
  },
  methods: {
    onChange: function () {
      vm1.title = 'Changed from another Instance';
    }
  }
});

////

const vm3 = new Vue({
  template: '<h1>Hello, App3!</h1>',
});
vm3.$mount('#app3');

////

const vm4 = new Vue({
  template: '<h1>Hello, App4!</h1>',
});
vm4.$mount();
document.getElementById('app4').appendChild(vm4.$el);
