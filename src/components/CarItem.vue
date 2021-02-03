<template>
  <div class="card border-0">
    <div class="row g-0 border-bottom">
      <div class="col-md-3 allCenter">
        <img :src="product.image" :alt="product.name" />
      </div>
      <div class="col-md-9">
        <div class="card-body">
          <div class="row">
            <div class="col allCenter">
              <h5 class="card-title">{{ product.name }}</h5>
            </div>
            <div class="col-auto allCenter">
              <button
                @click="deleteElement"
                class="btn btn-light rounded-circle allCenter"
              >
                <v-icon>mdi-delete</v-icon>
              </button>
            </div>
          </div>

          <div class="row">
            <div class="col-8">
              <p class="card-text">Cantidad: {{ amount }}</p>
              <p class="card-text">Talla: {{ size }}</p>
              <p class="card-text">Color: {{ color }}</p>
            </div>
            <div class="col-4 allCenter">
              <h5>{{ formatPrice(product.price * amount) }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { formatPrice } from '../../utils/functions'
export default {
  props: {
    idProduct: Number,
    amount: Number,
    size: String,
    color: String,
    id: String
  },
  data () {
    return {
      product: {
        id: 0,
        name: '',
        brand: '',
        colors: [],
        sizes: [],
        price: 0,
        category: '',
        description: '',
        qualification: 0,
        reviews: 0,
        available: true,
        amount: 1
      }
    }
  },
  methods: {
    ...mapActions(['getObjectProduct', 'deleteProductCar', 'getTotal']),
    formatPrice,
    deleteElement () {
      console.log('Borrando elemento', this.id)
      this.deleteProductCar(this.id)
      this.getTotal()
    }
  },

  created () {
    this.getObjectProduct(this.idProduct)
      .then(response => {
        this.product = response
      })
      .catch(err => console.error(err))
  }
}
</script>
<style scoped>
img {
  height: 100px;
}
p {
  padding: 0px;
  margin: 0px;
}
</style>
