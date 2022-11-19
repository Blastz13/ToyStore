<template>
  <div class="slider__horizontal">
    <div class="images__preview">
      <input type="radio" id="slide1" @click='this.currentSlide=0'>
      <label for="slide1" :class="{input__checked: this.currentSlide===0}"><img src="@/assets/product_1.jpeg"></label>
      <input type="radio" id="slide2" @click="this.currentSlide=1">
      <label for="slide2" :class="{input__checked: this.currentSlide===1}"><img src="@/assets/product_1.jpeg"></label>
      <input type="radio" id="slide3" @click="this.currentSlide=2">
      <label for="slide3" :class="{input__checked: this.currentSlide===2}"><img src="@/assets/product_1.jpeg"></label>
    </div>
    <div class="slider">
      <a v-if="this.currentSlide>0" @click="prevSlide">
        <img src="@/assets/arrow_back_2.svg" style="width: 30px; height: 30px">
      </a>
      <div class="slider__list">
        <div class="slider__item" :style="{transform: this.getCurrentTranslate}" ref="SliderHorizontalSliderItem">
          <img src="@/assets/product_1.jpeg">
        </div>
        <div class="slider__item" :style="{transform: this.getCurrentTranslate}">
          <img src="@/assets/product_1.jpeg">
        </div>
        <div class="slider__item" :style="{transform: this.getCurrentTranslate}">
          <img src="@/assets/product_1.jpeg">
        </div>
      </div>
      <a v-if="this.currentSlide<2" @click="nextSlide" class="button__next">
        <img src="@/assets/arrow_forward.svg" style="width: 30px; height: 30px">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductSliderImages",
  data() {
    return {
      currentSlide: 0,
      currentWidth: 0
    }
  },
  computed: {
    getCurrentTranslate() {
      return 'translateX(' + this.currentSlide * this.currentWidth + 'px)';
    },
  },
  created() {
    window.addEventListener("resize", this.updateWidth);
  },
  mounted() {
    this.updateWidth()
  },
  methods: {
    nextSlide: function () {
      this.currentSlide += 1;
    },
    prevSlide: function () {
      this.currentSlide -= 1;
    },
    updateWidth() {
      this.currentWidth = -this.$refs.SliderHorizontalSliderItem.clientWidth;
    },
  },
}
</script>

<style lang="scss" scoped>
$base-background: #0073e6;
$base-background-white: #0381ff;
$base-grey: rgba(75, 75, 75, 0.9);

.button__next {
  position: absolute;
  margin-left: 430px;
}

.slider__horizontal {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

input {
  display: none;
}

.images__preview > label {
  display: block;
  cursor: pointer;
  padding: 5px;
  width: 135px;
}

.input__checked {
  border: 2px solid $base-background-white;
  padding: 3px !important;
}

.images__preview > label > img {
  width: 100%;
}

.slider {
  display: flex;
  align-items: center;
  width: 460px;
}

.slider__list {
  display: flex;
  overflow: hidden;
  width: 400px;
  position: absolute;
  margin-left: 30px;
}

.slider__item > img {
  width: 400px;
}

.slider__item {
  transition: transform ease-in-out .5s;
}

@media (max-width: 600px) {
  .slider__list {
    width: 240px;
  }
  .slider__item > img {
    width: 240px;
  }
  .button__next {
    margin-left: 270px;
  }
  .slider {
    width: 300px;
    height: 300px;
  }
  .images__preview {
    display: none;
  }
}

</style>