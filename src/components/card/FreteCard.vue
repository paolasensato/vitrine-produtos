<template>
  <div class="card">
    <FreteForm :data="data"/>
  </div>
</template>

<script setup>
import FreteForm from '../FreteForm.vue';

const props = defineProps({
  data: Number
});
</script>

<style scoped>
.card {
  background-color: #ffffffff;
  border: none;
}
</style>
