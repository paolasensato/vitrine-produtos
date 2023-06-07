<template>
  <div class="row h-100">
    <h3 class="title">
      <strong>{{ data.produto }}</strong>
    </h3>
    <div class="col-12 col-md-5">
      <img
        :src="'http://localhost/admin/fotos/' + data.imagem + 'p.jpg'"
        class="w-100 image"
        :alt="data.produto"
      />
    </div>
    <div class="col-12 col-md-7 py-5">
      <p v-html="data.descricao"></p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: Object
})
</script>

<style scoped>
.row {
  background-color: #ffffffff;
}

.title {
  padding-top: 10px;
  color: #444444;
}

.image {
  margin-top: 5rem;
}
@media screen and (max-width: 768px) {
  .row {
    margin: auto;
    height: 100%;
    width: 100%;
  }
}
</style>
