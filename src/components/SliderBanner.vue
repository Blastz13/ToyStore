<template>
  <div class="banner__slider__horizontal">
    <div class="container">
      <div class="banner__slider-title">
        <h4>Новости</h4>
        <div class="banner__slider-control">
          <a @click="previousProductHorizontalSlider">
            <img src="@/assets/arrow_back.svg" style="width: 20px; height: 20px">
          </a>
          <a @click="nextProductHorizontalSlider">
            <img src="@/assets/arrow_forward.svg" style="width: 20px; height: 20px">
          </a>
        </div>
      </div>
      <div class="banner__list" ref="ProductListHorizontalSlider">
        <div class="banner__list-item" v-for="i in (1, 2, 3,4, 5, 6,7,8,9,10)" :key="{i}">
          <BannerItem/>
          <h4>Игрушки для детей</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BannerItem from "@/components/BannerItem";

export default {
  name: "SliderBanner",
  components: {BannerItem},
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

.banner__list {
  display: flex;
  width: 100%;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 0px;
  }

}

.banner__list-item {
  min-width: 400px;
  margin: 10px;
  h4{
    margin:10px 0px;
    text-align: center;
  }
}

.banner__slider__horizontal {
  margin-top: 15px;
}

.banner__slider-title {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    margin: 0;
  }
}
@media (max-width: 600px){
  .banner__list-item {
    min-width: 250px;
    margin: 5px;
  }
  h4{
    margin:10px 0px;
    font-size: 17px;
  }
}
</style>