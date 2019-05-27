new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed: {
        resultado: function () {
            return this.valor !== 37 ? 'Valor Diferente' : 'Valor Igual';
        }
    },
    watch: {
        resultado: function(newV, oldV) {
            let vm = this;
            console.log(newV, oldV);
            setTimeout(function () {
                vm.valor = 0;
            },5000);
        }
    }
});