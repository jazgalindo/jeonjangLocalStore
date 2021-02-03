<template>
  <div class="home">
    <publicity-carousel />
    <v-container>
      <h1>Top Products</h1>
      <product-list :list="products" />
    </v-container>
  </div>
</template>

<script>
import PublicityCarousel from '../components/PublicityCarousel.vue'
import { mapState } from 'vuex'
import ProductList from '../components/ProductList.vue'

export default {
  name: 'Home',
  computed: {
    ...mapState(['products'])
  },
  components: { PublicityCarousel, ProductList }
}
</script>
