<template>
  <div class="card h-100">
    <div class="valor">
      <h3>{{ valorFormatado }}</h3>
    </div>
    <div class="frete-session">
      <FreteForm :data="valor"/>
    </div>
  </div>
</template>

<script setup>
import FreteForm from '../FreteForm.vue';

const props = defineProps({
  valor: Number,
  valorFormatado: String
});
</script>

<style scoped>
.card {
  background-color: #ffffffff;
  border: none;
}
</style>
