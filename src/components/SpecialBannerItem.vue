<template>
  <div class="special__banner__item">
    <img src="@/assets/banner_2.jpeg" class="banner__image">
  </div>
</template>

<script>
export default {
  name: "SpecialBannerItem"
}
</script>

<style lang="scss" scoped>
$base-background: #0073e6;
$base-background-white: #0381ff;
$base-grey: rgba(75, 75, 75, 0.9);

.banner__image {
  border-radius: 15px;
  height: 750px;
  width: 100%;
  object-fit: cover;
}

.special__banner__item {
  min-width: 160px;
}

@media (max-width: 600px) {
  .banner__image {
    height: 300px;
  }
}
</style>