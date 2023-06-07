<template>
  <div class="card h-100">
    <div class="card-title valor">
      <h2>{{ valorFormatado }}</h2>
      <div class="fs-6 fw-light">em até 6x sem juros no <strong>cartão de crédito</strong></div>
    </div>

    <select class="form-select">
      <option selected>Selecione um parcelamento</option>
      <option v-for="(valor, index) in parcelas" :key="index">{{ index }}x de {{ valor }}</option>
    </select>

    <br />
    <div class="space"></div>

    <div class="frete-session">
      <FreteForm :data="valor" />
    </div>
    <div class="space"></div>
    <div class="addCarrinho">
      <button class="btn btn-primary block" type="submit" @click="addCarrinho">
        <CartAdd /> Comprar
      </button>
    </div>
  </div>
</template>

<script setup>
import FreteForm from '../FreteForm.vue'
import CartAdd from '../icons/CartAdd.vue'
import { useCarrinhoStore } from '../../stores/carrinho'
import { ref, onMounted, watch, defineProps } from 'vue'
import formataValor from '../../helpers/formataValor.js'

const props = defineProps({
  valor: {
    type: Number,
    required: true
  },
  valorFormatado: String,
  produto: Object
})

const parcelas = ref({})

const calculaParcelas = async (valor) => {
  const parcelas = {}

  for (let i = 1; i <= 6; i++) {
    const valorParcela = await formataValor(valor / i)
    parcelas[i] = valorParcela
  }

  return parcelas
}

const calcularParcelas = async (novoValor) => {
  parcelas.value = await calculaParcelas(novoValor)
}

onMounted(async () => {
  await calcularParcelas(props.valor)
})

watch(
  () => props.valor,
  async (novoValor) => {
    await calcularParcelas(novoValor)
  }
)

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
.btn-primary {
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
  padding: 12px;
  background-color: #404040;
  border: 0;
}
.btn-primary:hover {
  background-color: #40cd28;
}
</style>
