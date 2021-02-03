<template>
  <div class="row">
    <div class="col-12" v-for="car in carList" :key="car.id">
      <car-item
        :id="car.id"
        :idProduct="car.idProduct"
        :amount="car.amount"
        :size="car.size"
        :color="car.color"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CarItem from './CarItem.vue'
export default {
  components: { CarItem },
  computed: {
    ...mapState(['carList'])
  }
}
</script>

<style></style>
