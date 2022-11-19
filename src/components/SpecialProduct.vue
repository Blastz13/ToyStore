<template>
  <div class="special__product">
    <div class="container">
      <div class="special__product-title">
        <h4>Обувь</h4>
        <div class="special__product__slider-control">
          <a @click="previousProductHorizontalSlider">
            <img src="@/assets/arrow_back.svg" style="width: 20px; height: 20px">
          </a>
          <a @click="nextProductHorizontalSlider">
            <img src="@/assets/arrow_forward.svg" style="width: 20px; height: 20px">
          </a>
        </div>
      </div>
      <div class="special__product-wrapper" :style="{flexDirection: direction}">
        <div class="special__product-banner">
          <SpecialBannerItem/>
        </div>
        <div class="special__product__list" ref="ProductListHorizontalSlider">
          <SpecialBannerItem class="banner-hidden"/>
          <ProductCard class="product__item-hidden" v-for="i in (1, 2, 3, 4, 5, 6)" :key="{i}"/>
          <div class="product__item-slide" v-for="i in (1, 2, 3, 4, 5, 6)" :key="{i}">
            <ProductCard/>
            <ProductCard/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import ProductCard from "@/components/ProductCard";
import SpecialBannerItem from "@/components/SpecialBannerItem";

export default {
  name: "SpecialProduct",
  props: {
    direction: String
  },
  components: {ProductCard, SpecialBannerItem},
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

.special__product {
  margin-top: 15px;
}

.special__product-title {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    margin: 0;
  }
}

.special__product-wrapper {
  display: flex;
}

.special__product-banner {
  margin: 10px;
  min-width: 40%;
}

.special__product__list {
  display: flex;
  overflow-x: scroll;
  align-items: flex-start;
  margin-right: 10px;

  &::-webkit-scrollbar {
    width: 0;
  }
}

.product:first-child {
  margin-left: 5px;
}

.product__item-hidden {
  display: none;
}

.banner-hidden {
  display: none;
}

.product {
  margin: 10px 5px;
  max-width: 200px;
  min-width: 200px;
}
.product .count_pc{
  display: none !important;
}
.product .count_mob{
  display: block !important;
}

@media (max-width: 600px) {
  .special__product-banner {
    display: none;
  }
  .product__item-slide {
    display: none;
  }
  .product__item-hidden {
    display: flex;
  }
  .banner-hidden {
    display: block;
    margin-top: 10px;
    margin-right: 5px;
  }
  .product {
    min-width: 160px;
  }
}
</style>