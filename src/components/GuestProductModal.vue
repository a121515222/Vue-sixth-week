<template>
    <h1>產品頁</h1>
    <div class="modal fade"  tabindex="-1"  aria-hidden="true" ref="guestProductModal" >
    <div class="modal-dialog modal-xl modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" >{{product.title}}</h5>
          <button type="button" class="btn-close" aria-label="Close" @click="guestModalClose()"></button>
        </div>
        <div class="modal-body">
        <img class="img-fluid" :src="product.imageUrl" :alt="`${ product.title } 照片`">
        <div class="d-flex">
            <p>{{product.title}}<span class="badge bg-primary">{{product.category}}</span></p>

        </div>
        <p>商品描述:{{product.description}}</p>
        <p>商品內容:{{product.content}}</p>
        <div v-if="product.origin_price===product.price">
        <p>售價:{{product.origin_price}}</p>
        </div>
        <div v-else>
        <p> 原價{{product.origin_price}}，特價{{product.price}}</p>
        </div>

        </div>
        <div class="modal-footer gap-3">
          <button type="button" class="btn btn-success" @click="qty-=1" :disabled="qty<2"><i class="bi bi-dash"></i></button>
          <span style="min-width:20px"> {{qty}}</span>
          <button type="button" class="btn btn-success" @click="qty+=1" :disabled="qty>=100"><i class="bi bi-plus"></i></button>
          <button type="button" class="btn btn-success" @click="addCart(product.id)" :disabled="product.id===isLoading">
          <span v-show="product.id===isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          加入購物車</button>
          <button type="button" class="btn btn-secondary" @click="guestModalClose()">關閉</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BsModal from 'bootstrap/js/dist/modal'
export default {
  data () {
    return {
      bsModal: '',
      product: {},
      qty: 1,
      isLoading: ''
    }
  },
  emits: ['sendId'],
  methods: {
    guestModalOpen (id) {
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`).then((res) => {
        this.product = res.data.product
        this.bsModal.show()
      }).catch((error) => { console.dir(error) })
    },
    guestModalClose () {
      this.bsModal.hide()
    },
    addCart (id) {
      const sendCart = {
        data: {
          product_id: '',
          qty: 1
        }
      }
      sendCart.data.product_id = id
      sendCart.data.qty = this.qty
      this.$emit('sendId', id)
      this.isLoading = id
      this.$http.post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`, sendCart).then((res) => {
        this.$emit('sendId', '')
        this.isLoading = ''
        this.qty = 1
      }).catch((error) => { console.dir(error.response) })
    }
  },

  mounted () {
    this.bsModal = new BsModal(this.$refs.guestProductModal)
  }
}
</script>
