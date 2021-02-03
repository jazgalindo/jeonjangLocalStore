<template>
  <ul class="nav bg-dark d-flex justify-content-center">
    <li class="nav-item" v-for="(category, index) in categories" :key="index">
      {{ category }}
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      categories: [
        'Health & Beauty',
        'DIY',
        'Toys & Games',
        'Electronics',
        'Books',
        'Home & Garden'
      ]
    }
  }
}
</script>

<style scoped>
li {
  color: white;
  font-weight: bolder;
  margin: 10px;
  cursor: pointer;
}
li:hover {
  border-bottom: 1px solid white;
}
ul {
  background-color: black;
}
</style>
