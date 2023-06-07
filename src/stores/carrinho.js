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
      this.carrinho.splice(produto,1);
    },
  },
  persist: true,
});
