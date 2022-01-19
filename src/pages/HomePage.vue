<template>
  <div class="homepage">
    <VideoBox v-for="video in videos" :key="video.id" :video="video"/>
  </div>
</template>

<script>
import VideoBox from "../components/VideoBox";
import API from "../api";

export default {
  name: "Home",
  components: {VideoBox},
  data() {
    return {
      videos: [],
    }
  },
  async mounted() {
    this.videos = await API.getVideoList();
  }
}
</script>

<style scoped>
div.homepage {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}
</style>
