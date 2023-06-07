<template>
  <a :href="'/produtos/' + id" class="link">
    <div class="card shadowh-100 h-100">
      <div class="header-img h-100">
        <img
          :src="'http://localhost/admin/fotos/' + imagem + 'p.jpg'"
          :alt="produto"
          class="card-img w-100"
        />
      </div>
      <div class="card-body">
        <h5 class="card-title text-break">{{ produto }}</h5>
        <p class="card-text text-center">{{ valor }}</p>
      </div>
    </div>
  </a>
</template>

<script setup>

const props = defineProps({
  data: Object
})

const { id, produto, valor, imagem } = props.data
</script>

<style scoped>
.link {
  text-decoration: none;
}
.card {
  border: 0;  
  transition: 0.5s;
  align-items: center;
}

.card:hover {
  transform: scale(1.02);
}

.card-img {
  border-radius: 10px 10px;
  border: none !important;
  width: 50%;
}
.card-text {
  color: #ef5fa5;
}
.header-img {
  width: auto;
}
</style>
