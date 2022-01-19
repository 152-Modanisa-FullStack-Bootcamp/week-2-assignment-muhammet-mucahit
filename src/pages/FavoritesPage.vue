<template>
  <div class="favorites-page">
    <VideoBox v-for="favoriteVideo in favorites" :video="favoriteVideo" :key="favoriteVideo.id"/>
  </div>
</template>

<script>
import VideoBox from "../components/VideoBox";
import API from "../api";

export default {
  name: "FavoritesPage",
  components: {VideoBox},
  data() {
    return {
      videos: []
    }
  },
  computed: {
    favorites() {
      return this.videos.filter(video => video.favorite === true)
    }
  },
  async mounted() {
    this.videos = await API.getVideoList();
  }
}
</script>
