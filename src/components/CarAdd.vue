<template>
  <v-card class="px-2" width="350">
    <v-card-title text-center>
      <h3 text-center>{{ formatPrice(product.price) }}</h3>
    </v-card-title>
    <p :style="colorAvailable">
      {{ product.available ? 'Disponible' : 'Agotado' }}
    </p>
    <v-form>
      <v-select
        v-model="carItem.amount"
        :items="product.amount"
        :rules="[v => !!v || 'Campo requerido']"
        label="Cantidad"
        required
      ></v-select>
      <v-select
        v-model="carItem.size"
        :items="product.sizes"
        :rules="[v => !!v || 'Campo requerido']"
        label="Talla"
        required
      ></v-select>
      <v-select
        v-model="carItem.color"
        :items="product.colors"
        :rules="[v => !!v || 'Campo requerido']"
        label="Color"
        required
      ></v-select>
      <div class="d-grid gap-2 col-10 mx-auto">
        <button @click="addProductToCar" class="btn btn-warning " type="button">
          <div class="row">
            <div class="col-2 allCenter">
              <v-icon color="black">mdi-cart</v-icon>
            </div>
            <div class="col-10 allCenter">
              Agregar al carrito
            </div>
          </div>
        </button>
        <button class="btn btn-dark" type="button">
          <div class="row">
            <div class="col-2 allCenter">
              <v-icon color="white">mdi-reply</v-icon>
            </div>
            <div class="col-10 allCenter" style="color:white">
              Compar ahora
            </div>
          </div>
        </button>
      </div>
    </v-form>
  </v-card>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { formatPrice } from '../../utils/functions'
const shortid = require('shortid')

export default {
  computed: {
    ...mapState(['carItem']),
    colorAvailable () {
      return this.product.available ? 'color:green' : 'color:#8B0000'
    }
  },
  methods: {
    formatPrice,
    ...mapActions(['beforeAddProduct', 'addProductCar', 'getTotal']),
    addProductToCar () {
      this.carItem.id = shortid.generate()
      this.addProductCar(this.carItem)
      this.getTotal()
      this.closeModal()
    }
  },
  props: {
    product: Object,
    closeModal: Function
  },
  created () {
    this.beforeAddProduct(this.product)
  }
}
</script>

<style scoped>
h3 {
  color: #c01212;
  font-weight: bolder;
}
p {
  font-size: x-large;
}

button {
  font-weight: bolder;
}
</style>
