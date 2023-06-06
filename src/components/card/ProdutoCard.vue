<template>
  <div class="row h-100">
    <div class="col-12 col-md-5">
      <img
        :src="'http://localhost/admin/fotos/' + data.imagem + 'p.jpg'"
        class="w-100"
        :alt="data.produto"
      />
    </div>
    <div class="col-12 col-md-7 text-center py-5">
      <h1 class="title">
        <strong>{{ data.produto }}</strong>
      </h1>
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
  color: #444444;
}
@media screen and (max-width: 768px) {
  .row {
    margin: auto;
    height: 100%;
    width: 100%;
  }
}
</style>
