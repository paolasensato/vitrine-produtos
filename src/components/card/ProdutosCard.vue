<template>
  <RouterLink :to="'/produtos/' + id" class="link">
    <div class="card">
      <img
        :src="'http://localhost/admin/fotos/' + imagem + 'p.jpg'"
        :alt="produto"
        class="card-img"
      />
      <div class="card-body text-center">
        <h5 class="card-title text-break">{{ produto }}</h5>
        <p class="card-text">{{ valor }}</p>
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
  data: Object
})

const { id, produto, valor, imagem } = props.data
</script>

<style>
.link {
  text-decoration: none;
}
.card {
  height: 100%;
}
.card-img {
  border-radius: 10px 10px;
}
</style>
