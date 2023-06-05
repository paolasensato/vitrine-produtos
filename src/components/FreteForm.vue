<template>
  <form @submit.prevent>
    <legend>Calcular Frete</legend>
    <div class="mb-3">
      <label for="cep" class="form-label">Cep</label>
      <input
        v-model="form.cep"
        type="text"
        id="cep"
        class="form-control"
        placeholder="Digite seu cep"
      />
    </div>
    <button type="submit" @click="onSubmit()" class="btn btn-primary">Buscar</button>
  </form>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  cep: ''
})

const onSubmit = async () => {
  console.log('Submit')
}
</script>
