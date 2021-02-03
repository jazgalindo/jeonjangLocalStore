<template>
  <v-row>
    <v-col
      align="center"
      sm-12
      md-4
      lg-3
      xl-2
      v-for="item in list"
      :key="item.id"
    >
      <ProductItem :id="item.id" :product="item" />
    </v-col>
  </v-row>
</template>

<script>
import ProductItem from './ProductItem.vue'
export default {
  components: { ProductItem },
  props: {
    list: {
      type: [],
      default: []
    }
  }
}
</script>

<style></style>
