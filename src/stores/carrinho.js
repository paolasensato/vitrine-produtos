import { defineStore } from 'pinia';

export const useCarrinhoStore = defineStore({
  id: 'carrinhos',
  state: () => ({
    carrinho: [],
  }),
  getters: {
    getCarrinho(state) {
      return state.carrinho;
    },
  },
  actions: {
    addItem(produto) {
      this.carrinho.push(produto);
    },
    removeItem(produto) {
      console.log(this.carrinho);
      this.carrinho.splice(produto,1);
      console.log(this.carrinho);
    },
  },
  persist: true,
});
