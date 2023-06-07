<template>
  <section class="produto">
    <div class="row">
      <div class="col col-12 col-md-8">
        <ProdutoCard :data="produto" />
      </div>
      <div class="col col-12 col-md-4">
        <FreteCard :produto="produto" :valor="produto.valor" :valorFormatado="produto.valorFormatado" />
      </div>
    </div>
  </section>

  <section class="produtos-relacionados">
    <h5>Compre Também</h5>
    <ProdutosCarousel :produtos="produtos"/>
  </section>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useProdutoStore } from '../stores/produto'
import { useRoute } from 'vue-router'
import ProdutoCard from '../components/card/ProdutoCard.vue'
import FreteCard from '../components/card/FreteCard.vue'
import ProdutosCarousel from '../components/carousel/ProdutosCarousel.vue'

const route = useRoute()
const store = useProdutoStore()

const produto = computed(() => {
  return store.getProduto
})

const produtos = computed(() => {
  return store.getProdutos
})

onMounted(() => {
  store.fetchProduto(route.params.id)
})
</script>

<style scoped>
.produto {
  margin-top: 50px;
  margin-bottom: 50px;
}

@media screen and (max-width: 768px) {
  .col {
    margin-top: 10%;
  }
}
</style>
