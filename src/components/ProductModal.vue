<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          absolute
          v-bind="attrs"
          v-on="on"
          color="black"
          class="white--text"
          fab
          small
          right
          top
        >
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline"> {{ product.name }} </v-card-title>
        <v-container>
          <v-row>
            <v-col sm="12" md="5" align="center">
              <v-img :src="product.image" max-width="220"> </v-img>
              <v-rating
                :value="product.qualification"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>
            </v-col>
            <v-col sm="12" md="7">
              <car-add :product="product" :closeModal="closeModal" />
            </v-col>
          </v-row>
        </v-container>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey darken-1" text @click="dialog = false">
            Cancelar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import CarAdd from './CarAdd.vue'
export default {
  components: { CarAdd },
  data () {
    return {
      dialog: false
    }
  },
  props: {
    product: Object
  },
  methods: {
    closeModal () {
      this.dialog = false
    }
  }
}
</script>

<style></style>
