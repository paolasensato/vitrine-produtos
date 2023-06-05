<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand logo" href="/">
        <img src="../assets/panda.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">Sensato
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/produtos">Produtos</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categorias
            </a>
            <ul class="dropdown-menu">
              <div v-for="categoria in categorias" :key="categoria.id">
                <li><a class="dropdown-item" :href="'/produtos/categoria/'+categoria.id">{{categoria.categoria}}</a></li>
              </div>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue';
import { useCategoriaStore } from '../stores/categoria';
import { RouterLink } from 'vue-router'


const store = useCategoriaStore();

const categorias = computed(() => {
  return store.getCategorias;
});
</script>

<style>
.logo {
  font-family: 'Merienda', cursive;
}
</style>