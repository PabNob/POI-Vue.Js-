new Vue({
  el: "#app",
  data() {
    return {
      numjogador: null,
      result: "",
      choice: "",
    };
  },
  methods: {
    play() {
      
      //Máquina escolhe um número aleatório
      var nummaquina = Math.floor(Math.random() * 9) + 1;

      //Operação
      var sum = parseInt(this.numjogador) + nummaquina;

      // Verificação
      var res = "";
      if (sum % 2 === 0) {
        res = "Par";
      } else {
        res = "Ímpar";
      } 

      // Exibir o resultado
      if (this.choice == res) {
        this.result = `Você venceu! A soma (${this.numjogador} + ${nummaquina} = ${sum}) é (${res}) .`;
      } else {
        this.result = `Você perdeu! A soma (${this.numjogador} + ${nummaquina} = ${sum}) é (${res}) .`;
      }

    },
  },
});
