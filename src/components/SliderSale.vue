<template>
  <div class="slider__sale">
    <div class="container">
      <div class="slider__sale__container" style="position: relative;">
        <transition name="fade" tag="div" mode="out-in">
          <div>
            <img :src="currentSliderSaleImage"
                 style="width: 100%; max-height: 350px; min-height: 150px; border-radius: 15px"/>
          </div>
        </transition>
        <a class="slider__previous" @click="previousSliderSale">&#10094;</a>
        <a class="slider__next" @click="nextSliderSale">&#10095;</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SliderSale",
  data() {
    return {
      sliderSaleImages: ["https://static.insales-cdn.com/r/muzGw8cMKl0/rs:fit:1408:0:1/q:100/plain/files/1/2252/18680012/original/1408%D1%85470.jpg",
        "https://img.freepik.com/free-vector/stylish-yellow-and-red-black-friday-sale-memphis-style-banner_1017-34704.jpg?w=2000&t=st=1662889178~exp=1662889778~hmac=d7b323cac840d5d82742b28aac344835df72d90045abfbb6b255ac097fffb6b2"],
      currentSliderSaleImages: 0,
    }
  },
  methods: {
    nextSliderSale: function () {
      this.currentSliderSaleImages += 1;
    },
    previousSliderSale: function () {
      this.currentSliderSaleImages -= 1;
    },
  },
  computed: {
    currentSliderSaleImage: function () {
      return this.sliderSaleImages[Math.abs(this.currentSliderSaleImages) % this.sliderSaleImages.length];
    }
  },
  mounted() {
    setInterval(this.nextSliderSale, 5000);
  },
}
</script>

<style lang="scss" scoped>
.slider__previous, .slider__next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.slider__next {
  right: 0;
}

.slider__previous {
  left: 0;
}
</style>