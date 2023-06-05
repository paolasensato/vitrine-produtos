<template>
  <div class="row">
    <div class="col col-12 col-md-8">
      <ProdutoCard :data="produto" />
    </div>
    <div class="col col-12 col-md-4">
      <FreteCard/>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useProdutoStore } from '../stores/produto'
import { useRoute } from 'vue-router'
import ProdutoCard from '../components/card/ProdutoCard.vue'
import FreteCard from '../components/card/FreteCard.vue';

const route = useRoute()
const store = useProdutoStore()

const produto = computed(() => {
  return store.getProduto
})

onMounted(() => {
  store.fetchProduto(route.params.id)
})
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .col {
    margin-top: 10%;
  }
}
</style>
