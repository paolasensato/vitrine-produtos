import { defineStore } from 'pinia'
import axios from '../api/axios.config'
import formataValor from '../helpers/formataValor.js'

export const useProdutoStore = defineStore('produtos', {
  state: () => ({
    produtos: [],
    produto: {},
    produtosRelacionados: [],
  }),
  getters: {
    getProdutos(state) {
      return state.produtos
    },
    getProduto(state) {
      return state.produto
    },
    getProdutosRelacionados(state) {
      return state.produtosRelacionados
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
    },
    async fetchProdutosRelacionados() {
      await axios
        .get('/produtos-relacionados')
        .then((response) => {
          this.produtosRelacionados = response.data
          this.produtosRelacionados.map((produto) => {
            produto.valor = formataValor(produto.valor)
          })
          console.log(response);
        })
        .catch((error) => {
          alert(error)
        })
    }
  },
  persist: true
})
