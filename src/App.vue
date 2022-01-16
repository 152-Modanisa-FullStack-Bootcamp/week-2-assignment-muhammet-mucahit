<template>
  <div id="app">
    <div class="navbar">
      <router-link :to="{name: 'HomePage'}" class="navbar-link">Home</router-link>
      <router-link :to="{name: 'FavoritesPage', params: {userid: 'bootcamp'}}" class="navbar-link">
        Favorites
      </router-link>
    </div>
    <div class="body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      favorites: []
    }
  },
  methods: {
    isFavorite(videoID) {
      return this.favorites.includes(videoID)
    },
    toggleFavorite(videoID) {
      if (this.isFavorite(videoID)) {
        this.favorites = this.favorites.filter(favorite => favorite !== videoID)
        console.log(`The video ${videoID} removed from favorites`);
      } else {
        this.favorites.push(videoID);
        console.log(`The video ${videoID} added to favorites`);
      }
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.navbar {
  display: flex;
  justify-content: space-between;
  background-color: #2c3e50;
  padding: 30px;
}

.body {
  margin-top: 30px;
}

.navbar-link {
  color: white;
}

</style>
