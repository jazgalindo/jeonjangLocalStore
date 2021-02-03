<template>
  <v-card
    @click="openView"
    :loading="loading"
    class="mx-2 my-auto"
    max-width="240"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img height="240" :src="product.image"></v-img>
    <v-card-text class="pt-6" style="position:relative">
      <product-modal :product="product" />
    </v-card-text>
    <v-card-title
      class=" d-inline-block text-truncate"
      style="max-width: 230px;"
      >{{ product.name }}</v-card-title
    >

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="product.qualification"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-2">
          {{ product.qualification }} ({{ product.reviews }})
        </div>
      </v-row>

      <div class="my-4 subtitle-1">{{ formatPrice(product.price) }}</div>

      <div>
        {{ product.description }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { formatPrice } from '../../utils/functions'
import router from '../router'
import ProductModal from './ProductModal.vue'

export default {
  data () {
    return {
      showModal: false,
      loading: false,
      selection: 1
    }
  },
  components: { ProductModal },
  props: {
    product: Object,
    id: Number
  },
  computed: {},
  methods: {
    formatPrice,
    openView () {
      const productId = this.id
      router.push({ name: 'ProductView', params: { id: productId } })
    },
    reserve () {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    }
  }
}
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>
