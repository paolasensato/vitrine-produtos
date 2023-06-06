<template>
  <form @submit.prevent="onSubmit">
    <legend>Calcular Frete</legend>
    <div class="mb-3">
      <label for="cep" class="form-label">Cep</label>
      <input
        v-model="form.cep_destino"
        type="text"
        id="cep"
        class="form-control"
        placeholder="Digite seu cep"
      />
    </div>
    <button type="submit" class="btn btn-primary">Buscar</button>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import axios from '../api/axios.config'

const props = defineProps({
  data: Number
})

const form = reactive({
  cep_destino: ''
})

let fretePac = ref({})
let mensagemErro = ref({})

const onSubmit = async () => {
  const { cep_destino } = form
  const tipo_do_frete = 41106 // Sedex: 40010   |  Pac: 41106
  const peso = 2
  const valor = props.data
  const altura = 6
  const largura = 20
  const comprimento = 20

  const { data } = await axios.get(
    `/calcula-frete/${cep_destino}/${peso}/${valor}/${tipo_do_frete}/${altura}/${largura}/${comprimento}`
  )

  if (data.cServico) fretePac = data.cServico
  else if (data.erro) mensagemErro = data.erro
}
</script>
