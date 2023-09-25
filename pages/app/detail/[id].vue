<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Navigasi />
  <div class="container mt-3">
    <div
      v-for="article in articles"
      :key="article.id"
    >
      <div
        v-if="article.id == paramId"
        class="item-task d-flex align-items-start pt-3 pb-4"
      >
        <div class="card mb-3">
          <img
            :src="article.img"
            style="height: 300px;"
            class="card-img-top"
            :alt="article.title"
          >
          <div class="card-body">
            <h5 class="card-title">
              {{ article.title }}
            </h5>
            <p class="card-text">
              {{ article.content }}
            </p>
            <button
              class="btn btn-primary"
              @click="$router.go(-1)"
            >
              Kembali
            </button>
            <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigasi from '../../../components/Navigasi.vue';
  export default {
    components: {
      Navigasi
    },
    data() {
      return {
        articles: [
        {
          id: 1,
          title: "Judul Artikel 1",
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat dolor explicabo sint quos exercitationem fugiat reiciendis assumenda. Ad quia veritatis, dolor odit, voluptas numquam modi porro eius reprehenderit ullam tenetur?",
          img: 'https://images.unsplash.com/photo-1649282806617-c51bb282899c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
        },
        {
          id: 2,
          title: "Judul Artikel 2",
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat dolor explicabo sint quos exercitationem fugiat reiciendis assumenda. Ad quia veritatis, dolor odit, voluptas numquam modi porro eius reprehenderit ullam tenetur?",
          img: 'https://images.unsplash.com/photo-1635732646038-0a1a2fe3f2d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
        },
        {
          id: 3,
          title: "Judul Artikel 3",
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat dolor explicabo sint quos exercitationem fugiat reiciendis assumenda. Ad quia veritatis, dolor odit, voluptas numquam modi porro eius reprehenderit ullam tenetur?",
          img: 'https://images.unsplash.com/photo-1640006807976-a6127e9d6fa0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
        },
      ],
       paramId: Number(this.$route.params.id)
      }
    }
  }
</script>