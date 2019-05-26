new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta: function() {
            alert('Alerta Exibido');
        },
        armazenaValor: function (event) {
            this.valor = event.target.value;
        }
    }
})