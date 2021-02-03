import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import { getElement } from '../../utils/functions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    total: 0,
    products: [
      {
        id: 0,
        name: 'Conjunto negro falda y sudadera',
        price: 477,
        description: 'Falda beige y blusa color celeste',
        category: 'healty and beauty',
        brand: 'sasha',
        colors: ['blanco', 'azul', 'rosa'],
        sizes: ['lg', 'md'],
        available: true,
        qualification: 4,
        reviews: 5,
        amount: 1,
        image:
          'https://i.pinimg.com/564x/24/1f/e0/241fe0b1c2de17b9e9933cd7ffa332ab.jpg'
      },
      {
        id: 1,
        name: 'Ropa casual de verano',
        price: 1205,
        available: true,
        description: 'Falda beige y blusa color celeste',
        category: 'healty and beauty',
        brand: 'sasha',
        colors: ['blanco', 'azul', 'rosa'],
        sizes: ['lg', 'md'],
        qualification: 4,
        reviews: 5,
        amount: 1,
        image:
          'https://scontent.fcyw4-1.fna.fbcdn.net/v/t1.0-9/71570654_1180786295438297_616118629183782912_n.jpg?_nc_cat=106&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeECqpFPF2s-8ttFCvzQ34GUX49KmSraDC5fj0qZKtoMLmGJADGI1aHREXqlsfb2nBQAY40oULBdyc8VymmqqC1x&_nc_ohc=NeJA6tZ9Rp4AX-YeDj6&_nc_ht=scontent.fcyw4-1.fna&oh=f32da539cc83dc189de61349259a74a9&oe=603A2936'
      },
      {
        id: 2,
        name: 'Ropa coreana temporada primavera - verano',
        price: 4527,
        description: 'Falda beige y blusa color celeste',
        category: 'healty and beauty',
        brand: 'sasha',
        colors: ['blanco', 'azul', 'rosa'],
        sizes: ['lg', 'md', 'sm'],
        available: true,
        qualification: 3,
        reviews: 5,
        amount: 3,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf1jy46E6fDWVumjzfHSRT4o9bOdriRFjdxA&usqp=CAU'
      },
      {
        id: 3,
        name: 'Conjunto juvenil',
        price: 4827,
        description: 'Falda beige y blusa color celeste',
        category: 'healty and beauty',
        brand: 'sasha',
        colors: ['blanco', 'azul', 'rosa'],
        sizes: ['lg', 'md'],
        qualification: 5,
        reviews: 5,
        available: true,
        amount: 1,
        image:
          'https://i.pinimg.com/736x/cb/7a/2b/cb7a2b6dfea5fb904225aac7d88c8c4d.jpg'
      },
      {
        id: 4,
        name: 'Ropa primavera',
        price: 4567,
        description: 'Falda beige y blusa color celeste',
        category: 'healty and beauty',
        brand: 'sasha',
        qualification: 4,
        reviews: 5,
        colors: ['blanco', 'azul', 'rosa'],
        available: true,
        sizes: ['lg', 'md'],
        amount: 1,
        image:
          'https://i.pinimg.com/originals/70/de/9b/70de9bb274ce647f68b6491f61fbf5be.jpg'
      },
      {
        id: 5,
        name: 'Conjunto negro',
        price: 527,
        description: 'Falda beige y blusa color celeste',
        category: 'healty and beauty',
        brand: 'sasha',
        colors: ['blanco', 'azul', 'rosa'],
        qualification: 2,
        reviews: 5,
        available: true,
        amount: 1,
        sizes: ['lg', 'md'],
        image:
          'https://images-na.ssl-images-amazon.com/images/I/51gKyd1BCHL._AC_SX466_.jpg'
      },
      {
        id: 6,
        name: 'Ropa primavera',
        price: 447,
        brand: 'sasha',
        colors: ['blanco', 'azul', 'rosa'],
        sizes: ['lg', 'md'],
        qualification: 3,
        reviews: 5,
        available: true,
        description: 'Falda beige y blusa color celeste',
        category: 'healty and beauty',
        amount: 1,
        image:
          'https://www.dhresource.com/0x0/f2/albu/g7/M00/88/A9/rBVaSVuDki2AYLGVAAU-DimOtuQ554.jpg'
      },
      {
        id: 7,
        name: 'Ropa elegante',
        price: 477,
        brand: 'sasha',
        colors: ['blanco', 'azul', 'rosa'],
        sizes: ['lg', 'md'],
        qualification: 4,
        reviews: 5,
        available: true,
        description: 'Falda beige y blusa color celeste',
        category: 'healty and beauty',
        amount: 1,
        image:
          'https://images-na.ssl-images-amazon.com/images/I/51poVmmSH3L._AC_SX425_.jpg'
      },
      {
        id: 8,
        name: 'Ropa casual',
        price: 455,
        brand: 'sasha',
        colors: ['blanco', 'azul', 'rosa'],
        sizes: ['lg', 'md'],
        qualification: 4,
        reviews: 5,
        available: true,
        description: 'Falda beige y blusa color celeste',
        category: 'healty and beauty',
        amount: 2,
        image:
          'https://ae01.alicdn.com/kf/HTB1fBYNQpXXXXctXXXXq6xXFXXXU/Conjunto-de-2-unidades-de-traje-negro-ajustado-para-hombre-moda-coreana-trajes-de-boda-de.jpg'
      },
      {
        id: 9,
        name: 'Ropa de noche',
        price: 858,
        brand: 'sasha',
        colors: ['blanco', 'azul', 'rosa'],
        sizes: ['lg', 'md'],
        qualification: 2,
        reviews: 5,
        available: true,
        amount: 3,
        description: 'Falda beige y blusa color celeste',
        category: 'healty and beauty',
        image:
          'https://http2.mlstatic.com/D_NQ_NP_693049-MLM25861430149_082017-W.jpg'
      }
    ],
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
    },
    carList: [],
    carItem: {
      id: 0,
      idProduct: 0,
      size: '',
      color: '',
      amount: 1
    }
  },
  mutations: {
    setProduct (state, payload) {
      if (!state.products.find(item => item.id === payload)) {
        router.push('/')
        return
      }
      state.product = state.products.find(item => item.id === payload)
    },
    getTotal (state) {
      state.total = 0
      state.carList.forEach(articulo => {
        getElement(state.products, articulo.idProduct)
          .then(producto => {
            state.total += producto.price * articulo.amount
          })
          .catch(err => console.error(err))
      })
    },
    addProductCar (state, payload) {
      state.carList = JSON.parse(localStorage.getItem('carList'))
      state.carList.push(payload)
      localStorage.setItem('carList', JSON.stringify(state.carList))
    },
    deleteProductCar (state, payload) {
      console.log('Borrando elelemto')
      state.carList = state.carList.filter(item => item.id !== payload)
      localStorage.setItem('carList', JSON.stringify(state.carList))
    },
    cargar (state, payload) {
      state.carList = payload
    },
    newProduct (state, payload) {
      state.carItem.amount = 1
      state.carItem.color = payload.colors[0]
      state.carItem.size = payload.sizes[0]
      state.carItem.idProduct = payload.id
    }
  },
  actions: {
    beforeAddProduct ({ commit }, id) {
      commit('newProduct', id)
    },
    addProductCar ({ commit }, payload) {
      commit('addProductCar', payload)
    },
    deleteProductCar ({ commit }, id) {
      console.log('ID', id)
      commit('deleteProductCar', id)
    },
    getProduct ({ commit }, id) {
      commit('setProduct', parseInt(id))
    },
    getObjectProduct ({ commit }, id) {
      return new Promise((resolve, reject) => {
        if (this.state.products.find(item => item.id === id)) {
          resolve(
            this.state.products.find(item => {
              return item.id === id
            })
          )
        } else {
          const error = new Error('No existe este elemento')
          reject(error)
        }
      })
    },
    getTotal ({ commit }) {
      commit('getTotal')
    },
    cargarBD ({ commit }) {
      if (localStorage.getItem('carList')) {
        const carList = JSON.parse(localStorage.getItem('carList'))
        commit('cargar', carList)
        return
      }
      localStorage.setItem('carList', JSON.stringify([]))
    }
  },
  modules: {}
})
