<template>
  <div>
    <v-app-bar app color="white">
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title
        ><v-img
          alt="jeojang Logo"
          class="shrink mr-2"
          contain
          src="../assets/logo.png"
          transition="scale-transition"
          width="200"
      /></v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-badge
        :content="carList.length"
        :value="carList.length"
        color="red"
        overlap
      >
        <car />
      </v-badge>
    </v-app-bar>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Car from './Car.vue'

export default {
  components: { Car },
  computed: {
    ...mapState(['carList'])
  },
  data () {
    return {
      showCarPreview: false
    }
  },
  methods: {
    closeCarPreview () {
      this.showCarPreview = false
    }
  }
}
</script>

<style></style>
