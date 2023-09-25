<template>
  <div class="col">
    <div class="card">
      <img
        :src="article.img"
        :alt="article.title"
        style="height: 200px;"
      >
      <div class="card-body">
        <h5 class="card-title">
          {{ article.title }}
        </h5>
        <p class="card-text">
          {{ article.content.substring(0, 150) + "..." }}
          <NuxtLink :to="'app/detail/' + article.id">
            Selengkapnya
          </NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>
 
 <script>
    export default {
       props: {
          article: {
             type: Object,
             default: () => ({
                title: '',
                content: '',
                img: '',
             })
          },
       },
       methods: {
       }
    }
 </script>