<template>
  <div class="favorites-page">
    <VideoBox v-for="favoriteVideo in favorites" :video="favoriteVideo" :key="favoriteVideo.id"/>
  </div>
</template>

<script>
import VideoBox from "../components/VideoBox";

export default {
  name: "FavoritesPage",
  components: {VideoBox},
  props: {
    favorites: []
  },
}
</script>
