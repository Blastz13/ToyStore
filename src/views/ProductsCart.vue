<template>
  <CategoryBreadcrumb/>
  <CartGrid/>
  <SliderProduct/>
</template>

<script>
import SliderProduct from "@/components/SliderProduct";
import CartGrid from "@/components/CartGrid";
import CategoryBreadcrumb from "@/components/CategoryBreadcrumb";

export default {
  name: "ProductsCart",
  components: {CategoryBreadcrumb, CartGrid, SliderProduct}
}
</script>

<style lang="scss" scoped>

</style>