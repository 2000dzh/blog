<template>
  <div class="home-content">
    <div class="content-area">
      <div class="navigation-bar-hea">
        <span class="recently-released">📖最近发布</span>
        <LinkBtn />
      </div>
      <div class="recently-posts">
        <div class="post-item" v-for="post in recentlyPosts" :key="post.date">
          <ArticleCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LinkBtn from '../components/LinkBtn.vue'
import ArticleCard from '../components/ArticleCard.vue'


const recentlyPosts = ref(Array.from({ length: 8 }, function (item, index) {
  return {
    date: index
  }
}))

</script>

<style scoped lang="scss">
.home-content {
  width: 100%;

  .content-area {
    max-width: 1400px;
    margin: auto;

    .navigation-bar-hea {
      display: flex;
      justify-content: space-between;
      padding: 20px 40px;

      .recently-released {
        font-size: 20px;
        font-weight: 900;
      }
    }

    .recently-posts {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      height: 340px;
      overflow: hidden;
      padding: 20px;
    }
  }
}
</style>
