<template>
  <div class="cart__product-item">
    <img src="@/assets/product_item_1.jpeg" style="width: 100px;">
    <div class="product-item__description">
      <div class="product-item__info">
        <h3>Ботинки детские</h3>
      </div>

      <div class="product__counter">
        <span @click="this.reduceCounter">&#8211;</span>
        <span>{{ this.product_count }} </span>
        <span @click="this.product_count+=1">+</span>
      </div>

      <div class="product-item__price">
        <h3>100₽</h3>
      </div>
      <div class="product-item__action">
        <img src="@/assets/delete.svg" style="width: 30px; height: 30px">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartProductItem",
  data() {
    return {
      product_count: 0
    }
  },
  methods: {
    reduceCounter() {
      if (this.product_count > 0) {
        this.product_count -= 1;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.product-item__description h3 {
  margin: 0;
}

.cart__product-item {
  display: flex;
  border-bottom: 1px solid rgba(200, 200, 200, 1);
  padding: 10px;
}

.cart__product-item:last-child {
  border: none;
}

.product-item__action {
  width: 20px;
  height: 20px;
}

.product-item__description {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-left: 20px;
}

.product__counter {
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  border-radius: 10px;
  width: 80px;
}

.product__counter span {
  padding: 5px;
  color: black;
  font-weight: bold;
  font-size:24px;
}
</style>