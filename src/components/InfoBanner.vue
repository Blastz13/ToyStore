<template>
  <div class="info__banner">
    <div class="container">
      <div class="banner__list" >
        <BannerItem v-for="i in (1, 2, 3,4, 5, 6)" :key="{i}"/>
      </div>
    </div>
  </div>
</template>

<script>
import BannerItem from "@/components/BannerItem";
export default {
  name: "InfoBanner",
  components: {BannerItem}
}
</script>

<style lang="scss" scoped>
$base-background: #0073e6;
$base-background-white: #0381ff;
$base-grey: rgba(75, 75, 75, 0.9);

.banner__list {
  display: grid;
  column-gap: 30px;
  row-gap: 30px;
  grid-template-columns: repeat(2, 1fr);
}
@media (max-width: 600px){
  .banner__list {
    display:block;
  }
}

</style>