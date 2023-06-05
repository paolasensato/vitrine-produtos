import { defineStore } from 'pinia'
import axios from '../api/axios.config'
import formataValor from '../helpers/formataValor.js'

export const useCategoriaStore = defineStore('categorias', {
  state: () => ({
    categorias: [],
    produtos: []
  }),
  getters: {
    getCategorias(state) {
      return state.categorias
    },
    getProdutosCategorias(state) {
      return state.produtos
    }
  },
  actions: {
    async fetchCategorias() {
      await axios
        .get('/categorias')
        .then((response) => {
          this.categorias = response.data
        })
        .catch((error) => {
          alert(error)
        })
    },
    async fetchProdutosCategoria(id) {
      await axios
        .get(`/categoria/${id}`)
        .then((response) => {
          this.produtos = response.data
          this.produtos.map((produto) => {
            produto.valor = formataValor(produto.valor)
          })
        })
        .catch((error) => {
          alert(error)
        })
    }
  }
})
