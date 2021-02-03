<template>
  <v-carousel cycle>
    <v-carousel-item v-for="index in 5" :key="index" :src="getImgUrl(index)">
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    getImgUrl (img) {
      var images = require.context(
        '../assets/PublicityCarrousel/',
        false,
        /\.png$/
      )
      return images('./' + img + '.png')
    }
  }
}
</script>

<style></style>
