<template>
  <div id="carousel-home" class="carousel slide d-block" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="../../assets/carousel/banner1.png"
          class="d-block w-100 img-fluid"
          alt="..."
          data-bs-interval="5"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../assets/carousel/banner2.png"
          class="d-block w-100 img-fluid"
          alt="..."
          data-bs-interval="5"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../assets/carousel/banner3.png"
          class="d-block w-100 img-fluid"
          alt="..."
          data-bs-interval="5"
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carousel-home"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Anterior</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carousel-home"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Próximo</span>
    </button>
  </div>
</template>

<style scoped>
.carousel {
  width: 75%;
  margin-left: 12%;
}
</style>