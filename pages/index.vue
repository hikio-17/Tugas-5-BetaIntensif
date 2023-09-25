<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Navigasi />
  <div class="content">
    <section class="hero py-4">
      <div class="text-center">
        <h1 class="title mb-4">
          Welcome to NewsLetter
        </h1>
        <NuxtLink
          to="/app"
          class="btn btn-primary"
        >
          Masuk
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script>
  import Navigasi from '../components/Navigasi.vue'
  export default{
    components: {
      Navigasi
    }
  }
</script>