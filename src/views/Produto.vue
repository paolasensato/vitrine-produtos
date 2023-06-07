<template>
  <section class="produto">
    <div class="row">
      <div class="col col-12 col-md-8">
        <ProdutoCard :data="produto" />
      </div>
      <div class="col col-12 col-md-4">
        <FreteCard
          :produto="produto"
          :valor="produto.valor"
          :valorFormatado="produto.valorFormatado"
        />
      </div>
    </div>
  </section>

  <section class="produtos">
    <h1><strong>Produtos</strong></h1>
    <div class="row">
      <div class="col col-12 col-md-4" v-for="(produto, index) in produtos" :key="index">
        <ProdutosCard :data="produto" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useProdutoStore } from '../stores/produto'
import { useRoute } from 'vue-router'
import ProdutoCard from '../components/card/ProdutoCard.vue'
import FreteCard from '../components/card/FreteCard.vue'
import ProdutosCard from '../components/card/ProdutosCard.vue'

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
.produtos .col {
  margin-bottom: 1.2rem;
}
.produtos {
  margin-top: 5rem;
}

@media screen and (max-width: 768px) {
  .col {
    margin-top: 10%;
  }
}
</style>
