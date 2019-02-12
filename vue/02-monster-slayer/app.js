new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
  },
  methods: {
    startGame: function () {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },

    attack: function () {
      this.monsterHealth -= this.calculateDamage(3, 10);
      if (this.checkWin()) {
        return;
      }

      this.monsterAttack();
    },

    specialAttack: function () {
      this.monsterHealth -= this.calculateDamage(10, 20);
      if (this.checkWin()) {
        return;
      }

      this.monsterAttack();
    },

    heal: function () {
      (this.playerHealth <= 90)
        ? this.playerHealth += 10
        : this.playerHealth = 100;
      this.monsterAttack();
    },

    giveUp: function () {},

    monsterAttack: function () {
      this.playerHealth -= this.calculateDamage(5, 12);
      this.checkWin();
    },

    calculateDamage: function (min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min)
    },

    checkWin: function () {
      if (this.monsterHealth <= 0) {
        (confirm('You won! New Game?'))
          ? this.startGame()
          : this.gameIsRunning = false;
        return true;
      } else if (this.playerHealth <= 0) {
        (confirm('You lost! New Game?'))
          ? this.startGame()
          : this.gameIsRunning = false;
      }

      return false;
    }
  }
});
