new Vue({
	el: '#desafio',
	data: {
		aplicarClasse: true,
		classeCSS: 'destaque'
	},
	methods: {
		iniciarEfeito() {
			this.aplicarClasse = !this.aplicarClasse;
		},
		iniciarProgresso() {

		}
	},
	computed: {
		classe() {
			return {
				destaque: this.aplicarClasse,
				encolher: !this.aplicarClasse
			}
		}
	}
})
