<template>
  <div class="banner">
    <BannersCarousel />
  </div>

  <section class="sobre">
    <div class="card">
      <h1 class="h1-section text-center">Sobre nós</h1>
      <div class="row ordem">
        <div class="col-12 col-md-4 col-imagem">
          <img src="../assets/SensatoLogo.png" alt="Logo" class="sobre-image" />
        </div>
        <div class="col-12 col-md-8 text-end">
          <br />
          <br />
          <p class="text-start text text-break">
            Na Sensato's Store, nossa paixão é criar peças de macramê únicas e encantadoras. Somos
            uma loja especializada em acessórios únicos e delicados, como anéis, pulseiras e
            colares, todos meticulosamente feitos à mão com amor e dedicação.
            <br />
            Aqui na Sensato's Store, nossa missão é mais do que apenas vender acessórios. Queremos
            inspirar, alegrar e fazer parte da sua jornada de moda. Cada peça que criamos carrega um
            pedacinho da nossa paixão e dedicação, e esperamos que isso se reflita em cada momento
            que você usar nossos produtos.
          </p>
          <p class="text">Com carinho, ChatGpt!</p>
        </div>
      </div>
    </div>
  </section>

  <section class="produtos">
    <h4>Alguns de Nossos Produtos</h4>
    <br />
    <div class="row">
      <div class="col col-12 col-md-4" v-for="(produto, index) in produtos" :key="index">
        <ProdutosCard :data="produto" />
      </div>
    </div>
  </section>
</template>

<script setup>
import BannersCarousel from '../components/carousel/BannersCarousel.vue'
import { computed, onMounted } from 'vue'
import { useProdutoStore } from '../stores/produto'
import ProdutosCard from '../components/card/ProdutosCard.vue'

const store = useProdutoStore()

const produtos = computed(() => {
  return store.getProdutosRelacionados
})

onMounted(() => {
  store.fetchProdutosRelacionados()
})
</script>

<style scoped>
.banner {
  size: 500px !important;
}
.sobre {
  padding-bottom: 5rem;
  padding-top: 5rem;
}

.h1-section {
  padding-bottom: 20px;
  padding-top: 20px;
}

.card {
  --bs-card-border-color: none;
}

.text {
  margin-right: 2rem;
}

.sobre-image {
  width: 400;
  margin: 0;
  margin-left: 2rem;
}

.produtos .col {
  margin-bottom: 1.1rem;
}

@media screen and (max-width: 768px) {
  .text {
    padding-top: 0;
    padding-left: 25px;
  }
}
</style>
