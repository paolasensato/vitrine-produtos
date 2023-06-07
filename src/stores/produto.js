import { defineStore } from 'pinia'
import axios from '../api/axios.config'
import formataValor from '../helpers/formataValor.js'

export const useProdutoStore = defineStore('produtos', {
  state: () => ({
    produtos: [],
    produto: {}
  }),
  getters: {
    getProdutos(state) {
      return state.produtos
    },
    getProduto(state) {
      return state.produto
    }
  },
  actions: {
    async fetchProdutos() {
      await axios
        .get('/produtos')
        .then((response) => {
          this.produtos = response.data
          this.produtos.map((produto) => {
            produto.valor = formataValor(produto.valor)
          })
        })
        .catch((error) => {
          alert(error)
        })
    },
    async fetchProduto(id) {
      await axios
        .get(`/produto/${id}`)
        .then((response) => {
          this.produto = response.data
          this.produto.valorFormatado = formataValor(this.produto.valor)
        })
        .catch((error) => {
          alert(error)
        })
    }
  }, 
  persist: true
})
