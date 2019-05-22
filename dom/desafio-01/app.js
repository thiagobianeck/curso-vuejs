new Vue({
    el: '#desafio',
    data: {
        nome: 'Thiago Moreira Bianeck',
        idade: 35,
        imagemUrl: 'https://www.nossasagradafamilia.com.br/imagens/uploads/conteudos/crop_20170412110608zgmVWjy9bt.jpg'
    },
    methods: {
        idadeX3: function (idade) {
            return idade * 3;
        },
        ramdom: function () {
            return Math.random();
        }
    }
});