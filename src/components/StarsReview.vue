<template>
  <div class="container">
    <div class="row allCenter">
      <div class="col-auto m-1 p-0 allCenter" v-for="index in 5" :key="index">
        <i class="bi bi-star-fill fs-5" :style="starColor(index)"></i>
      </div>
    </div>
    <div class="row">
      <div class="col allCenter m-1 p-0">
        <p class="p-0 m-0" id="reviews">
          {{ reviews }} {{ reviews === 1 ? 'valoración' : 'valoraciones' }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    qualification: {
      type: Number,
      default: 4
    },
    reviews: {
      type: Number,
      default: 0
    }
  },
  methods: {
    starColor (index) {
      return index <= this.qualification
        ? 'color:rgb(243,224,78)'
        : 'color:rgb(147,149,151'
    }
  },
  computed: {}
}
</script>
<style>
#reviews {
  color: rgb(105, 105, 105);
}
</style>
