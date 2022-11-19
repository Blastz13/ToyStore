<template>
  <div class="product__slider__horizontal">
    <div class="container">
      <div class="product__slider-title">
        <h4>Детские рюкзаки</h4>
        <div class="product__slider-control">
          <a @click="previousProductHorizontalSlider">
            <img src="@/assets/arrow_back.svg" style="width: 20px; height: 20px">
          </a>
          <a @click="nextProductHorizontalSlider">
            <img src="@/assets/arrow_forward.svg" style="width: 20px; height: 20px">
          </a>
        </div>
      </div>
      <div class="product__list" ref="ProductListHorizontalSlider">
        <ProductCard v-for="i in (1, 2, 3,4, 5, 6)" :key="{i}"/>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";

export default {
  name: "SliderProduct",
  components: {ProductCard},
  methods: {
    nextProductHorizontalSlider: function () {
      this.$refs.ProductListHorizontalSlider.scrollTo({
        left: this.$refs.ProductListHorizontalSlider.scrollLeft + 100,
        behavior: 'smooth'
      })
    },
    previousProductHorizontalSlider: function () {
      this.$refs.ProductListHorizontalSlider.scrollTo({
        left: this.$refs.ProductListHorizontalSlider.scrollLeft - 100,
        behavior: 'smooth'
      })
    },
  },
}
</script>

<style lang="scss" scoped>
$base-background: #0073e6;
$base-background-white: #0381ff;
$base-grey: rgba(75, 75, 75, 0.9);

.product__list {
  display: flex;
  width: 100%;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 0px;
  }

}

.product__slider__horizontal {
  margin-top: 15px;
}

.product__slider-title {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    margin: 0;
  }
}

@media only screen and (max-width: 600px) {
  .slider__categories-control {
    display: none;
  }
}
</style>