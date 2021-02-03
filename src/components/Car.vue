<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      width="600px"
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          small
          class="mx-2"
          fab
          dark
          color="gray"
        >
          <v-icon medium>
            mdi-cart
          </v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Carrito</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>

        <section>
          <card-list />
        </section>
        <v-row>
          <v-col class="d-flex justify-end">
            <h4>Total {{ formatPrice(total) }}</h4>
          </v-col>
        </v-row>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="dark darken-1" text @click="dialog = false">
            Seguir comprando
          </v-btn>
          <v-btn color="green darken-1" text @click="dialog = false">
            Proceder al pago
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import CardList from './CardList.vue'
import { mapState, mapActions } from 'vuex'
import { formatPrice } from '../../utils/functions'

export default {
  components: { CardList },
  data () {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false
    }
  },
  computed: {
    ...mapState(['total'])
  },
  methods: {
    ...mapActions(['getTotal']),
    formatPrice
  },
  created () {
    this.getTotal()
  }
}
</script>

<style scoped>
section {
  max-height: 60vh;
  overflow-x: hidden;
  overflow-y: auto;
}
h4 {
  padding: 20px;
}
</style>
