<template>
  <nav class="navbar navbar-expand-lg bg-light fixed-top w-100">
    <div class="container-fluid">
      <a class="navbar-brand logo" href="/">
        <img
          src="../assets/panda.png"
          alt="Logo"
          width="30"
          height="24"
          class="d-inline-block align-text-top"
        />Sensato
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
                <li>
                  <a class="dropdown-item" :href="'/produtos/categoria/' + categoria.id">{{
                    categoria.categoria
                  }}</a>
                </li>
              </div>
            </ul>
          </li>
          <li class="carrinho">
            <button
              class="btn carrinho-icon"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <CartIcon />
              Carrinho
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">
        Carrinho de Compras
        <CartIcon />
      </h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <ul class="list-group list-group-flush" v-for="(item, index) in carrinho" :key="index">
        <li class="list-group-item list-item">
          <div class="row w-100">
            <div class="col col-12 col-md-4">
              <img
                :src="'http://localhost/admin/fotos/' + item.imagem + 'p.jpg'"
                class="image"
                :alt="item.produto"
              />
            </div>
            <div class="col col-12 col-md-8">
              <h5 class="mb-1">{{ item.produto }}</h5>
              <small>{{ item.valorFormatado }}</small>
              <button type="button" class="btn btn-link" @click="removeCarrinho(index)">Remover</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCategoriaStore } from '../stores/categoria'
import { useCarrinhoStore } from '../stores/carrinho'
import CartIcon from './icons/Cart.vue'

const storeCategorias = useCategoriaStore()
const storeCarrinho = useCarrinhoStore()

const categorias = computed(() => {
  return storeCategorias.getCategorias
})

const carrinho = computed(() => {
  return storeCarrinho.getCarrinho
})

const removeCarrinho = (index) => {
  useCarrinhoStore().removeItem(index)
}
</script>

<style scoped>
.carrinho-icon {
  background-color: #e3a1b0;
  color: #FFFFFFFF;
}
.logo {
  font-family: 'Merienda', cursive;
}
.carrinho {
  flex-grow: inherit;
}
.image {
  width: 50px;
}
.list-item {
  border-bottom: .5px solid;
  border-color: #66666666;
  padding-bottom: 10px;
  margin-bottom: 10px;
}
.navbar {
  background-color: #ffd9e3 !important;
  padding: 20px;
  top: 0;
  z-index: 10;
}

.navbar-collapse {
    flex-grow: 0;
}

@media screen and (max-width: 768px) {
  .image {
    width: 50%;
  }
}
</style>
