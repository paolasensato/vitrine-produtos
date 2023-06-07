<template>
  <div class="card h-100">
    <div class="card-title valor">
      <div class="row">
        <div class="col-6 col-md-12">
          <span class="text-decoration-line-through valor-original">{{ valorFormatado }}</span>
          <span class="badge bg-success"><ArrowDownIcon />5%</span>
        </div>
      </div>
      <h3>{{ desconto(valor) }}</h3>
      <span class="pix fw-light">Com pix</span>
    </div>

    <select class="form-select">
      <option selected>até 6x sem juros no cartão</option>
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
import ArrowDownIcon from '../icons/ArrowDown.vue'

const props = defineProps({
  valor: Number,
  valorFormatado: String,
  produto: Object
})

const parcelas = ref({})

const desconto = (valor) => {
  return formataValor(valor - valor * 0.05)
}

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
  padding-top: 30px;
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
  background-color: #e3a1b0;
  border: 0;
}
.btn-primary:hover,
.bg-success {
  background-color: #40cd28 !important;
}
.valor-original {
  color: #c2c2c2;
  margin: 0;
  padding: 0;
  font-size: small;
}
.badge {
  margin-left: 10px;
  font-size: 10px;
}
.pix {
  font-size: small;
  margin: 0;
  padding: 0;
}
</style>
