<template>
  <div class="row">
    <p>
      <strong>{{ data.produto }}</strong>
    </p>
    <div class="col-12 col-md-3">
      <img
        :src="'http://localhost/admin/fotos/' + data.imagem + 'p.jpg'"
        class="w-100"
        :alt="data.produto"
      />
    </div>
    <div class="col-12 col-md-9 text-center py-5">
      <p>{{ data.valor }}</p>
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
  margin-right: 50px;
}

@media screen and (max-width: 768px) {
  .row {
    margin: auto;
    height: 100;
    width: 100;
  }
}
</style>
