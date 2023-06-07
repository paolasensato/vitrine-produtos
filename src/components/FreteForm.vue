<template>
  <form @submit.prevent="onSubmit">
    <legend>Calcular Frete</legend>
    <div class="input-group mb-3">
      <input
        id="cep"
        type="text"
        class="form-control"
        placeholder="Digite seu cep"
        v-model="form.cep_destino"
        aria-describedby="buscar"
        required
      />
      <button type="submit" class="btn btn-primary" id="buscar">Buscar</button>
    </div>
  </form>
  <p v-show="mostraValorPrazo == true">
    Valor: <strong>R${{ fretePac.Valor }}</strong>
    <br />
    Receba em até <strong>{{ fretePac.PrazoEntrega }} dias úteis</strong>
  </p>
  <p v-show="mensagemErro == true">
    <div class="alert alert-warning d-flex align-items-center" role="alert">
      <InfoIcon />
      <div class="text-alert">
        Ops..! Parece que houve um erro com o cep digitado. Que tal tentar outro CEP?
      </div>
    </div>
  </p>
</template>

<script setup>
import { reactive, ref } from 'vue'
import axios from '../api/axios.config'
import InfoIcon from './icons/Info.vue'

const props = defineProps({
  data: Number
})

const form = reactive({
  cep_destino: ''
})

let fretePac = ref('')
let mostraValorPrazo = ref(false)
let mensagemErro = ref(false)

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

  if (data.cServico.Valor == '0,00') {
    mostraValorPrazo = false
    return mensagemErro = true
  }
  fretePac.value = data.cServico
  mensagemErro = false
  mostraValorPrazo = true
}
</script>

<style scoped>
.btn {
  background-color: #e3a1b0;
  border: 0;
}

.text-alert {
  margin-left: 5px;
}
</style>
