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
  </div>
</template>

<script setup>
import FreteForm from '../FreteForm.vue'

const props = defineProps({
  valor: Number,
  valorFormatado: String
})
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
  padding: 20px 0px 30px
}
.space {
  background-color: rgba(0, 0, 0, 0.44);
  width: 100%;
  height: 1px;
} 
</style>
