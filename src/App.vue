<template>
  <v-app>
    <Header />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'
import { mapActions } from 'vuex'

export default {
  name: 'App',

  components: {
    Header
  },

  methods: {
    ...mapActions(['cargarBD'])
  },
  created () {
    this.cargarBD()
  }
}
</script>
<style>
#app {
  color: rgb(31, 31, 31);
}
.allCenter {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
