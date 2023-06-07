<template>
  <div class="card h-100">
    <div class="card-title valor">
      <h2>{{ valorFormatado }}</h2>
      <div class="fs-6 fw-light">em até 6x sem juros no <strong>cartão de crédito</strong></div>
    </div>
    <div class="space"></div>
    <div class="frete-session">
      <FreteForm :data="valor" />
    </div>
    <div class="space"></div>
    <div class="addCarrinho">
      <button class="btn btn-success block" type="submit" @click="addCarrinho">
        <CartAdd /> Comprar
      </button>
    </div>
  </div>
</template>

<script setup>
import FreteForm from '../FreteForm.vue'
import CartAdd from '../icons/CartAdd.vue'
import { useCarrinhoStore } from '../../stores/carrinho'

const props = defineProps({
  valor: Number,
  valorFormatado: String,
  produto: Object
})

const addCarrinho = () => {
  useCarrinhoStore().addItem(props.produto)
}
</script>

<style scoped>
.card {
  background-color: #ffffffff;
  border: none;
  display: flex;
  flex-direction: column;
  padding: 0px 30px;
}
.card-title {
  padding: 30px 0px;
}
.frete-session {
  padding: 20px 0px 30px;
  height: 12rem;
}
.space {
  background-color: rgba(0, 0, 0, 0.44);
  width: 100%;
  height: 1px;
}
.btn-success {
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
  padding: 12px;
  background-color: #40cd28;
  border: 0;
}
</style>
