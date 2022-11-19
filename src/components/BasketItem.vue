<template>
  <div class="basket__item">
    <img class="basket__item-image" src="@/assets/product_1.jpeg">
    <div class="basket__item-description">
      <span>Рюкзак</span>
    </div>
    <div class="basket__item-price">1000 ₽</div>
  </div>
</template>

<script>
export default {
  name: "BasketItem"
}
</script>

<style scoped>
.basket__item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.basket__item-image {
  width: 100px;
  height: 100px;
  align-items: center;
  align-content: center;
  background: white;
  flex: 0 1 100px;
  object-fit: contain;
}

.basket__item-description {
  flex: 1 1 content;
  font-size: 16px;
  padding: 0 10px;
}

.basket__item-price {
  text-align: end;
  font-weight: bold;
}
</style>